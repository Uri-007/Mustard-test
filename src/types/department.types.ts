export interface DepartmentLabel {
  key: string;
  label: string;
}

export interface DepartmentPlan {
  src: string;
  alt: string;
}

export interface Department {
  id: number;
  tab: string;
  prototype: string;
  levels: string;
  area: string;
  dimensions: string;
  labels: DepartmentLabel[];
  smallPlan: DepartmentPlan;
  largePlan: DepartmentPlan;
}

export interface PropsTabs {
  items: Department[];
  activeId: number;
  onChange: (id: number) => void;
}

export interface PropsLegend {
  items: DepartmentLabel[];
}

export interface PropsInfo {
  department: Department;
}

export interface PropsPlans {
  department: Department;
}