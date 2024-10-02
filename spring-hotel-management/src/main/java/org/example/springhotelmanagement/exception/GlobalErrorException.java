package org.example.springhotelmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalErrorException  extends ResponseEntityExceptionHandler {
    @ExceptionHandler({EmailException.class , UsernameNotFoundException.class})
    public ResponseEntity<ErrorDetail> handleToHotelManage(Exception ex , WebRequest request) {
        ErrorDetail errorDetail = new ErrorDetail(LocalDateTime.now() , ex.getMessage() , request.getDescription(false));
        return new  ResponseEntity<>(errorDetail , HttpStatus.BAD_REQUEST);
    }
}
