package org.example.springhotelmanagement.service;

import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.dao.ContactDao;
import org.example.springhotelmanagement.dao.GuestDao;
import org.example.springhotelmanagement.dto.ContactDto;
import org.example.springhotelmanagement.entity.Contact;
import org.example.springhotelmanagement.entity.Guest;
import org.example.springhotelmanagement.entity.Room;
import org.example.springhotelmanagement.util.ContactUtil;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {
    private  final ContactDao contactDao;
    private  final GuestDao guestDao;
    public Contact addContact(ContactDto contactDto) {
        Guest guest =  guestDao.findByName(contactDto.getGuest());
         Contact contact = new Contact(null , contactDto.getName(), contactDto.getEmail(), contactDto.getMessage(), guest );
          return contactDao.save(contact);
    }
}
