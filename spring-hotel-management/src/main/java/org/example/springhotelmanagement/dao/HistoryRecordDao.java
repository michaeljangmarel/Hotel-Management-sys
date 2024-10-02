package org.example.springhotelmanagement.dao;

import org.example.springhotelmanagement.dto.ReservationDto;
import org.example.springhotelmanagement.dto.UserReservationInfo;
import org.example.springhotelmanagement.entity.HistoryRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HistoryRecordDao  extends JpaRepository<HistoryRecord, Long> {
    @Query("""
 select  new org.example.springhotelmanagement.dto.ReservationDto(h.id, d.id ,g.name , g.email , g.phone ,d.floor ,d.roomName , d.price , d.roomType , d.imgUrl, d.available, h.checkInDate , h.checkOutDate) from HistoryRecord h join h.room d join h.guest g
""")
    public List<ReservationDto>  getAllHistory();

    @Query("""
 select  new org.example.springhotelmanagement.dto.ReservationDto(h.id, d.id ,g.name , g.email , g.phone ,d.floor ,d.roomName , d.price , d.roomType , d.imgUrl, d.available, h.checkInDate , h.checkOutDate) from HistoryRecord h join h.room d join h.guest g where g.name =:name
""")
    public  List<ReservationDto> searchByName(@Param("name") String name);
}
