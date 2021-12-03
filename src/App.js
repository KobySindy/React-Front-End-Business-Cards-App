import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import SinglePageAppComp from "./components/navigation/SinglePageAppComp";
import { getMeData } from "./helpers/FetchHelper";
import { updateUser } from "./helpers/stateHelper";
import Footer from "./components/footer/Footer";

import "./app.css";

function App() {
  const [state, setState] = useState({
    user: {},
    cardIdToEdit: "",
  });

  useEffect(() => {
    getMeData((userData) => {
      updateUser(setState, userData);
    });
  }, []);

  return (
    <div className='App'>
      <div className='content-wrap'>
        <SinglePageAppComp setState={setState} state={state} />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
