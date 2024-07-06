import axios from "axios";

const eventFetch = axios.create({
  baseURL: "https://eventfinder-g20q.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default eventFetch;