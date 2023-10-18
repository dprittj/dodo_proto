package com.dodo.proto_dodo.controllers;

import java.util.HashMap;
import java.util.Scanner;

public class UserPass {
    public static <string> void main(String[] args) {

        HashMap<String, String> userpass = new HashMap<>();
        Scanner input = new Scanner(System.in);
        String pass = "password: ";
        String word;

        System.out.println("Enter a username: ");

        do {
            System.out.println(pass);
            word = input.nextLine();

            if (!word.equals("")) {
                System.out.println("Verified: " + pass + word);
                userpass.put(pass, word);
            }

        } while(word.equals(""));


    }


}
