import axios from "axios";

//task create API
export const CreateTask = async (data) => {
  const url = "/api/v1/tasks";
  const apiKey = "eHTC1vBQCy2vmpJqDarU3hecbRMt60i21prC65VpeVuMYLDPKQ"; 

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
  };
  
  try {
    const response = await axios.post(url, [data], { headers });
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

//task delete API
export const DeleteTask = async (uuid) => {
  const url = "/api/v1/tasks";
  const apiKey = "eHTC1vBQCy2vmpJqDarU3hecbRMt60i21prC65VpeVuMYLDPKQ"; 

  let data = JSON.stringify([
    {
      "_uuid": uuid
    }
  ]);
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
  }

  try{
    const response = await axios.delete(url, {headers,data:data });
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

//get all task API
export const GetAllTasks=async() => {
  const url = "/api/v1/tasks";
  const apiKey = "eHTC1vBQCy2vmpJqDarU3hecbRMt60i21prC65VpeVuMYLDPKQ"; 

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
  };
  
  try {
    const response = await axios.get(url, { headers });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

//Updated task API.update isCompleted state
export const UpdateTask= async (uuid,status) => {
  const url = `/api/v1/tasks/${uuid}`;
  const apiKey = "eHTC1vBQCy2vmpJqDarU3hecbRMt60i21prC65VpeVuMYLDPKQ"; 

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
  };

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
