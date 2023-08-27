import { ReactComponent as Cart } from "../assets/svg/cart.svg";
import { ReactComponent as EtonDigital } from "../assets/svg/eton-digital.svg";
import { IconType } from "../types";

export const iconMap: Record<
  IconType,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  Cart,
  EtonDigital,
};
