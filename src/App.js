import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import SinglePageAppComp from "./components/navigation/SinglePageAppComp";
import { getMeData } from "./helpers/FetchHelper";
import { updateUser } from "./helpers/stateHelper";

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
      <>
        <SinglePageAppComp setState={setState} state={state} />
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
