import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const signupUser = async (userData) => {
  try {
    const response = await API.post("/auth/signup", userData);

    return {
      success: true,
      data: response.data,
      message: response.data.message,
    };

  } catch (error) {
    if (error.response) {
      // Backend responded with an error
      const status = error.response.status;
      const message =
        error.response.data?.message || "Something went wrong.";

      if (status === 400) {
        return {
          success: false,
          message,
        };
      }

      if (status === 409) {
        return {
          success: false,
          message: "This email is already registered.",
        };
      }

      if (status === 401) {
        return {
          success: false,
          message: "You are not authorized.",
        };
      }

      if (status === 500) {
        return {
          success: false,
          message: "Server error. Please try again later.",
        };
      }

      return {
        success: false,
        message,
      };
    }

    if (error.request) {
      // Request was sent but no response received
      return {
        success: false,
        message: "Unable to connect to the server.",
      };
    }

    // Something went wrong while setting up the request
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};

// login 

export const loginUser = async (userData) => {
  try {
    const response = await API.post("/auth/login", userData);

    return {
      success: true,
      data: response.data,
      message: response.data.message,
    };

  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const message =
        error.response.data?.message || "Something went wrong.";

      // 400 - Invalid/missing data
      if (status === 400) {
        return {
          success: false,
          message,
        };
      }

      // 401 - Wrong email/password
      if (status === 401) {
        return {
          success: false,
          message: "Invalid email or password",
        };
      }

      // 404 - User not found
      if (status === 404) {
        return {
          success: false,
          message: "User not found",
        };
      }

      // 500 - Server error
      if (status === 500) {
        return {
          success: false,
          message: "Server error. Please try again later",
        };
      }

      return {
        success: false,
        message,
      };
    }

    // Request sent but server didn't respond
    if (error.request) {
      return {
        success: false,
        message: "Unable to connect to the server",
      };
    }

    // Something went wrong before request was sent
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};