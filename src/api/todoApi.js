import axios from "axios";

const baseUrl = "/api/v1/tasks";
const apiKey = "eHTC1vBQCy2vmpJqDarU3hecbRMt60i21prC65VpeVuMYLDPKQ"; 

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${apiKey}`,
};

//task create API
export const CreateTask = async (data) => {
  
  try {
    const response = await axios.post(baseUrl, [data], { headers });
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

//task delete API
export const DeleteTask = async (uuid) => {
  const url = `${baseUrl}/${uuid}`;
  
  try{
    const response = await axios.delete(url, {headers });
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

//get all task API
export const GetAllTasks=async() => {
  
  try {
    const response = await axios.get(baseUrl, { headers });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

//Updated task API.update isCompleted state
export const UpdateTask= async (uuid,status) => {
  const url = `${baseUrl}/${uuid}`;

  const payload={
    isCompleted:!status
  }
  
  try {
    const response = await axios.put(url, payload,{ headers });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}
