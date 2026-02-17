Porjecst overview HRMS SYSTEM

Auth Module
Login vua url - http://localhost:3000/authentication/login/minimal
and main dahsbioar - /
add users by the hr - http://localhost:3000/proposal/edit

USERS MODULE
AN PAGE WEHIHC SHOUW ALL THE USERS EMPLYEE REPLATED TO THE SAME ORHGAINATAION
API - /API/USERS
PAGE -

# HRMS System – Project Overview

A Human Resource Management System (HRMS) designed to manage employee authentication, organization-based users, and HR operations from a centralized dashboard.

---

## 🔐 Authentication Module

Handles user login and access control.

- **Login Page**  
  the mail is - http://localhost:3000/authentication/login/minimal

---

## 👥 Users Module

Manages employees within an organization.

1. Having one Form where the hr /admin will add the poper for thier org
   2.A page having whree we get the data /api/users and displays in the webite.

### 📌 Features

- View all employees related to the **same organization**
- Organization-based access control
- Data fetched securely via API

http://localhost:3000/customers/list

### 🔗 API Endpoint

/api/users

### 📌Holidays module

Holidays for the emoployee
this is in the under the proposal/properosal create /
have one form wheree the hr will add the data to the system.
http://localhost:3000/proposal/create
read
calaneder module

### 📌Calander Module sync with the holidayss in the company which is provided by the hr and admin

This is a calender View module
1.Calander si sync with the Previous
2.Adding the Leaves Values with the Hr
3.Showing All the Leaves for Users

### Leave modle

in simple we have and hrms website where i have to store all the empleyee data sets and leave managemenets stays,ets basiclaay
i have to utiliza and wokring on the one features flow points like i as a users after login will able to view my account means able to get the leaves i have able to know our status means levae history and onlce after appley the leavs the db is updatued and emails send to the hr admin
also its showinin the dahsvaords for both users and Admin
after chong the hr will reviewa nd send the apppoveal and resject withe desc.

once done all the data will be save in teh db i need tgis typesof flow what to do giveme the ideas first to evbalatuate and then we willabwl to add these coplete flow.

the hr will check the leaves and approve or rejecet accordingly
/leaves/all-leaves


13/02/26:---
1.Wokring on the Chat btn the hr and emplye in that email (Commneting system)




### Reset and Forgot password module

Here in the reset and pass word pages are public and when the users full the email backedn checks the data and validate and send the email to the registerated email id and the users will open the email and reset thepass
email serviec si - - resend here

\\\\NEED TO WOKRIN ON THIS \\\\

### Department wise perope see

Thei is one page showing the cards for details perope
and on click in the data its getting in to the data finding the peorple assocuoated iwthe that

### Annaouncemt Module

Hr will able to send the bulk email to all the peorson who are active in the system
and aftre sending the email from the system all the peron will get the data in the mail and email will receved by indivisual.

From the emplyee view all the empley will get the notifictaion both in the emil and dahbsoard point wise which was sending by the hr/admin.

2.In the email notifiaxcation  (fetch the name and email of the admin and showin the ui)
3.Chaeck the leve statsyu and approved and reject and calece the leave(dashborad)


### Announcmddnet module

POST ANNAOUNMET:
In the post form the form submit with all the data to the api  "/api/announcements"
in the backedn extracting all the data and validate the type .
extract the users based on the type and creaet the list and send the email accointluy


GET ANNOUCEMENT HR:
In the create Announcemt page , side bas showin the getanoouncemts for the admin/hr only which dioplay the latest 4 or 5 records foir announcemets (having both sending type {Indivisual or All})
API = "/api/announcements"


GET ANNOUNCEMT FOR INDIVISUAL USER :
In the announcemt list page hit one api "/api/users/all-announcements" which is get th

