package org.example.springhotelmanagement.util;

import org.example.springhotelmanagement.dto.RoomDto;
import org.example.springhotelmanagement.entity.Room;
import org.springframework.beans.BeanUtils;

public class RoomUtil {
    public static RoomDto toDto(Room room) {
        RoomDto roomDto = new RoomDto();
        BeanUtils.copyProperties(room, roomDto);
        return roomDto;
    }
    public  static Room toRoom(RoomDto roomDto) {
        Room room = new Room();
        BeanUtils.copyProperties(roomDto, room);
        return room;
    }
}
