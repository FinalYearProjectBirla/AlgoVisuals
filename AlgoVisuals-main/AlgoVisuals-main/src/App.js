import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import FrontPage from "./front-page";

import UserSort from "./userSort";

function App() {
  return (
    <div>
      {/* <FrontPage></FrontPage> */}
      <div className="App">
        <div className="container">
          <Header />
          <Home />
        </div>
      </div>

      {/* <UserSort></UserSort> */}
    </div>
  );
}

export default App;
