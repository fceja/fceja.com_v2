import 'bootstrap/dist/css/bootstrap.min.css';

import "@scss/Global.scss"
import Header from "@components/Header";
import Spotlight from "@components/Spotlight";

function App() {
  return (
    <div id="app">
      <Spotlight />
      <Header />
    </div>
  );
}

export default App;
