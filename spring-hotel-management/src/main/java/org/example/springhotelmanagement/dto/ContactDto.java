package org.example.springhotelmanagement.dto;

 import lombok.*;
 import org.example.springhotelmanagement.entity.Guest;


 @Getter
 @Setter
 @NoArgsConstructor
 @AllArgsConstructor
 @ToString
public class ContactDto {
    private  Long id ;
    private  String  name ;
    private  String email ;
    private  String message ;
    private String guest ;
}
