package org.example.springhotelmanagement.service;

import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.AuthDto.UserLoginDto;
import org.example.springhotelmanagement.AuthDto.UserRegisterDto;
import org.example.springhotelmanagement.dao.GuestDao;
import org.example.springhotelmanagement.dao.RoleDao;
import org.example.springhotelmanagement.entity.Guest;
import org.example.springhotelmanagement.entity.Role;
import org.example.springhotelmanagement.exception.EmailException;
import org.example.springhotelmanagement.jwt.JwtProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final GuestDao guestDao;
    private  final RoleDao roleDao;
    private  final PasswordEncoder passwordEncoder;
    private  final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;

    public String register(UserRegisterDto userRegisterDto) {
        if (guestDao.existsByEmail(userRegisterDto.email())){
            throw  new EmailException();
        }
        Role role = roleDao.findByRoleName("ROLE_USER").orElseThrow(() -> new UsernameNotFoundException("ROLE NOT FOUND"));
        Guest guest = new Guest();
        guest.setName(userRegisterDto.name());
        guest.setEmail(userRegisterDto.email());
        guest.setPhone(userRegisterDto.phone());
        guest.setPassword(passwordEncoder.encode(userRegisterDto.password()));
        guest.addRole(role);
        guestDao.save(guest);

        return  "Register successful";
    }

    public String loginUser(UserLoginDto userLoginDto) {
       Authentication au = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userLoginDto.userNameOrEmail() ,userLoginDto.password() )
        );
        SecurityContextHolder.getContext().setAuthentication(au);
        String token = jwtProvider.generateToken(au);
        return  token ;
    }
}
