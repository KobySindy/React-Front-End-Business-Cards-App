import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { BusinessCards } from "../components/cards/CardsComp";
import {
  addCardToFavorites,
  getAllCards,
  forFirstCharUppercase,
} from "../helpers/FetchHelper";
import { updateFavoriteCards } from "../helpers/stateHelper";

//CSS imports
import "./pages-css/businessCardsPage.css";
import "./pages-css/mainPagesStyle.css";

function BusinessCardsPage({ state, setState }) {
  const [allCards, setAllCards] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllCards((cardsData) => {
      setAllCards(cardsData);
    });
  }, [state.user]);

  //Setting Cards to Render for BusinessCards
  function getFilterd(filter, allTheCards) {
    let filterdArr = allTheCards
      .map((card) => {
        if (
          card.bizName.includes(forFirstCharUppercase(filter)) ||
          card.bizDescription.includes(forFirstCharUppercase(filter))
        ) {
          return card;
        } else return null;
      })
      .filter(Boolean);

    return filterdArr;
  }
  let cardsToRender = getFilterd(filter, allCards);

  //Add To Favorites
  const addToFavorites = (cardBizNumber, state) => {
    addCardToFavorites(cardBizNumber, (res) => {
      if (res.message) {
        toast(res.message);
      } else {
        updateFavoriteCards(setState, res.favoriteCards);
        toast("Card Added To Favorites Successfuly!");
      }
    });
  };

  return (
    <>
      <div className='background-wrap'>
        <Container className='page-wrap'>
          <h1 className='page-title'>Business Cards Page</h1>
          <SearchBar setFilter={setFilter} />

          <BusinessCards
            state={state}
            cards={cardsToRender}
            addToFavorites={addToFavorites}
          />
        </Container>
      </div>
    </>
  );
}

function SearchBar({ setFilter }) {
  function handleChange(text) {
    setFilter(text);
  }
  return (
    <Form className='searchBarBox'>
      <Form.Group>
        <Form.Label>Search Business Cards By Name or Description</Form.Label>
        <Form.Control
          as='input'
          onChange={(e) => handleChange(e.target.value)}
          placeholder='Search By Name/Description'
        />
      </Form.Group>
    </Form>
  );
}
export default BusinessCardsPage;
