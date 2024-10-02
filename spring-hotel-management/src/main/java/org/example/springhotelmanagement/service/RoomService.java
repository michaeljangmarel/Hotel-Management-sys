package org.example.springhotelmanagement.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.dao.RoomDao;
import org.example.springhotelmanagement.dto.RoomDto;
import org.example.springhotelmanagement.entity.Room;
import org.example.springhotelmanagement.util.RoomUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoomService {

    private  final RoomDao roomDao ;

    public List<RoomDto> getAllRoom(){
        return  roomDao.findAll().stream().map(RoomUtil::toDto).collect(Collectors.toUnmodifiableList());
    }
    public RoomDto getOneRoom(Long id){
        return  RoomUtil.toDto(roomDao.findById(id).orElseThrow(() -> new EntityNotFoundException("Room not found")));
    }
 // true
    public RoomDto setRoomTrue(Long id){
        Room room = roomDao.findById(id).orElseThrow(() -> new EntityNotFoundException("room not found"));
        room.setAvailable(true);
        roomDao.save(room);
        return RoomUtil.toDto(room);
    }
// false
    public RoomDto setRoomFalse(Long id){
        Room room = roomDao.findById(id).orElseThrow(() -> new EntityNotFoundException("room not found"));
        room.setAvailable(false);
        roomDao.save(room);
        return RoomUtil.toDto(room);
    }
}
