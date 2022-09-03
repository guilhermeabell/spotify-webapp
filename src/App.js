import { useEffect } from "react";
import { Login } from "./components/Login";
import { reducerCases } from "./utils/constants";
import { useStateProvider } from "./utils/StateProvider";
import { Spotify } from "./components/Spotify";

export default function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    // console.log(hash);  log to access token
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      // console.log(token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return <>{token ? <Spotify /> : <Login />}</>;
}
