package org.example.springhotelmanagement.util;

import org.example.springhotelmanagement.dto.ContactDto;
import org.example.springhotelmanagement.entity.Contact;
import org.springframework.beans.BeanUtils;

public class ContactUtil {

    public ContactDto toContactDto(Contact contact) {
        ContactDto contactDto = new ContactDto();
        BeanUtils.copyProperties(contact, contactDto);
        return contactDto;
    }
}
