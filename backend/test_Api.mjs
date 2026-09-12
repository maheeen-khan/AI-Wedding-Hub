// test-all-apis.mjs
// Run with: node test-all-apis.mjs

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGlzaGJhQGdtYWlsLmNvbSIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE3ODkyMjQ3MzksImV4cCI6MTc4OTgyOTUzOX0.NLWz6ZEHvPOcJu5l3Utoas3SqMcHC2-NbUZ748eJR_I"; // get from your login endpoint

const headers = {
  Authorization: `Bearer ${TOKEN}`,
};

async function testEndpoint(name, url, options = {}) {
  console.log(`\n--- ${name} ---`);
  console.log("URL:", url);
  try {
    const res = await fetch(url, options);
    const contentType = res.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await res.json()
      : await res.text();
    console.log("Status:", res.status);
    console.log("Body:", body);
  } catch (err) {
    console.log("Request failed:", err.message);
  }
}

async function run() {
  // --- Vendor profile ---
  await testEndpoint(
    "GET /vendors/profile",
    `${BASE_URL}/vendors/profile`,
    { headers }
  );

  // --- Vendor dashboard ---
  await testEndpoint(
    "GET /vendors/dashboard/stats",
    `${BASE_URL}/vendors/dashboard/stats`,
    { headers }
  );

  await testEndpoint(
    "GET /vendors/dashboard/requests",
    `${BASE_URL}/vendors/dashboard/requests`,
    { headers }
  );

  await testEndpoint(
    "GET /vendors/dashboard/confirmed",
    `${BASE_URL}/vendors/dashboard/confirmed`,
    { headers }
  );

  // --- Client bookings ---
  await testEndpoint(
    "GET /bookings/my-bookings",
    `${BASE_URL}/bookings/my-bookings`,
    { headers }
  );

  await testEndpoint(
    "POST /bookings (create booking)",
    `${BASE_URL}/bookings`,
    {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({
        vendor_id: 1,
        couple_name: "Test Couple",
        event_type: "Walima",
        event_date: "2026-12-01",
        guests: 200,
        note: "Test booking from script",
      }),
    }
  );
}

run().catch(console.error);