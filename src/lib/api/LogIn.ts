import base from "./Api";

type LoginDataType = {
  username: string;
  email: string;
  image: string;
};

const login = (data: LoginDataType) =>
  base()
    .post(`/login`, data)
    .then((res) => res.data);

const LogInService = {
  login,
};

export default LogInService;
