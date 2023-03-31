import React, { useContext, useMemo, useReducer, useEffect } from "react";
import { socket } from "src/utils/socket";
import { api } from "../utils/api";
const AuthStateContext = React.createContext(undefined);
const AuthDispatchContext = React.createContext(undefined);
function useAuthState() {
  const auth = useContext(AuthStateContext);

  if (auth === undefined) {
    throw new Error("useAuthState can only be used inside AuthProvider");
  }

  return auth;
}

function useAuthDispatch() {
  const auth = useContext(AuthDispatchContext);

  if (auth === undefined) {
    throw new Error("useAuthDispatch can only be used inside AuthProvider");
  }

  return auth;
}

function authReducer(state, action) {
  switch (action.type) {
    case "LOADING": {
      return { ...state, isLoading: action.payload };
    }

    case "LOGIN": {
      const { user = {}, accessToken = "" } = action.payload || {};
      localStorage.setItem("auth", JSON.stringify(action.payload));
      console.log("action.payload....", action.payload);
      return {
        ...state,
        user: user,
        accessToken,
        isLoggedIn: true,
        isLoading: false,
      };
    }

    case "RELOGIN": {
      const { user = {}, accessToken = "" } = action.payload || {};
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        user,
        accessToken,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case "SET_USER_DETAILS": {
      return { ...state, user: action.payload };
    }

    case "SET_USER_TYPE": { 
      localStorage.setItem("@userType", action.payload);
      return { ...state, userType: action.payload };
    }

    case "SET_MAP_REGION": {
      return { ...state, mapRegion: action.payload };
    }
    case "LOGOUT": {
      localStorage.removeItem("auth");
      return {
        ...state,
        isLoggedIn: false,
        userType: "",
      };
    }

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
}

function AuthProvider({ children }) {
  const [auth, dispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    userType: "user",
    mapRegion: {},
  });

  useEffect(() => {
    async function hanldeLocalAuthentication() {
      const res = await localStorage.getItem("auth");
      if (res !== null) {
        const data = JSON.parse(res);
        dispatch({ type: "LOGIN", payload: data });
        socket.emit('user_connect',data.user)
      }
    }
    hanldeLocalAuthentication(); 
  }, []);

  useEffect(() => {
    async function hanldeUserType() {
      const res = await localStorage.getItem("@userType");
      if (res !== null) {;
        dispatch({ type: "SET_USER_TYPE", payload: res });
      }
    }
    hanldeUserType(); 
  }, []);
  useEffect(() => {
    async function handleReautentication() {
      const data = await api.setToken({ token: auth.accessToken });
      if (data) {
        api
          .userReauthentication({ token: auth.accessToken })
          .then((res) => {
            dispatch({ type: "RELOGIN", payload: res.data });
            socket.emit('user_connect',res.data.user)
          })
          .catch((err) => {
            console.log("err...", err);
            dispatch({ type: "LOGOUT", payload: "" });
          });
      }
    }

    if (auth.accessToken) {
      handleReautentication();
    }
  }, [auth.accessToken]);

  const memoedAuth = useMemo(() => auth, [auth]);
  const memoedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <AuthStateContext.Provider value={memoedAuth}>
      <AuthDispatchContext.Provider value={memoedDispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export { AuthProvider, useAuthDispatch, useAuthState };
