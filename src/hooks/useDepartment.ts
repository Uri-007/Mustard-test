import { useState } from "react";
import { DEPARTMENTS } from "../constants/departments";

export const useDepartment = () => {
  const [activeId, setActiveId] = useState(DEPARTMENTS[0].id);

  const activeDepartment = DEPARTMENTS.find((d) => d.id === activeId)!;

  return {
    departments: DEPARTMENTS,
    activeDepartment,
    activeId,
    setActiveId,
  };
};
