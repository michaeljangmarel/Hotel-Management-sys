package org.example.springhotelmanagement.controller;

import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.dto.ContactDto;
import org.example.springhotelmanagement.entity.Contact;
import org.example.springhotelmanagement.service.ContactService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping("/contact")
public class ContactController {    
    private final ContactService contactService;
    @PostMapping("/add")
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    public Contact add(@RequestBody ContactDto contactDto) {
        return  contactService.addContact(contactDto);
    }
}
