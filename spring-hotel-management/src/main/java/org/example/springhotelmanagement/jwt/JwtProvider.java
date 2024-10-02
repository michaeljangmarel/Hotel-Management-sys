package org.example.springhotelmanagement.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtProvider {
     @Value("${app.jwt.secret}")
    private  String jwtSecret;
    @Value("${app.jwt.expiration.milliseconds}")
    private  String jwtExp;

    public String generateToken(Authentication auth) {
        String username = auth.getName();
        String role = auth.getAuthorities().stream().toList().toString();
        Date currentDate = new Date();
         long expirationMillis = Long.parseLong(jwtExp);
        Date expiration = new Date(currentDate.getTime() + expirationMillis);
        String token = Jwts.builder()
                .setSubject(username)
                .claim("user" , username)
                .claim("role", role)
                .setIssuedAt(currentDate)
                .setExpiration(expiration)
                .signWith(key())
                .compact();
        return token;
    }

    private Key key (){
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }
    public String getUserNameFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token)
                .getBody();
        String username = claims.getSubject();
        return username;
    }
    public  boolean validateToken(String token) {
        Jwts.parser().setSigningKey(key())
                .build()
                .parse(token);
        return true;
    }
}
