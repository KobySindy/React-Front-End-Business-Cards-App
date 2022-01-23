import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FavoriteCards } from "../components/cards/CardsComp";
import { getFavoriteCards, deleteFromFavorites } from "../helpers/FetchHelper";
import { updateFavoriteCards } from "../helpers/stateHelper";
// import "./pages-css/favoriteCardsPage.css";
import "./pages-css/mainPagesStyle.css";

function FavoriteCardsPage({ state, setState }) {
  const [userFavoriteCards, setuserFavoriteCards] = useState([]);
  let favoriteCardsBizNumbers = state.user.favoriteCards;

  useEffect(() => {
    getFavoriteCards(favoriteCardsBizNumbers, (cards) => {
      setuserFavoriteCards(cards);
    });
  }, [favoriteCardsBizNumbers]);

  const removeFavoriteCard = (cardBizNumber) => {
    deleteFromFavorites(cardBizNumber, (res) => {
      updateFavoriteCards(setState, res.favoriteCards);
    });
  };

  return (
    <div className='background-wrap'>
      <Container className='page-wrap'>
        {favoriteCardsBizNumbers.length === 0 ? (
          <>
            <h1 className='page-title'>You don't have favorite cards</h1>
          </>
        ) : (
          <>
            <h1 className='page-title'>Favorite Cards Page</h1>
            <FavoriteCards
              className='cards-wrap'
              cards={userFavoriteCards}
              state={state}
              removeCard={removeFavoriteCard}
            />
          </>
        )}
      </Container>
    </div>
  );
}
export default FavoriteCardsPage;
