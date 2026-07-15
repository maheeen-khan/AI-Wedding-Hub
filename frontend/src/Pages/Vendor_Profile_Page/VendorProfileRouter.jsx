import { useParams, Navigate } from "react-router-dom";
import VenuePage from "./VenuePage";
import CateringPage from "./CateringPage";
import PhotographyPage from "./PhotographyPage";
import MakeupPage from "./MakeupPage";
import DecorPage from "./DecorPage";
import CarRentalPage from "./CarRentalPage";

const PAGE_BY_TYPE = {
  venue: VenuePage,
  catering: CateringPage,
  photography: PhotographyPage,
  makeup: MakeupPage,
  decor: DecorPage,
  "car-rental": CarRentalPage,
};

/**
 * Single entry point for dynamic routing: /vendor/:type/:id
 *
 * In App.jsx (or your router file) add:
 *   import VendorProfileRouter from "./Pages/VendorProfile/pages/VendorProfileRouter";
 *   <Route path="/vendor/:type/:id" element={<VendorProfileRouter />} />
 *
 * This dispatches to the right page component (Venue/Catering/Photography/
 * Makeup/Decor/CarRental) based on the :type param. Each page component can
 * also be routed to directly if you prefer separate routes per type instead
 * — see the alternative routes commented in README.md.
 */
export default function VendorProfileRouter() {
  const { type , id } = useParams();
  const PageComponent = PAGE_BY_TYPE[type];

  if (!PageComponent) return <Navigate to="/VenuePage" replace />;

  return <PageComponent  id={id} />;
}
