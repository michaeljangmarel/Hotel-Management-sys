package org.example.springhotelmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class EmailException extends ResponseStatusException {
    public EmailException() {
        super(HttpStatus.BAD_REQUEST , "Email Already Exists");
    }

}
