package org.example.springhotelmanagement.dao;

import org.example.springhotelmanagement.entity.Guest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface  GuestDao  extends JpaRepository<Guest, Long> {
    @Query(""" 
select  g from Guest g  where  g.name = ?1 or g.email =?1
""")
    Optional<Guest> findByEmailUserName(String usernameOrEmail);
    boolean existsByEmail(String email);

    @Query("""
select  g from Guest g where g.name = :name
""")
    Guest findByName(String name);
}
