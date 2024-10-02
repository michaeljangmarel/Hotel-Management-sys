package org.example.springhotelmanagement.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private  Long id;


    @ManyToOne
    private  Guest guest;
    @ManyToOne
    private Room room;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;

}
