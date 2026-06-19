import {
  API_URL
}
from "../config";

export async function getProperties() {

  const response =
    await fetch(
      API_URL +
      "?action=getProperties"
    );

  return await response.json();

}

export async function addProperty(
  property
) {

  const params =
    new URLSearchParams({
      action: "addProperty",
      propertyName: property.propertyName || "",
      propertyType: property.propertyType || "",
      city: property.city || "",
      district: property.district || "",
      address: property.address || "",
      deedNo: property.deedNo || "",
      deedDate: property.deedDate || "",
      ownerName: property.ownerName || "",
      ownerMobile: property.ownerMobile || "",
      status: property.status || "",
      rentalMode: property.rentalMode || "",
      plannedUnitsCount: property.plannedUnitsCount || "",
      floorsCount: property.floorsCount || "",
      notes: property.notes || ""
    });

  const response =
    await fetch(
      API_URL +
      "?" +
      params.toString()
    );

  return await response.json();

}

export async function getLookupValues(
  category
) {

  const response =
    await fetch(
      API_URL +
      "?action=getLookupValues&category=" +
      encodeURIComponent(
        category
      )
    );

  return await response.json();

}
