export interface AmenityImage {
  src: string;
  alt: string;
}

export interface Amenity {
  icon: string;
  label: string;
  subLabel?: string;
  imageIndex: number;
}
