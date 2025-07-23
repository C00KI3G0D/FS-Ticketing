package crm.local.pap.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crm.local.pap.dtos.CreateUserDTO;
import crm.local.pap.dtos.MessageResponse;
import crm.local.pap.models.User;
import crm.local.pap.repositories.UserRepository;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping({ "", "/" })
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userRepository.findAll().stream().map(entity -> {
            User user = new User();
            user.setFirstName(entity.getFirstName());
            user.setLastName(entity.getLastName());
            user.setRoles(entity.getRoles());
            user.setNumber(entity.getNumber());
            user.setEmail(entity.getEmail());
            user.setPassword(entity.getPassword());
            return user;
        }).collect(Collectors.toList());

        return ResponseEntity.ok(users);
    }

    @PostMapping({ "", "/" })
    public ResponseEntity<MessageResponse> createUser(@RequestBody CreateUserDTO request) {
        User user = new User();

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setNumber(request.getNumber());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        return new ResponseEntity<MessageResponse>(new MessageResponse("User created successfully!"), HttpStatus.CREATED);
    }
}
