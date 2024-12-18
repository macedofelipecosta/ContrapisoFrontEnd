// utils/api.js
import axios from "axios";

// Crear la instancia de Axios
const api = axios.create({
  baseURL: "http://localhost:8080/", // URL base del backend
});

export default api;
