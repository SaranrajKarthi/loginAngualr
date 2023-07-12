package com.saran.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saran.model.User;
import com.saran.repo.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")

public class UserController {

	
	private UserRepository userRepository;

	public UserController(UserRepository userRepository) {
//		super();
		this.userRepository = userRepository;
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
	    // Check if the user with the provided username already exists
	    if (userRepository.findByEmail(user.getEmail()) != null) {
	        return ResponseEntity.badRequest().body("{\"error\": \"Email is already taken.\"}");
	    }

	    // Encrypt the user's password (you can use BCryptPasswordEncoder or any other encryption method)
	    // Set the encrypted password to the user object

	    // Save the user to the database
	    userRepository.save(user);

	    // Return a success response as a JSON object
	    return ResponseEntity.ok("{\"message\": \"User registered successfully.\"}");
	}

	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody User user) {
	    // Retrieve the user with the provided email
	    User existingUser = userRepository.findByEmail(user.getEmail());

	    // Check if the user exists and the password matches
	    if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
	        // Return a success message or any other relevant data
	        return ResponseEntity.ok("Loginsuccessful.");
	    } else {
	        // Return an error message or an appropriate HTTP status code
	        return ResponseEntity.badRequest().body("Invalid email or password.");
	    }
	}


    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser() {
        // Perform any necessary logout operations (e.g., invalidate session)

        return ResponseEntity.ok("Logout successful.");
    }
	
}
