package org.example.springhotelmanagement.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GuestDto {
    private Long id;
    private  String  name ;
    private  String email;
    private  String phone;
    private  String password;

}
