package org.example.springhotelmanagement.service;

import lombok.RequiredArgsConstructor;
import org.example.springhotelmanagement.dao.GuestDao;
import org.example.springhotelmanagement.entity.SecurityUser;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService  implements UserDetailsService {
    private  final GuestDao guestDao;
    @Override
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        return guestDao.findByEmailUserName(usernameOrEmail)
                .map(SecurityUser::new)
                .orElseThrow(() -> new UsernameNotFoundException(usernameOrEmail));
    }
}
