import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const API_URL = "http://localhost:5000/api/vendors/venue";


export const VenueDetailPage = async (id) => {

   try {
    const response = await axios.get(`${API_URL}/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching venue details:", error);
    throw error;
  }
}

