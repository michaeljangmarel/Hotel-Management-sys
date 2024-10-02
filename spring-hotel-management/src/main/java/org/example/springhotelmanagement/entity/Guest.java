package org.example.springhotelmanagement.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Guest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private  String  name ;
    private  String email;
    private  String phone;
    private  String password;
    @OneToMany(mappedBy = "guest" , cascade = CascadeType.ALL , orphanRemoval = true)
    private List<HistoryRecord> historyRecords;
    @OneToMany(mappedBy = "guest" , cascade = CascadeType.ALL , orphanRemoval = true)
    private List<Reservation> reservations;
    @OneToMany( mappedBy = "guest", cascade = CascadeType.ALL , orphanRemoval = true)
    private  List<Contact> contacts;

    @ManyToMany(fetch = FetchType.EAGER , cascade = CascadeType.ALL)
    @JoinTable(name = "guest_role"  , joinColumns = @JoinColumn(name = "guest_id" , referencedColumnName = "id") , inverseJoinColumns = @JoinColumn(name = "role_id" , referencedColumnName = "id") )
    private Set<Role> roles = new HashSet<>();

    public Guest(String name, String email, String phone, String password) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    public  void addContact(Contact contact) {
        contacts.add(contact);
    }

    public void addReservation(Reservation reservation) {
        reservations.add(reservation);
    }

    public void addRole(Role role) {
        roles.add(role);
    }

    @Override
    public String toString() {
        return "Guest{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
