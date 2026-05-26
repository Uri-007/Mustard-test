import { useScrollSection } from "../../hooks/useScrollSection";
import type { NavbarLinkProps } from "../../types/navbar.types";

export const NavbarLink = ({ label, target, onClick }: NavbarLinkProps) => {
  const { scrollToSection } = useScrollSection();

  return (
    <button
      onClick={() => {
        scrollToSection(target);
        onClick?.();
      }}
      className="
        relative
        text-[16px]
        leading-[24px]
        font-normal
        text-[#7A7A7A]
        transition-all
        duration-300
        hover:text-black
      "
    >
      {label}
    </button>
  );
};
