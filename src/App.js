import { ToastContainer } from "react-toastify";
import SinglePageAppComp from "./components/navigation/SinglePageAppComp";
import { useState, useEffect } from "react";
import { getMeData } from "./helpers/FetchHelper";
import { updateUser } from "./helpers/stateHelper";

function App() {
  const [state, setState] = useState({ user: {}, cardIdToEdit: "" });

  useEffect(() => {
    getMeData((userData) => {
      updateUser(setState, userData);
    });
  }, []);

  return (
    <div className='App'>
      <>
        <SinglePageAppComp
          setState={setState}
          state={state}></SinglePageAppComp>
        <ToastContainer></ToastContainer>
      </>
    </div>
  );
}

export default App;
