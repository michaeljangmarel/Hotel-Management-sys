package org.example.springhotelmanagement.dao;

import org.example.springhotelmanagement.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ContactDao  extends JpaRepository<Contact, Long> {

}
