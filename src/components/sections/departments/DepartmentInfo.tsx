import type { PropsInfo } from "../../../types/department.types";
import DepartmentLegend from "./DepartmentLegend";

const DepartmentInfo = ({ department }: PropsInfo) => {
  return (
    <div className="department-info">
      <div className="department-info-line" />

      <p className="department-prototype">{department.prototype}</p>

      <p className="department-levels">{department.levels}</p>

      <h3 className="department-area">{department.area}</h3>

      <p className="department-dimensions">{department.dimensions}</p>

      <DepartmentLegend items={department.labels} />
    </div>
  );
};

export default DepartmentInfo;
