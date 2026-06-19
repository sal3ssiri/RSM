import {
  Building2,
  Home,
  Users,
  FileText
}
from "lucide-react";

import "../assets/dashboard.css";

export default function Dashboard() {

  const stats = [

    {
      title: "العقارات",
      value: 2,
      icon: Building2
    },

    {
      title: "الوحدات",
      value: 2,
      icon: Home
    },

    {
      title: "المستأجرون",
      value: 2,
      icon: Users
    },

    {
      title: "العقود",
      value: 2,
      icon: FileText
    }

  ];

  return (

    <div className="dashboard">

      <div className="stats-grid">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="stat-card"
            >

              <div>

                <h3>
                  {item.title}
                </h3>

                <h2>
                  {item.value}
                </h2>

              </div>

              <div className="stat-icon">

                <Icon size={34} />

              </div>

            </div>

          );

        })}

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h3>
            أحدث العقود
          </h3>

          <p>
            لا توجد بيانات حالياً
          </p>

        </div>

        <div className="dashboard-card">

          <h3>
            الدفعات المستحقة
          </h3>

          <p>
            لا توجد بيانات حالياً
          </p>

        </div>

        <div className="dashboard-card">

          <h3>
            طلبات الصيانة
          </h3>

          <p>
            لا توجد بيانات حالياً
          </p>

        </div>

      </div>

    </div>

  );

}
