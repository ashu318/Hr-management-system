---

## 🔁 Forgot & Reset Password

This module allows users to securely reset their password if they forget it.

### 📍 Page Route
/reset/forgot-password

---

## 📝 Forgot Password Flow

1. The user enters their registered email address.
2. The backend validates whether the email exists in the database.
3. If the user exists:
   - A password reset email is sent to the registered email ID.
   - The email contains a secure reset link with a token.
4. If the email does not exist:
   - A proper error message is returned.

---

## 🔐 Reset Password Flow

1. The user clicks the reset link received via email.
2. The link redirects the user to the reset password page.
3. The user enters:
   - New Password
   - Confirm Password
4. The system validates:
   - Token authenticity
   - Password match
5. If validation is successful:
   - The new password is securely hashed.
   - The database is updated.
   - The user can log in using the new password.

---

## ✅ Security Recommendations

- Use token-based password reset with expiration time.
- Hash passwords using bcrypt before storing.
- Invalidate token after successful password reset.
- Do not reveal whether the email exists (for better security practice).
