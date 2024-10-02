package org.example.springhotelmanagement.util;

import org.example.springhotelmanagement.dto.ReservationDto;
import org.example.springhotelmanagement.entity.Reservation;
import org.springframework.beans.BeanUtils;

public class ReservationUtil {
    public static ReservationDto toReservationDto(Reservation reservation) {
        ReservationDto reservationDto = new ReservationDto();
        BeanUtils.copyProperties(reservation,reservationDto);
        return reservationDto;
    }
    public static Reservation toReservation(ReservationDto reservationDto) {
        Reservation reservation = new Reservation();
        BeanUtils.copyProperties(reservationDto,reservation);
         return reservation;

    }
}
