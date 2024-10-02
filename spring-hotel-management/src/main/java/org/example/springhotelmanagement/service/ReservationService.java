package org.example.springhotelmanagement.service;

import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.dao.GuestDao;
import org.example.springhotelmanagement.dao.HistoryRecordDao;
import org.example.springhotelmanagement.dao.ReservationDao;
import org.example.springhotelmanagement.dao.RoomDao;
import org.example.springhotelmanagement.dto.ReservationDto;
import org.example.springhotelmanagement.dto.ReservationRequest;
import org.example.springhotelmanagement.dto.UserReservationInfo;
import org.example.springhotelmanagement.entity.Guest;
import org.example.springhotelmanagement.entity.HistoryRecord;
import org.example.springhotelmanagement.entity.Reservation;
import org.example.springhotelmanagement.entity.Room;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReservationService {
    private  final ReservationDao reservationDao;
    private  final RoomDao  roomDao;
    private  final GuestDao guestDao;
    private  final HistoryRecordDao historyRecordDao;
     public List<ReservationDto> getAllReservations() {
        return  reservationDao.allReservations();
    }

    public Long findByGuest (String name){
         Guest guest = guestDao.findByName(name);
         Long id = guest.getId();
         return id;
     }


    public String addReservationProcess(ReservationRequest reservationRequest) {
        Guest guest = guestDao.findByName(reservationRequest.getGuestId());
        Room room = roomDao.findById(reservationRequest.getRoomId()).orElseThrow(() -> new RuntimeException("Room not found"));
        if(!room.isAvailable()){
            return  "Room already booked";
        }
        room.setAvailable(false);
        roomDao.save(room);
        Reservation reservation = new Reservation(null , guest , room , reservationRequest.getCheckInDate() , reservationRequest.getCheckOutDate());
        reservationDao.save(reservation);
        HistoryRecord historyRecord = new HistoryRecord(null , guest , room , reservationRequest.getCheckInDate() , reservationRequest.getCheckOutDate());
        historyRecordDao.save(historyRecord);
        return  "Booked successfully";
    }

    public List<UserReservationInfo> searchReservation(String name) {
           return   reservationDao.findByUserName(name);
    }

    public String deleteReservation(Long reservationId) {
         reservationDao.deleteById(reservationId);
         return  "Deleted";
    }
}
