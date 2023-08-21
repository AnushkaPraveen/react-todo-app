import axios from "axios";

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
  }
};

export const DeleteTask=async(uuid)=>{
  const url = "/api/v1/tasks";
  const apiKey = "eHTC1vBQCy2vmpJqDarU3hecbRMt60i21prC65VpeVuMYLDPKQ"; 
const payload=[{
  _uuid:"0e2942a1-93f9-41d2-b6a1-d269b60b6162"
}]
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
  }

  try{
    const response = await axios.delete(url, payload, { headers });
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
