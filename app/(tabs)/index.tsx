import { useEffect, useState } from "react";
import "../../global.css";
import SplaceScreen from "./splaceScreen";
import Welcome from "./welcome";

export default function HomeScreen() {
  const [appIsReady, setAppIsReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppIsReady(false);
    }, 500);
  }, []);

  return <>{appIsReady ? <SplaceScreen /> : <Welcome />}</>;
}
