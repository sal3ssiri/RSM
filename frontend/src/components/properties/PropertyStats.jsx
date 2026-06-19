export default function PropertyStats(
  {
    properties
  }
) {

  const total =
    properties.length;

  const active =
    properties.filter(
      p =>
        p.Status === "نشط"
    ).length;

  const unitsMode =
    properties.filter(
      p =>
        p.RentalMode ===
        "تأجير وحدات"
    ).length;

  const totalUnits =
    properties.reduce(
      (
        sum,
        property
      ) =>
        sum +
        Number(
          property.PlannedUnitsCount ||
          0
        ),
      0
    );

  const stats = [

    {
      title:
        "إجمالي العقارات",
      value:
        total
    },

    {
      title:
        "العقارات النشطة",
      value:
        active
    },

    {
      title:
        "تأجير الوحدات",
      value:
        unitsMode
    },

    {
      title:
        "إجمالي الوحدات",
      value:
        totalUnits
    }

  ];

  return (

    <div className="stats-grid">

      {

        stats.map(
          stat => (

            <div
              key={
                stat.title
              }
              className="stat-card"
            >

              <div className="stat-title">

                {
                  stat.title
                }

              </div>

              <div className="stat-value">

                {
                  stat.value
                }

              </div>

            </div>

          )
        )

      }

    </div>

  );

}
