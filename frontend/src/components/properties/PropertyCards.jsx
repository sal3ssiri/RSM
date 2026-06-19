```jsx
import {
  MapPin,
  User,
  Building2,
  FileText,
  Pencil
}
from "lucide-react";

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

                  <MapPin size={15} />

                  <span>

                    {property.City}

                    {property.District
                      ? ` • ${property.District}`
                      : ""}

                  </span>

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
                        property.PlannedUnitsCount || 0
                      }

                    </div>

                  </div>

                  <div className="metric">

                    <div className="metric-title">

                      عدد الأدوار

                    </div>

                    <div className="metric-value">

                      {
                        property.FloorsCount || 0
                      }

                    </div>

                  </div>

                </div>

                <div className="owner">

                  <User size={15} />

                  <span>

                    {
                      property.OwnerName ||
                      "غير محدد"
                    }

                  </span>

                </div>

                <div className="card-actions">

                  <button
                    className="action action-units"
                  >

                    <Building2 size={16} />

                    الوحدات

                  </button>

                  <button
                    className="action action-contracts"
                  >

                    <FileText size={16} />

                    العقود

                  </button>

                  <button
                    className="action action-edit"
                  >

                    <Pencil size={16} />

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
```
