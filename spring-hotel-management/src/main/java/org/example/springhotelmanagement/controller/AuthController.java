package org.example.springhotelmanagement.controller;

import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.AuthDto.UserLoginDto;
import org.example.springhotelmanagement.AuthDto.UserRegisterDto;
import org.example.springhotelmanagement.dto.JwtResponse;
import org.example.springhotelmanagement.service.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {
    private  final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<String>  register(@RequestBody UserRegisterDto userRegisterDto) {
        String response = authenticationService.register(userRegisterDto);
        return  new ResponseEntity<>(response , HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public  ResponseEntity<JwtResponse>login(@RequestBody UserLoginDto userLoginDto) {
        String token = authenticationService.loginUser(userLoginDto);
         JwtResponse  jwtResponse = new JwtResponse();
        jwtResponse.setAccessToken(token);
        return  new ResponseEntity<>(jwtResponse , HttpStatus.OK);
    }

}
