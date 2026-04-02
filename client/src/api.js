import axios from "axios";
import { LANGUAGE_IDS } from "./constants";

const API = axios.create({
  baseURL: "https://ce.judge0.com",
});

export const executeCode = async (sourceCode, languageId) => {
  const res = await API.post("/submissions?wait=true", {
    source_code: sourceCode,
    language_id: languageId
  });

  return res.data;
};