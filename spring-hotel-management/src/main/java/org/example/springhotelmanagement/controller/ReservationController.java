package org.example.springhotelmanagement.controller;

import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.dto.ReservationDto;
import org.example.springhotelmanagement.dto.ReservationRequest;
import org.example.springhotelmanagement.dto.UserReservationInfo;
import org.example.springhotelmanagement.service.HistoryRecord;
import org.example.springhotelmanagement.service.ReservationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rev")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ReservationController {

    private final ReservationService reservationService;
    private final HistoryRecord historyRecord;

    @GetMapping("/all")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public List<ReservationDto> getAllReservations() {
        return reservationService.getAllReservations();
    }

    @GetMapping("/search/{name}")
    @PreAuthorize("hasAnyRole('ROLE_USER' , 'ROLE_ADMIN')")
    public  Long  searchUserName(@PathVariable(name = "name") String name){
        return reservationService.findByGuest(name);
    }


    @PostMapping("/bookRoom")
    @PreAuthorize("hasAnyRole('ROLE_USER' , 'ROLE_ADMIN')")
    public  ResponseEntity<String> bookRoomUser(@RequestBody ReservationRequest reservationRequest){
        String data = reservationService.addReservationProcess(reservationRequest);
        return  new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/currentUser/{name}")
    @PreAuthorize("hasAnyRole('ROLE_USER' , 'ROLE_ADMIN')")
    public  List<UserReservationInfo> searchReservation(@PathVariable(name = "name") String name){
        return reservationService.searchReservation(name);
    }

    @DeleteMapping("/del/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<String> deleteReservation(@PathVariable(name = "id") Long id){
       String response =  reservationService.deleteReservation(id);
        return  new ResponseEntity<>(response, HttpStatus.OK)  ;
    }


    @GetMapping("/history")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public  List<ReservationDto> getAllHistory(){
        return  historyRecord.getAllRecord();
    }
    @GetMapping("/history/{name}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    public  List<ReservationDto> userDetails(@PathVariable(name = "name") String name){
        return  historyRecord.userDetailRecord(name);
    }


}




