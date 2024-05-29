package dev.gulintudor.MyForum.service;

import dev.gulintudor.MyForum.model.User;
import dev.gulintudor.MyForum.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    //return all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User registerUser(String username, String password){
        if(userRepository.findByUsername(username) != null){
            throw new RuntimeException("User already exists");
        }

        User user = new User();

        user.setUsername(username);
        user.setPassword(password);

        return userRepository.save(user);
    }

    public User findByUsername(String username){
        return userRepository.findByUsername(username);
    }

}
