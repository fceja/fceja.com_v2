import 'bootstrap/dist/css/bootstrap.min.css';

import "@scss/Global.scss"
import HomePage from "@pages/HomePage";
import Spotlight from "@components/Spotlight";

function App() {
  return (
    <div id="app">
      <Spotlight />
      <HomePage />
    </div>
  );
}

export default App;
