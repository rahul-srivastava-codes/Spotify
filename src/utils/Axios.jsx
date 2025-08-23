import axios from "axios";
const Instance = axios.create({
  baseURL: "https://saavn.dev/api",
});

export default Instance;
