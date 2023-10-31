import React from "react";
import axios from "axios";
import catchErrors from "../../utils/catchErrors";
import baseUrl from "../../utils/baseUrl";
import { handleLogin } from "../../utils/auth";
import firebaseInstance from "@/lib/firebase";
// import { FirebaseError } from "firebase/app";
import { firebaseAuthErrorToUserMessage } from "@/utils/firebaseAuthErrorToUserMessage";
import { useRouter } from "next/navigation";

const INITIAL_USER = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const router = useRouter();
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user)
    try {
      setLoading(true);
      setError("");
      const userRef = await firebaseInstance
        .createAccount(user.email, user.password)
        .catch((e) => {
          throw e;
        });
      console.log(userRef);
      await firebaseInstance.addUser(userRef.user.uid, {
        name: user.name,
        email: userRef.user.email,
        street: "",
        city: "",
        building: "",
        floor: "",
        zipcode: "",
        mobile: { data: {} },
        role: "USER",
        dateJoined: new Date().getTime(),
      });
      router.back();
      //   const url = `${baseUrl}/api/users/signup`;
      //   const payload = { ...user };
      //   console.log(payload, url);
      //   const response = await axios.post(url, payload);
      //   handleLogin(response.data);
    } catch (error) {
      console.log(error);
      setError(firebaseAuthErrorToUserMessage(error.code, "sign-in"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            placeholder="Valid Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            placeholder="Password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <p className="description">
          The password should be at least eight characters long. To make it
          stronger, use upper and lower case letters, numbers, and symbols like
          ! " ? $ % ^ & )
        </p>

        <button type="submit" disabled={disabled}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
