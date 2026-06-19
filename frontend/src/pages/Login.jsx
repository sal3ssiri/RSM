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

    if (loginResult.success) {

  localStorage.setItem(
    "token",
    loginResult.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(
      loginResult.user
    )
  );

  window.location.reload();

}

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
