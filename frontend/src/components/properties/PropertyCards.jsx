export default function PropertyCards(
  {
    properties
  }
) {

  if (
    !properties ||
    properties.length === 0
  ) {

    return (

      <div className="empty-state">

        لا توجد عقارات مطابقة

      </div>

    );

  }

  return (

    <div className="cards">

      {

        properties.map(
          property => {

            const isActive =
              property.Status ===
              "نشط";

            const isUnits =
              property.RentalMode ===
              "تأجير وحدات";

            return (

              <div
                key={
                  property.PropertyID
                }
                className="property-card"
              >

                <div className="card-head">

                  <div>

                    <div className="property-name">

                      {
                        property.PropertyName
                      }

                    </div>

                    <div className="property-id">

                      {
                        property.PropertyID
                      }

                    </div>

                  </div>

                  <span
                    className={
                      isActive
                        ? "status-badge status-active"
                        : "status-badge status-inactive"
                    }
                  >

                    {
                      property.Status
                    }

                  </span>

                </div>

                <div className="location">

                  📍

                  {" "}

                  {
                    property.City
                  }

                  {

                    property.District &&
                    ` • ${property.District}`

                  }

                </div>

                <div className="badges">

                  <span
                    className="badge badge-type"
                  >

                    {
                      property.PropertyType
                    }

                  </span>

                  <span
                    className={
                      isUnits
                        ? "badge badge-rental units"
                        : "badge badge-rental"
                    }
                  >

                    {
                      property.RentalMode
                    }

                  </span>

                </div>

                <div className="metrics">

                  <div className="metric">

                    <div className="metric-title">

                      عدد الوحدات

                    </div>

                    <div className="metric-value">

                      {
                        property.PlannedUnitsCount ||
                        0
                      }

                    </div>

                  </div>

                  <div className="metric">

                    <div className="metric-title">

                      عدد الأدوار

                    </div>

                    <div className="metric-value">

                      {
                        property.FloorsCount ||
                        0
                      }

                    </div>

                  </div>

                </div>

                <div className="owner">

                  👤 المالك:

                  {" "}

                  {
                    property.OwnerName ||
                    "غير محدد"
                  }

                </div>

                <div className="card-actions">

                  <button
                    className="action action-units"
                  >

                    الوحدات

                  </button>

                  <button
                    className="action action-contracts"
                  >

                    العقود

                  </button>

                  <button
                    className="action action-edit"
                  >

                    تعديل

                  </button>

                </div>

              </div>

            );

          }
        )

      }

    </div>

  );

}
