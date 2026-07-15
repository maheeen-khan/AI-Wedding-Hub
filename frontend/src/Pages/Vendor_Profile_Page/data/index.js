import { venueData } from "./venueData";
import { cateringData } from "./cateringData";
import { photographyData } from "./photographyData";
import { makeupData } from "./makeupData";
import { decorData } from "./decorData";
import { carRentalData } from "./carRentalData";

/**
 * Maps route param `:type` -> { [id]: vendorDataObject }
 * Swap this whole file for real API calls later — every page component
 * just needs an object matching the same shape per vendor.
 */
export const vendorsByType = {
  venue: { [venueData.id]: venueData },
  catering: { [cateringData.id]: cateringData },
  photography: { [photographyData.id]: photographyData },
  makeup: { [makeupData.id]: makeupData },
  decor: { [decorData.id]: decorData },
  "car-rental": { [carRentalData.id]: carRentalData },
};

export function getVendorById(type, id) {
  return vendorsByType[type]?.[id] ?? null;
}
