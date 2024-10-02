package org.example.springhotelmanagement.dto;


import lombok.*;
import org.example.springhotelmanagement.entity.Guest;
import org.example.springhotelmanagement.entity.Room;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ReservationDto {

    private  Long id;
    private  Long roomId;
    private  String  name ;
    private  String email;
    private  String phone;
    private  String floor ;
    private  String roomName;
    private  double price;
    private  String roomType;
    private  String imgUrl;
    private  boolean available ;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
}
