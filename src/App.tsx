import { useEffect } from "react";
import { useInitData, useMiniApp } from "@tma.js/sdk-react";

import "./App.css";

function App() {
  const initData = useInitData();

  const miniApp = useMiniApp();

  useEffect(() => {
    miniApp.ready();
  }, [miniApp]);

  return (
    <>
      <h1>Telegram Mini App</h1>
      <div className="card">
        <p>
          Отредактируй <code>src/App.tsx</code>, сохрани и попробуй HMR в действии!.
        </p>
        <p>А вот тебе сразу данные твоего пользователя, без деплоя на сервер:</p>
        <pre>{JSON.stringify(initData?.user, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
