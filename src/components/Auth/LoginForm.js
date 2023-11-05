import React from "react";
import Link from "next/link";
import axios from "axios";
import catchErrors from "../../utils/catchErrors";
import baseUrl from "../../utils/baseUrl";
import { handleLogin } from "../../utils/auth";
import firebaseInstance from "@/lib/firebase";
// import { FirebaseError } from "firebase/app";
import { firebaseAuthErrorToUserMessage } from "@/utils/firebaseAuthErrorToUserMessage";
import { useRouter } from "next/navigation";

const INITIAL_USER = {
  email: "",
  password: "",
};

const LoginForm = ({ handleOpenModal }) => {
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
    try {
      setLoading(true);
      setError("");
      console.log(user);
      await firebaseInstance.signIn(user.email, user.password).catch((e) => {
        throw e;
      });
      router.back();
      //   const url = `${baseUrl}/api/users/login`;
      // const payload = { ...user };
      // console.log(payload,url)
      // const response = await axios.post(url, payload);
      //   handleLogin(response.data);
    } catch (error) {
      //   catchErrors(error, setError);
      setError(firebaseAuthErrorToUserMessage(error.code, "sign-up"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            placeholder="Email"
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

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-6 remember-me-wrap">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-6 lost-your-password-wrap">
            <Link
              onClick={handleOpenModal}
              href=""
              className="lost-your-password"
            >
              Lost your password?
            </Link>
          </div>
        </div>

        <button type="submit" disabled={loading}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
