import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  setupIonicReact,
  IonButton,
  useIonAlert,
} from "@ionic/react";
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

function App() {
  const [count, setCount] = useState(0);
  const [presentAlert] = useIonAlert();

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <h1>Ionic React Vite Capacitor</h1>
          <IonButton
            onClick={() =>
              presentAlert({
                header: "Alert",
                subHeader: "Important message",
                message: "This is an alert!",
                buttons: ["OK"],
              })
            }
          >
            Click Me
          </IonButton>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}

export default App;
