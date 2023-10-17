package com.dodo.proto_dodo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloLogin {

    @GetMapping("dodo")
    @ResponseBody
    public String login() {
        return "Welcome to Dodo! \n Please Login or Register to begin your adventure!";
    }



}
