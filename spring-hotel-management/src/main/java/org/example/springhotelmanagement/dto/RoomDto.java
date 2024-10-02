package org.example.springhotelmanagement.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RoomDto {
    private  Long id ;
    private  String floor ;
    private  String roomName ;
    private  double price;
    private  String roomType;
    private  String imgUrl;
    private  boolean available ;
}
