import axios from "axios";

const baseUrl = "/api/v1/tasks";
const apiKey = "eHTC1vBQCy2vmpJqDarU3hecbRMt60i21prC65VpeVuMYLDPKQ"; 

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${apiKey}`,
};

const apiRequest = async (method, url, data = null) => {
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

export const CreateTask = async (data) => {
  const url = baseUrl;
  return apiRequest("post", url, [data]);
};

export const DeleteTask = async (uuid) => {
  const url = `${baseUrl}/${uuid}`;
  return apiRequest("delete", url);
};

export const GetAllTasks = async () => {
  const url = baseUrl;
  return apiRequest("get", url);
};

export const UpdateTask = async (uuid, status) => {
  const url = `${baseUrl}/${uuid}`;
  const payload = {
    isCompleted: !status,
  };
  return apiRequest("put", url, payload);
};
