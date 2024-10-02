package org.example.springhotelmanagement.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserReservationInfo {

    private  Long id ;
    private  String  name ;
    private  String email;
    private  String phone;
    private  String floor ;
    private  String roomName;
    private  boolean available ;
    private  double price;
    private  String roomType;


}
