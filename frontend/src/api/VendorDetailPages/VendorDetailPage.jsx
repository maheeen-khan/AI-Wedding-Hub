import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const API_URL = "http://localhost:5000/api/vendors";


export const VenueDetailPage = async (id) => {

   try {
    const response = await axios.get(`${API_URL}/venue/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching venue details:", error);
    throw error;
  }
}

export const CateringDetailPage = async (id) => {

   try {
    const response = await axios.get(`${API_URL}/catering/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching catering details:", error);
    throw error;
  }
}

export const PhotographyDetailPage = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/photography/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching photography details:", error);
        throw error;
    }

  }

export const DecorDetailPage = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/decor/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching decor details:", error);
        throw error;
    }
}
