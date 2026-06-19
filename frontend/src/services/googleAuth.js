const GOOGLE_CLIENT_ID =
  "1088052386307-70o0hm64ehh7kmjm4vrbgua5o2i80fgj.apps.googleusercontent.com";

export function initializeGoogleLogin(
  callback
) {

  if (
    !window.google ||
    !window.google.accounts ||
    !window.google.accounts.id
  ) {

    setTimeout(() => {

      initializeGoogleLogin(
        callback
      );

    }, 300);

    return;

  }

  const buttonElement =
    document.getElementById(
      "googleSignIn"
    );

  if (!buttonElement) {
    return;
  }

  window.google.accounts.id.initialize({

    client_id:
      GOOGLE_CLIENT_ID,

    callback: callback

  });

  window.google.accounts.id.renderButton(

    buttonElement,

    {
      theme: "outline",
      size: "large",
      text: "signin_with",
      shape: "rectangular"
    }

  );

}
