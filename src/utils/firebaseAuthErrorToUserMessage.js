export function firebaseAuthErrorToUserMessage(firebaseError, operation) {
  const errorMap = {
    // Sign-Up Errors
    "auth/email-already-in-use":
      "Email is already in use. Please choose another one.",
    "auth/invalid-email": "Invalid email address. Please enter a valid email.",
    "auth/weak-password": "Weak password. Please use a stronger password.",

    // Sign-In Errors
    "auth/user-not-found":
      "User not found. Please check your email or sign up.",
    "auth/wrong-password": "Wrong password. Please try again.",
    "auth/user-disabled": "User account is disabled. Please contact support.",
    "auth/invalid-credential":
      "Invalid credential. Please check your email and password.",
    "auth/too-many-requests":
      "Too many login attempts. Please try again later.",

    // Common Errors
    "auth/operation-not-allowed":
      "This operation is not allowed. Please contact support.",
    "Firebase: Error (auth/invalid-login-credentials).":
      "The email or Password is wrong",
  };

  if (firebaseError && firebaseError.code) {
    const userMessage = errorMap[firebaseError.code];
    if (userMessage) {
      return userMessage;
    }
  }

  if (operation === "sign-up") {
    return "An error occurred during sign-up. Please try again later.";
  } else if (operation === "sign-in") {
    return "An error occurred during sign-in. Please try again later.";
  }

  return "An error occurred. Please try again later.";
}
