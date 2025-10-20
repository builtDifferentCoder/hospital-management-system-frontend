import { axiosInstance } from "../interceptor/axiosInterceptor";

const registerUser = async (user: any) => {
  return axiosInstance
    .post("/user/register", user)
    .then((res: any) => res.data)
    .catch((err: any) => {
      throw err;
    });
};

const loginUser = async (user: any) => {
  return axiosInstance
    .post("/user/login", user)
    .then((res: any) => res.data)
    .catch((err: any) => {
      throw err;
    });
};

export { registerUser, loginUser };
