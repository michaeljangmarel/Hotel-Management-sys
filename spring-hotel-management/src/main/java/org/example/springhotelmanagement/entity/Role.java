package org.example.springhotelmanagement.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    private String roleName;
    @ManyToMany(mappedBy="roles")
    private List<Guest> guests;

    public Role(Long id, String roleName) {
        this.id = id;
        this.roleName = roleName;
    }
}
