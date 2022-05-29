import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLogin, selectLogin } from "../features/login/loginSlice";

export default function useUserData() {
  const dispatch = useDispatch();
  const { user, token } = useSelector(selectLogin);
  const [userData, setUserData] = useState(user);
  const [tokenData, setTokenData] = useState(token);

  const checkExpiration = () => {
    return user.exp * 1000 < Date.now();
  };

  useEffect(() => {
    setUserData(user);
    setTokenData(token);
  }, [user, token]);

  checkExpiration() && dispatch(removeLogin());

  console.log("checkExpiration", checkExpiration());

  return {
    user: userData,
    token: tokenData,
  };
}
