package org.example.springhotelmanagement.dao;

import org.example.springhotelmanagement.dto.ReservationDto;
import org.example.springhotelmanagement.dto.UserReservationInfo;
import org.example.springhotelmanagement.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationDao extends JpaRepository<Reservation, Long> {
    @Query("""
    select  new org.example.springhotelmanagement.dto.ReservationDto(r.id, d.id ,g.name , g.email , g.phone ,d.floor ,d.roomName , d.price , d.roomType , d.imgUrl, d.available, r.checkInDate , r.checkOutDate) from Guest g join g.reservations  r  join
    r.room d
""")
    public List<ReservationDto> allReservations();

    @Query("""
   select new org.example.springhotelmanagement.dto.UserReservationInfo(d.id , g.name  ,g.email , g.phone ,d.floor , d.roomName , d.available , d.price ,d.roomType) from Reservation r join r.room d join r.guest g where g.name = :username
""")
    public List<UserReservationInfo> findByUserName(@Param("username") String userName);
}
