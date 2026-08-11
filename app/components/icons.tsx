import {
  ShoppingBag,
  Wrench,
  Car,
  Plane,
  UtensilsCrossed,
  Package,
  Briefcase,
  Wallet,
  Sparkles,
  MessageSquare,
  LayoutDashboard,
  Star,
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  X,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

/**
 * Premium icon set, powered by lucide-react. We wrap each icon so it ships
 * with sensible defaults (decorative by default, consistent stroke weight)
 * while still accepting className / strokeWidth / fill overrides.
 */
function icon(Base: LucideIcon) {
  function Icon({ strokeWidth = 1.6, ...props }: LucideProps) {
    return <Base aria-hidden strokeWidth={strokeWidth} {...props} />;
  }
  Icon.displayName = `Icon(${Base.displayName ?? "lucide"})`;
  return Icon;
}

/* Module icons */
export const ShopIcon = icon(ShoppingBag);
export const ServicesIcon = icon(Wrench);
export const RideIcon = icon(Car);
export const TravelIcon = icon(Plane);
export const FoodIcon = icon(UtensilsCrossed);
export const DeliveryIcon = icon(Package);
export const ProfessionalIcon = icon(Briefcase);
export const WalletIcon = icon(Wallet);
export const AiIcon = icon(Sparkles);
export const ChatIcon = icon(MessageSquare);
export const DashboardIcon = icon(LayoutDashboard);

/* UI icons */
export const StarIcon = icon(Star);
export const ArrowRightIcon = icon(ArrowRight);
export const ArrowUpRightIcon = icon(ArrowUpRight);
export const CheckIcon = icon(Check);
export const MenuIcon = icon(Menu);
export const CloseIcon = icon(X);
