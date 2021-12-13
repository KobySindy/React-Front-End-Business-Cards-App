import { useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import AddEditCardPage from "./AddEditCardPage";
import { updateUser } from "../helpers/stateHelper";
import {
  getMeData,
  signInUser,
  registerNewAccount,
} from "../helpers/FetchHelper";

import "./pages-css/mainPagesStyle.css";

function BusinessRegistrationPage({ state, setState }) {
  const [isStep1, setIsStep1] = useState(true);

  return (
    <div className='background-wrap'>
      <Container className='page-wrap'>
        {isStep1 && (
          <SimpleRegistrationComp
            clickHandler={registerUser}
            text='Next'
            typeOfUser='Business'
          />
        )}

        {!isStep1 && <AddEditCardPage state={state} setState={setState} />}
      </Container>
    </div>
  );

  function registerUser(data) {
    const bizUserData = { ...data, biz: true };
    registerNewAccount(bizUserData, ({ _id, name, ...data }) => {
      if (_id) {
        signInUser(data, (response) => {
          if (response.token) {
            getMeData((data) => {
              updateUser(setState, data);
              toast("Welcome " + data.name);
            });
          } else toast(response.message);
        });
        toast("Account Created Successfully");
        setIsStep1(false);
      } else toast(data.message);
    });
  }
}

export default BusinessRegistrationPage;
