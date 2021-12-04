import axios from "axios";

export const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
