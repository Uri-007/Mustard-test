import type { PropsLegend } from "../../../types/department.types";

const DepartmentLegend = ({ items }: PropsLegend) => {
  return (
    <ul className="department-legend">
      {items.map((item) => (
        <li key={item.key}>
          <strong>{item.key}</strong>

          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default DepartmentLegend;
