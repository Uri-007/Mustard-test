import type { PropsPlans } from "../../../types/department.types";

const DepartmentPlans = ({ department }: PropsPlans) => {
  return (
    <div className="department-plans">
      <div className="department-plan-small">
        <img src={department.smallPlan.src} alt={department.smallPlan.alt} />
      </div>

      <div className="department-plan-large">
        <img src={department.largePlan.src} alt={department.largePlan.alt} />
      </div>
    </div>
  );
};

export default DepartmentPlans;
