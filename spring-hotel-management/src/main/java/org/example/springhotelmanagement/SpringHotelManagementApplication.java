package org.example.springhotelmanagement;

import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.dao.GuestDao;
import org.example.springhotelmanagement.dao.ReservationDao;
import org.example.springhotelmanagement.dao.RoomDao;
import org.example.springhotelmanagement.entity.Guest;
import org.example.springhotelmanagement.entity.Role;
import org.example.springhotelmanagement.entity.Room;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
@SpringBootApplication
@RequiredArgsConstructor
public class SpringHotelManagementApplication {
    private  final RoomDao roomDao;
    private  final PasswordEncoder passwordEncoder;
    private  final GuestDao guestDao;
    private  final ReservationDao reservationDao;
     @Bean@Profile("dev")
    public ApplicationRunner runner (){
        return args -> {
             // room creation default
            Room room1 = new Room("1st" , "A1" , 2000.0 , "Single", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4a5x9SPtBgEmW1lG5qPnSmU8bURrT7nx2JA&s" ,true);
            Room room2 = new Room("1st" , "A2" , 4000.0 , "Double", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQ4yhi5fME-Q1ArgdRom82VBu48A6rdKr4w&s",true);
            Room room3 = new Room("1st" , "A3", 2000.0 ,  "Single","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMadC7IANbdC8lhXvHSZZnMkzF-Fayg7gng&s",true);
            Room room4 =new Room("1st" , "A4" , 6000.0 , "Family" ," https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOzrKw4ZcJEh-A8eT9RjSLDNltajkE9x8hw&s",true);
            Room room5  =new Room("1st" , "A5" , 3000.0 , "Single" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfGgVq83-c35H9lbYqjbSUKwjlVW63kfitQ&s" ,true);
            Room room6= new Room("2st" , "B6" , 4000 , "Double" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4a5x9SPtBgEmW1lG5qPnSmU8bURrT7nx2JA&s",true);
            Room room7 = new Room("2st" , "B7" ,4000 , "Double" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQ4yhi5fME-Q1ArgdRom82VBu48A6rdKr4w&s" ,true);
            Room room8 = new Room("2st" , "B8" ,4000 , "Double" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMadC7IANbdC8lhXvHSZZnMkzF-Fayg7gng&s",true);
            Room room9 =new Room("2st" , "B9", 4000 , "Double" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOzrKw4ZcJEh-A8eT9RjSLDNltajkE9x8hw&s",true);
            Room room10  =new Room("2st" , "B10" ,4000 , "Double" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfGgVq83-c35H9lbYqjbSUKwjlVW63kfitQ&s",true);

           roomDao.save(room1);
           roomDao.save(room2);
           roomDao.save(room3);
           roomDao.save(room4);
           roomDao.save(room5);
           roomDao.save(room6);
           roomDao.save(room7);
           roomDao.save(room8);
           roomDao.save(room9);
           roomDao.save(room10);

            Role admin=new Role(null,"ROLE_ADMIN");
            Role user=new Role(null,"ROLE_USER");
            Role manager = new Role(null , "ROLE_MANAGER");
            Guest user1  = new Guest("John" , "john@gmail.com" , "09-899-234-22" , passwordEncoder.encode("12345"));
            Guest user2  = new Guest("Mary" , "mary@gmail.com" , "09-899-255-44" , passwordEncoder.encode("12345"));
            Guest user3  = new Guest("James" , "james@gmail.com" , "09-839-257-14" , passwordEncoder.encode("12345"));


            user1.addRole(admin);
            user2.addRole(user);
            user3.addRole(manager);

            guestDao.save(user1);
            guestDao.save(user2);
            guestDao.save(user3);

//             Reservation res2 = new Reservation(null , user2 , room2 , LocalDate.now(), LocalDate.now());
//             reservationDao.save(res2);


        };

    }

    public static void main(String[] args) {
        SpringApplication.run(SpringHotelManagementApplication.class, args);
    }

}
