import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import loginWithGoogle from "../../utils/loginWithGoogle";
import loginAPI from "./loginAPI";
import { selectLogin, setLogin, setUser } from "./loginSlice";

export default function Login() {
  const dispatch = useDispatch();
  const { token } = useSelector(selectLogin);

  useEffect(() => {
    console.log("googleToken-----", token);

  }, [token]);

  const onLogin = async () => {
    const googleToken = await loginWithGoogle();
    const user = await loginAPI(googleToken);


    dispatch(setLogin({ token: googleToken }));
    dispatch(setUser({ user }));
  };

  return (
    <div className="menu_btn_box header_btn jb_cover">
      <ul>
        <li></li>
        <li>
          <a onClick={onLogin} href="#0" style={{ width: 220 }}>
            <GoogleIcon />
            <i /> sign in / sign up
          </a>
        </li>
      </ul>
    </div>
  );
}
