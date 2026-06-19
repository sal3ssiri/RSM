import { apiGet }
  from "./api";

export async function getDashboard() {

  return await apiGet(
    "getDashboard"
  );

}
