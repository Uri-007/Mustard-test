import { useDepartment } from "../../hooks/useDepartment";
import DepartmentInfo from "./departments/DepartmentInfo";
import DepartmentPlans from "./departments/DepartmentPlans";
import "../../styles/departments.css";
import Tabs from "./tabs/Tabs";

const Department = () => {
  const { departments, activeDepartment, activeId, setActiveId } =
    useDepartment();

  return (
    <section className="departments-section" id="departamentos">
      <h2 className="departments-title">Departamentos</h2>

      <Tabs
        items={departments}
        active={departments.findIndex((d) => d.id === activeId)}
        onChange={(index) => setActiveId(departments[index].id)}
        getLabel={(item) => item.tab}
      />

      <div className="departments-content">
        <DepartmentInfo department={activeDepartment} />

        <DepartmentPlans department={activeDepartment} />
      </div>
    </section>
  );
};

export default Department;
