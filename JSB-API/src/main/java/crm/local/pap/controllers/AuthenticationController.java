package crm.local.pap.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crm.local.pap.dtos.JwtAuthResponse;
import crm.local.pap.dtos.LoginDTO;
import crm.local.pap.dtos.MessageResponse;
import crm.local.pap.dtos.SignupDTO;
import crm.local.pap.services.JwtProvider;
import crm.local.pap.services.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService; 
    @Autowired
    private JwtProvider jwtProvider;

    
    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginDTO loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.generateToken(authentication);

        return new ResponseEntity<JwtAuthResponse>(new JwtAuthResponse(token), HttpStatus.OK);
    }


    @PostMapping("/signup")
    public ResponseEntity<MessageResponse> registerUser(@RequestBody SignupDTO signupRequest) {
        try {

            userService.registerUser(signupRequest);
            return new ResponseEntity<MessageResponse>(new MessageResponse("Utilizador criado com sucesso!"), HttpStatus.OK);

        } catch (RuntimeException e) {

            return new ResponseEntity<MessageResponse>(new MessageResponse(e.getMessage()), HttpStatus.BAD_REQUEST);

        }

    }

}