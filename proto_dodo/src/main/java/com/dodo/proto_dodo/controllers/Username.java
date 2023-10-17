package com.dodo.proto_dodo.controllers;

import java.util.HashMap;
import java.util.Scanner;

public class Username {

//    String username;
//    String password;
//    String email;
//    Integer phone;
//    Integer dob;
//
//    // should location be a float?
//    Integer homeLocation;

    public static void main(String[] args) {

        HashMap<String, String> username = new HashMap<>();
        Scanner input = new Scanner(System.in);
        String user = "username: ";
        String name;

        System.out.println("Enter a username: ");

        do {
            System.out.println(user);
            name = input.nextLine();

            if (!name.equals("")) {
                System.out.println("Verified: " + user + name);
                username.put(user, name);
            }

        } while(name.equals(""));

    }

}
