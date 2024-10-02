package org.example.springhotelmanagement.dao;

import org.example.springhotelmanagement.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomDao extends JpaRepository<Room, Long> {


}
