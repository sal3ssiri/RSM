import { useEffect }
  from "react";

import {
  initializeGoogleLogin
}
from "../services/googleAuth";

import {
  login
}
from "../services/auth";

export default function Login() {

  useEffect(() => {

    initializeGoogleLogin(
      handleGoogleLogin
    );

  }, []);

  async function handleGoogleLogin(
    response
  ) {

    const payload =
      JSON.parse(

        atob(
          response.credential
            .split(".")[1]
        )

      );

    const email =
      payload.email;

    const loginResult =
      await login(email);

    console.log(
      loginResult
    );

  }

  return (

    <div>

      <h1>
        نظام إدارة العقارات
      </h1>

      <div
        id="googleSignIn"
      ></div>

    </div>

  );

}
