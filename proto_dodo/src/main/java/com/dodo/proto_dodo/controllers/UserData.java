package com.dodo.proto_dodo.controllers;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class UserData {

    static Scanner input = new Scanner(System.in);

    //  username data
    static HashMap<String, String> username = new HashMap<>();
    static String user = "username";
    static String name;

    public static void callUser() {

        System.out.println("Enter a username: ");
        do {
//            System.out.println(user);
            name = input.nextLine();

            if (!name.equals("")) {
                username.put(user, name);
            }
        } while(name.equals(""));

        System.out.println("Verified: " + user + " : " + name + username);
    }

    //   password data
    static HashMap<String, String> userpass = new HashMap<>();
    static String pass = "password";
    static String word;

    public static void callPass() {
        System.out.println("Enter a password: ");
        do {
//            System.out.println(pass);
            word = input.nextLine();

            if (!word.equals("")) {
                userpass.put(pass, word);
            }
        } while(word.equals(""));
        System.out.println("Verified: " + pass + " : " + word + userpass);
    }

    //    email data
    static HashMap<String, String> usermail = new HashMap<>();
    static String email = "email";
    static String emailAddress;

    public static void callEmail() {

        System.out.println("Enter email address: ");
        do {
//            System.out.println(email);
            emailAddress = input.nextLine();

            if (!emailAddress.equals("")) {
                usermail.put(email, emailAddress);
            }
        } while(emailAddress.equals(""));

        System.out.println("Verified: " + email + " : " + emailAddress + usermail);
    }

    //    phone data
    static HashMap<String, String> userphone = new HashMap<>();
    static String phone = "phone";
    static String phoneNum;

    public static void callPhone() {

        System.out.println("Enter phone number: ");
        do {
//            System.out.println(phone);
            phoneNum = input.nextLine();

            if (!emailAddress.equals("")) {
                userphone.put(phone, phoneNum);
            }
        } while(emailAddress.equals(""));

        System.out.println("Verified: " + phone + " : " + phoneNum + userphone);
    }

    //    dob data
    static HashMap<String, String> userDOB = new HashMap<>();
    static String birth = "DOB";
    static String dob;

    public static void callDOB() {

        System.out.println("Enter date of birth (example, MM-DD-YYYY): ");
        do {
//            System.out.println(birth);
            dob = input.nextLine();

            if (!emailAddress.equals("")) {
                userphone.put(birth, dob);
            }
        } while(emailAddress.equals(""));

        System.out.println("Verified: " + birth + " : " + dob + userDOB);
    }

    //    location data
    HashMap<String, Float> userCoords = new HashMap<>();
    String coords = "Coordinates: ";
    Float location;



    public static void main(String[] args) {
        callUser();
        callPass();
        callEmail();
        callPhone();
        callDOB();

    }

}
