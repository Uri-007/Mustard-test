export interface TabsProps<T> {
  items: T[];
  active: number;
  onChange: (value: number) => void;
  getLabel: (item: T) => string;
}
