// test-vendor-api.mjs
// Run with: node test-vendor-api.mjs

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGlzaGJhQGdtYWlsLmNvbSIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE3ODkyMTUxNTYsImV4cCI6MTc4OTgxOTk1Nn0.FDmjsY8eMSY4fPL0PXn7fSIgBF60XPmdqJQb8XKogss";

async function testGetProfile() {
  console.log("\n--- Testing GET /vendors/profile ---");
  const res = await fetch(`${BASE_URL}/vendors/profile`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  console.log("Status:", res.status);
  console.log(await res.json());
}

async function testRegisterBusiness() {
  console.log("\n--- Testing POST /vendors/register-business ---");

  const fd = new FormData();
  fd.append("name", "Royal Catering Karachi");
  fd.append("category", "catering");
  fd.append("location", "DHA Phase 5");
  fd.append("city", "Karachi");
  fd.append("about", "Premium catering for weddings");
  fd.append("price_min", "1500");
  fd.append("price_max", "5000");
  fd.append("price_label", "Per Person / Head");
  fd.append("min_pax", "100");
  fd.append("service_type", "Buffet");
  fd.append("buffet_live", "Live BBQ Counter");
  fd.append("staffing_notice", "48 hours");
  fd.append("amenities", JSON.stringify(["Professional Host / Event Coordinator"]));
  fd.append("menu_packages", JSON.stringify([{ name: "Gold Package", profile: "5 dishes", price: "PKR 3500", is_highlighted: true }]));
  fd.append("event_addons", JSON.stringify([{ addon_name: "Live BBQ", price: "PKR 15000" }]));

  const res = await fetch(`${BASE_URL}/vendors/register-business`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: fd,
  });

  console.log("Status:", res.status);
  console.log(await res.json());
}

async function run() {
  await testRegisterBusiness();
  await testGetProfile();
}

run().catch(console.error);