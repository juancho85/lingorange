package com.example;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
public class ApiController {
    @RequestMapping("/api/sign-in")
    public Map<String, Object> home() {
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("username", "juancho");
        model.put("authenticated", "true");
        return model;
    }

    @RequestMapping(value="/api/authenticate", method = RequestMethod.POST)
    public Map<String, Object> authenticate(@RequestBody String input) {
        System.out.println("Calling authenticate...");
        System.out.println(input);
        Map<String, Object> model = new HashMap<String, Object>();
//        model.put("username", input.getUsername());
        /*if(input.getUsername().equals("juancho")){
            model.put("authenticated", "true");
        }else{
            model.put("authenticated", "false");
        }*/
        model.put("username", "pepito");
        model.put("authenticated", "true");
        return model;
    }

    @RequestMapping("/api/user")
    public Principal user(Principal user) {
        return user;
    }
}
