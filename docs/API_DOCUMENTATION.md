## 🔐 Login API

**Endpoint:**  
POST /api/auth/login

**Description:**  
Authenticates a user using email and password.

---

### Request Body
- email (string)
- password (string)

---

### Success Response (200)
- success: true
- message: "Login successful"
- user:
  - id
  - email
  - role

---

### Error Responses
- 400 – Email and password are required
- 401 – Invalid email or password
- 403 – User account is inactive
- 500 – Internal server error

---

### Notes
- JWT token is generated.
- Token is stored in a secure HTTP-only cookie (`auth_token`).
- Token expires in 1 day.





## 🔁 Reset Password API

**Endpoint:**  
POST /api/auth/reset-password

**Description:**  
Resets the user password using a valid reset token.

---

### Request Body
- token (string)
- password (string)
- confirmpassword (string)

---

### Success Response (200)
- success: true
- message: "Password reset successfully"

---

### Error Responses
- 400 – Missing required fields
- 400 – Passwords do not match
- 400 – Password must be at least 8 characters
- 400 – Reset link is invalid or expired
- 500 – Something went wrong

---

### Notes
- Reset token is validated and checked for expiry.
- Password is hashed before storing.
- Reset token and expiry are cleared after successful reset.



## 🔐 Reset Password

**Endpoint**  
POST /api/auth/reset-password

---

### Purpose
Allows a user to reset their password using a valid reset token.

---

### Request Body
- token  
- password  
- confirmpassword  

---

### Validations
- All fields are required
- Password and confirm password must match
- Password must be at least 8 characters
- Reset token must be valid and not expired

---

### Success Response
- success: true  
- message: "Password reset successfully"

---

### Failure Cases
- Missing required fields
- Passwords do not match
- Password too short
- Reset link invalid or expired
- Internal server error

---

### Notes
- Password is securely hashed before saving
- Reset token is cleared after successful reset



## 🚪 Logout

**Endpoint**  
POST /api/auth/logout

---

### Purpose
Logs out the authenticated user by clearing the authentication cookie.

---

### Success Response
- success: true  
- message: "Logged out successfully"

---

### Notes
- The `auth_token` cookie is cleared.
- The cookie is immediately expired.
- User session becomes invalid after logout.




## Create User Module Api

**Endpoint**  
POST /api/users/all-users-details

---
### Purpose
Creates a new employee user with the provided details.

---

### Success Response
- success: true  
- message: "User Created Sucessufully"

---

### Flow
- Receive the employee data along with the profile image `profileImageUrl` from the frontend.
- Extract the form data in the backend.
- Upload the profile image `profileImageUrl` to Cloudinary with the proper folder structure.
- Store the user details in the database along with:
    `profileImageUrl`
    `profileImagePublicId`

-Once the user is created successfully, a welcome email is sent to the registered email address with all the account details, including the password reset link.