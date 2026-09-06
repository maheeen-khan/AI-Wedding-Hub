import axios from "axios";

const API_URL = "http://localhost:5000/api/vendors";

// GET venues
export const getVenues = async () => {
  try {
    const response = await axios.get(`${API_URL}/venue`);

    return response.data;
  } catch (error) {
    console.error("Error fetching venues:", error);
    throw error;
  }
};

// GET Catering 
export const getCatering = async () => {
  try {
    const response = await axios.get(`${API_URL}/catering`);

    return response.data;
    
  } catch (error) {
    console.error("Error fetching catering:", error);
    throw error;
  }
};
