import { CONFIG }
  from "../config";

export async function apiGet(
  action,
  params = {}
) {

  const query =
    new URLSearchParams({

      action,

      ...params

    });

  const response =
    await fetch(

      `${CONFIG.API_URL}?${query}`

    );

  return await response.json();

}
