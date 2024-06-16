import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http://demo9128764.mockable.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;