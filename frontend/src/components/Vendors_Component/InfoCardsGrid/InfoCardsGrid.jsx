import {
  Building2,
  Users,
  ParkingCircle,
  UtensilsCrossed,
  Clock,
  Camera,
  Image as ImageIcon,
  ShieldCheck,
  Palette,
  Car,
  Fuel,
  UserCheck,
  Sparkles,
} from "lucide-react";
import "./InfoCardsGrid.css";

const ICONS = {
  building: Building2,
  users: Users,
  parking: ParkingCircle,
  utensils: UtensilsCrossed,
  clock: Clock,
  camera: Camera,
  image: ImageIcon,
  shield: ShieldCheck,
  palette: Palette,
  car: Car,
  fuel: Fuel,
  driver: UserCheck,
  sparkles: Sparkles,
};

export default function InfoCardsGrid({ cards = [] }) {
  return (
    <div className="vp-info-cards">
      {cards.map((card) => {
        const Icon = ICONS[card.icon] ?? Building2;
        return (
          <div key={card.label} className="vp-info-card">
            <Icon size={20} className="vp-info-card__icon" />
            <div>
              <p className="vp-info-card__label">{card.label}</p>
              <p className="vp-info-card__value">{card.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
