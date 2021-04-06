import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  //user is in the data layer in user: result.user
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });

        // console.log(result);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://img.icons8.com/fluent/2x/facebook-new.png" alt="" />
        <img
          src="https://freepikpsd.com/wp-content/uploads/2019/10/facebook-word-png-1-Transparent-Images.png"
          alt=""
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={signIn}
      >
        Sign In
      </Button>
    </div>
  );
}

export default Login;
