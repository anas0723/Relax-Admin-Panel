import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.LOGIN_ADMIN_API_BASE_URL,
    headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (email, password) => {
  try {
    const response = await apiClient.get("/users/me", {
      auth: {
        username: email,
        password: password,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Login failed");
  }
}; 