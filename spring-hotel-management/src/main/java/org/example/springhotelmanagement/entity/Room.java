package org.example.springhotelmanagement.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private  Long id ;
    private  String floor ;
    private  String roomName ;
    private  double price;
    private  String roomType;
    private  String imgUrl;
    private  boolean available ;
    @OneToMany(mappedBy = "room" , cascade = CascadeType.ALL, orphanRemoval = true)
    private  List<HistoryRecord> historyRecords  ;
    @OneToMany(mappedBy = "room" , cascade = CascadeType.ALL, orphanRemoval = true)
   private  List<Reservation> reservations ;
    public Room(String floor, String roomName , double price , String roomType , String imgUrl,boolean available ) {
        this.floor = floor;
        this.roomName = roomName;
        this.price = price;
        this.roomType = roomType;
        this.imgUrl = imgUrl;
        this.available = available;
    }

    public void addReservation(Reservation reservation) {
        reservations.add(reservation);
    }
}
