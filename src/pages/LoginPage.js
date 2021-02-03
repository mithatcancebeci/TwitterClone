import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ButtonWithProg from "../components/ButtonWithProg";
import InputComp from "../components/InputComp";

import { loginHandler } from "../redux/authAction";
import { useApiProgress } from "../Shared/ApiProgress";
const LoginPage = (props) => {
  const [username, setUsername] = useState();
  const [password, SetPassword] = useState();
  const [error, SetError] = useState(undefined);
  const pendingApiCall = useApiProgress("post", "/api/1.0/auth", true);
  const dispatch = useDispatch();

  useEffect(() => {
    SetError(undefined);
  }, [username, password]);

  const onClickLogin = async (event) => {
    event.preventDefault();

    const creds = {
      username,
      password,
    };
    const { history } = props;
    const { push } = history;
    SetError(undefined);
    try {
      await dispatch(loginHandler(creds));
      push("/");
    } catch (apiError) {
      SetError(apiError.response.data.message);
    }
  };

  const btnEnabled = username && password;
  return (
    <div>
      <div className="container">
        <form>
          <h3 className="text-center">
            <strong>Login</strong>
          </h3>
          <InputComp
            label="Username"
            name="username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></InputComp>
          <InputComp
            label="Password"
            name="password"
            type="password"
            onChange={(event) => {
              SetPassword(event.target.value);
            }}
          ></InputComp>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="text-center">
            <ButtonWithProg
              onClick={onClickLogin}
              disabled={!btnEnabled || pendingApiCall}
              pendingApiCall={pendingApiCall}
              text="Login"
            ></ButtonWithProg>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
