import {
  useEffect,
  useMemo,
  useState
}
from "react";

import "../assets/properties.css";

import PropertyStats
from "../components/properties/PropertyStats.jsx";

import PropertyFilters
from "../components/properties/PropertyFilters.jsx";

import PropertyCards
from "../components/properties/PropertyCards.jsx";

import {
  getProperties,
  getLookupValues
}
from "../services/propertyService";

export default function Properties() {

  const [
    properties,
    setProperties
  ] = useState([]);

  const [
    propertyTypes,
    setPropertyTypes
  ] = useState([]);

  const [
    cities,
    setCities
  ] = useState([]);

  const [
    statuses,
    setStatuses
  ] = useState([]);

  const [
    loading,
    setLoading
  ] = useState(true);

  const [
    search,
    setSearch
  ] = useState("");

  const [
    propertyType,
    setPropertyType
  ] = useState("");

  const [
    city,
    setCity
  ] = useState("");

  const [
    status,
    setStatus
  ] = useState("");

  useEffect(() => {

    loadPage();

  }, []);

  async function loadPage() {

    try {

      const [
        propertiesResult,
        propertyTypesResult,
        citiesResult,
        statusesResult
      ] =
      await Promise.all([

        getProperties(),

        getLookupValues(
          "PropertyType"
        ),

        getLookupValues(
          "Cities"
        ),

        getLookupValues(
          "PropertyStatus"
        )

      ]);

      if (
        propertiesResult.success
      ) {

        setProperties(
          propertiesResult.properties || []
        );

      }

      if (
        propertyTypesResult.success
      ) {

        setPropertyTypes(
          propertyTypesResult.values || []
        );

      }

      if (
        citiesResult.success
      ) {

        setCities(
          citiesResult.values || []
        );

      }

      if (
        statusesResult.success
      ) {

        setStatuses(
          statusesResult.values || []
        );

      }

    }
    catch (error) {

      console.error(
        error
      );

    }
    finally {

      setLoading(
        false
      );

    }

  }

  const filteredProperties =
    useMemo(() => {

      return properties.filter(
        property => {

          const keyword =
            [

              property.PropertyID,

              property.PropertyName,

              property.PropertyType,

              property.City,

              property.District,

              property.OwnerName,

              property.RentalMode,

              property.Status

            ]
            .join(" ")
            .toLowerCase();

          return (

            (
              !search ||

              keyword.includes(
                search.toLowerCase()
              )
            )

            &&

            (
              !propertyType ||

              property.PropertyType ===
              propertyType
            )

            &&

            (
              !city ||

              property.City === city
            )

            &&

            (
              !status ||

              property.Status ===
              status
            )

          );

        }
      );

    }, [

      properties,

      search,

      propertyType,

      city,

      status

    ]);

  if (loading) {

    return (

      <div>

        جاري تحميل العقارات...

      </div>

    );

  }

  return (

    <div>

      <PropertyStats
        properties={
          filteredProperties
        }
      />

      <PropertyFilters

        search={search}
        setSearch={setSearch}

        propertyType={
          propertyType
        }
        setPropertyType={
          setPropertyType
        }

        city={city}
        setCity={setCity}

        status={status}
        setStatus={setStatus}

        propertyTypes={
          propertyTypes
        }

        cities={
          cities
        }

        statuses={
          statuses
        }

      />

      <PropertyCards
        properties={
          filteredProperties
        }
      />

    </div>

  );

}
