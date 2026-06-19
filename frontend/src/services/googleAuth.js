const GOOGLE_CLIENT_ID =
  "1088052386307-70o0hm64ehh7kmjm4vrbgua5o2i80fgj.apps.googleusercontent.com";

export function initializeGoogleLogin(
  callback
) {

  window.google.accounts.id.initialize({

    client_id:
      GOOGLE_CLIENT_ID,

    callback

  });

  window.google.accounts.id.renderButton(

    document.getElementById(
      "googleSignIn"
    ),

    {

      theme: "outline",

      size: "large"

    }

  );

}
