import axios from "axios";

const apiKey = "eHTC1vBQCy2vmpJqDarU3hecbRMt60i21prC65VpeVuMYLDPKQ"; 

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${apiKey}`,
};

export const apiRequest = async (method, url, data = null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};