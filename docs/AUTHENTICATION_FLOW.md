# 🔐 Authentication Module

The Authentication module manages secure access to the HRMS system.

---

## 📝 User Creation (Sign Up by Super Admin)

In this HRMS system, users are not allowed to self-register.

- The **Super Admin / HR** creates user accounts manually.
- Once a user is created:
  - A **Welcome Email** is automatically sent to the registered email address.
  - The email contains:
    - HRMS Login Link
    - User ID (Email)
    - Default Password
    - Password Reset Link

### 📍 Page Route
/customers/create

### 🔄 Flow
1. Super Admin fills in employee details.
2. The system stores the user data in the database.
3. A default password is assigned.
4. A welcome email is sent to the user.
5. The user can log in using the provided credentials.

---

## 🔑 Login

After receiving credentials, the user can log in to the system.

- The user enters:
  - Email (User ID)
  - Password
- The system validates the credentials.
- If authentication is successful:
  - The user is redirected to the dashboard.
- If authentication fails:
  - An error message is displayed.

### 📍 Page Route
/authentication/login/minimal
