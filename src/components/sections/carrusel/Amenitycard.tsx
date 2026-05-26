// components/AmenityCard.tsx
import { Icon } from "@iconify/react";
import type { Amenity } from "../../../types/animateImage.types";

interface Props {
  amenity: Amenity;
  onSelect: () => void;
  isActive: boolean;
}

const AmenityCard = ({ amenity, onSelect, isActive }: Props) => (
  <div
    className={`amenity-card amenity-card--clickable${isActive ? " amenity-card--active" : ""}`}
    onClick={onSelect}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onSelect()}
  >
    <span className="amenity-icon-wrap">
      <Icon icon={amenity.icon} className="amenity-icon" />
    </span>
    <p className="amenity-label">
      {amenity.label}
      {amenity.subLabel && (
        <>
          <br />
          <span className="amenity-sublabel">{amenity.subLabel}</span>
        </>
      )}
    </p>
  </div>
);

export default AmenityCard;
