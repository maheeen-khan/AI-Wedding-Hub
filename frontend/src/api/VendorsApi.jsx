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

// GET Photography 
export const getPhotography = async () => {
  try {
    const response = await axios.get(`${API_URL}/photography`);

    return response.data;
    
  } catch (error) {
    console.error("Error fetching photography:", error);
    throw error;
  }
};

// GET Decor
export const getDecor = async () => {
  try {
    const response = await axios.get(`${API_URL}/decor`);
    return response.data;
  } catch (error) {
    console.error("Error fetching decor:", error);
    throw error;
  }
};

// GET Makeup
export const getMakeup = async () => {
  try {
    const response = await axios.get(`${API_URL}/makeup`);
    return response.data;
  } catch (error) {
    console.error("Error fetching makeup:", error);
    throw error;
  } 
}

// GET Car Rental
export const getCarRental = async () => {
  try {
    const response = await axios.get(`${API_URL}/car-rental`);
    return response.data;
  } catch (error) {
    console.error("Error fetching car rental:", error);
    throw error;
  }
}