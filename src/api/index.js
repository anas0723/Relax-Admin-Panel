import axios from "axios";

// Login function for portal authentication
export const login = async (email, password) => {
  try {
    // Ensure BASE_URL does not end with /auth/authenticate-portal
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/?auth\/authenticate-portal$/, "");
    const response = await axios.post(
      `${baseUrl}/auth/authenticate-portal`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Login failed");
  }
};