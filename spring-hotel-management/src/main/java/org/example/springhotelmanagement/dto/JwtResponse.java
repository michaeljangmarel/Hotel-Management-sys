package org.example.springhotelmanagement.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class JwtResponse {
    private String accessToken;
    private  String tokenType = "Bearer";

}
