import App from "./App";
import router from "./routes";

const root = document.querySelector("#root");
root.appendChild(new App().el);

router();

(async () => {
  const res = await fetch("/api/test");
  const json = await res.json();
  console.log("/api/test", json);
})();
