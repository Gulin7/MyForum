package dev.gulintudor.MyForum.controller;

import dev.gulintudor.MyForum.service.UserService;
import dev.gulintudor.MyForum.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    //return all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try{
            User registeredUser = userService.registerUser(user.getUsername(), user.getPassword());
            return ResponseEntity.ok(registeredUser);
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user){
        try{
            User loggedInUser = userService.findByUsername(user.getUsername());
            if(loggedInUser.getPassword().equals(user.getPassword())){
                return ResponseEntity.ok(loggedInUser);
            }
            else{
                return ResponseEntity.badRequest().body("Invalid password");
            }
        }
        catch(Exception e){
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
}
