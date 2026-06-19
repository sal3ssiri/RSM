import "../../assets/property-drawer.css";

export default function PropertyDrawer({
  open,
  onClose,
  propertyTypes = [],
  cities = [],
  statuses = []
}) {

  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className="drawer-overlay"
        onClick={onClose}
      />

      <div className="property-drawer">

        <div className="drawer-header">

          <h2>
            إضافة عقار
          </h2>

          <button
            className="drawer-close"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <div className="drawer-body">

          <div className="form-group">

            <label>
              اسم العقار
            </label>

            <input
              type="text"
              placeholder="أدخل اسم العقار"
            />

          </div>

          <div className="form-group">

            <label>
              نوع العقار
            </label>

            <select>

              <option value="">
                اختر النوع
              </option>

              {propertyTypes.map(item => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}

            </select>

          </div>

          <div className="form-group">

            <label>
              المدينة
            </label>

            <select>

              <option value="">
                اختر المدينة
              </option>

              {cities.map(item => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}

            </select>

          </div>

          <div className="form-group">

            <label>
              الحي
            </label>

            <input
              type="text"
              placeholder="اسم الحي"
            />

          </div>

          <div className="form-group">

            <label>
              المالك
            </label>

            <input
              type="text"
              placeholder="اسم المالك"
            />

          </div>

          <div className="form-group">

            <label>
              حالة العقار
            </label>

            <select>

              <option value="">
                اختر الحالة
              </option>

              {statuses.map(item => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}

            </select>

          </div>

        </div>

        <div className="drawer-footer">

          <button
            className="btn-secondary"
            onClick={onClose}
          >
            إلغاء
          </button>

          <button
            className="btn-primary"
          >
            حفظ
          </button>

        </div>

      </div>

    </>
  );

}
