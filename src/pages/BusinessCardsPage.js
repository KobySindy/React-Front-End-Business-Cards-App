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
import "./pages-css/businessCardsPage.css";

function BusinessCardsPage({ state, setState }) {
  const [allCards, setAllCards] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllCards((cardsData) => {
      setAllCards(cardsData);
      console.log(state.user);
    });
  }, []);

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
  let filterdArr = getFilterd(filter, allCards);

  //Add To Favorites
  const addToFavorites = (cardBizNumber, state) => {
    addCardToFavorites(cardBizNumber, (res) => {
      debugger;
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
      <SearchBar setFilter={setFilter} />
      <Container className='cardsContainer'>
        <BusinessCards
          state={state}
          cards={filterdArr}
          addToFavorites={addToFavorites}
        />
      </Container>
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
        />
      </Form.Group>
    </Form>
  );
}
export default BusinessCardsPage;
