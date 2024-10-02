package org.example.springhotelmanagement.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.dto.RoomDto;
import org.example.springhotelmanagement.service.RoomService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
@RequiredArgsConstructor
@CrossOrigin("*")
public class RoomController {

    private final RoomService roomService;
    @GetMapping("/all")
     public List<RoomDto> getAllRooms() {
        return roomService.getAllRoom();
    }

    @GetMapping("/one/{id}")
    @PreAuthorize("hasAnyRole('ROLE_USER' , 'ROLE_ADMIN')")
    public  RoomDto getOneRoom(@PathVariable(name = "id") Long id) {
        return roomService.getOneRoom(id);
    }

    @PatchMapping("/check/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN' , 'ROLE_USER')")
    public  RoomDto setAvailability(@PathVariable(name = "id") Long id) {
        return  roomService.setRoomTrue(id);
    }
    @PatchMapping("/uncheck/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public  RoomDto unsetAvailability(@PathVariable(name = "id") Long id) {
        return  roomService.setRoomFalse(id);
    }

}
