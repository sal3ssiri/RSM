export default function PropertyFilters(
  {
    search,
    setSearch,

    propertyType,
    setPropertyType,

    city,
    setCity,

    status,
    setStatus,

    propertyTypes,
    cities,
    statuses
  }
) {

  return (

    <div className="filters">

      <input
        type="text"
        placeholder="ابحث باسم العقار أو الرقم أو الحي..."
        value={search}
        onChange={
          e =>
            setSearch(
              e.target.value
            )
        }
      />

      <select
        value={propertyType}
        onChange={
          e =>
            setPropertyType(
              e.target.value
            )
        }
      >

        <option value="">
          كل الأنواع
        </option>

        {

          propertyTypes.map(
            item => (

              <option
                key={item}
                value={item}
              >

                {item}

              </option>

            )
          )

        }

      </select>

      <select
        value={city}
        onChange={
          e =>
            setCity(
              e.target.value
            )
        }
      >

        <option value="">
          كل المدن
        </option>

        {

          cities.map(
            item => (

              <option
                key={item}
                value={item}
              >

                {item}

              </option>

            )
          )

        }

      </select>

      <select
        value={status}
        onChange={
          e =>
            setStatus(
              e.target.value
            )
        }
      >

        <option value="">
          كل الحالات
        </option>

        {

          statuses.map(
            item => (

              <option
                key={item}
                value={item}
              >

                {item}

              </option>

            )
          )

        }

      </select>

    </div>

  );

}
