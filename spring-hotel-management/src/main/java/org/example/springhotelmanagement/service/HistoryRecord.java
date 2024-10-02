package org.example.springhotelmanagement.service;

import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.dao.HistoryRecordDao;
import org.example.springhotelmanagement.dto.ReservationDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HistoryRecord {
    private  final HistoryRecordDao historyRecordDao;

    public List<ReservationDto> getAllRecord (){
        return  historyRecordDao.getAllHistory();
    }

    public  List<ReservationDto> userDetailRecord(String name){
         return historyRecordDao.searchByName(name);
    }


}
