import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "da2901e2d40b4e788ef21b537a089f13",
  },
});
