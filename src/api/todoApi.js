import { apiRequest } from "./http-wrapper";

const baseUrl = "/api/v1/tasks";

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
