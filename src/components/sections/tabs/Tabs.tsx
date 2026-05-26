import type { TabsProps } from "../../../types/tabs.types";

const Tabs = <T,>({ items, active, onChange, getLabel }: TabsProps<T>) => {
  return (
    <div className="section-tabs">
      {items.map((item, index) => (
        <button
          key={index}
          className={`section-tab ${
            active === index ? "section-tab--active" : ""
          }`}
          onClick={() => onChange(index)}
        >
          {getLabel(item)}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
