export function updateUser(setState, user) {
  setState((prevState) => {
    return {
      ...prevState,
      user: user,
    };
  });
}

export function updateCards(setState, cards) {
  setState((prevState) => {
    return {
      ...prevState,
      user: {
        ...prevState.user,
        cards: cards,
      },
    };
  });
}
export function updateFavoriteCards(setState, favoriteCards) {
  setState((prevState) => {
    return {
      ...prevState,
      user: {
        ...prevState.user,
        favoriteCards: favoriteCards,
      },
    };
  });
}

export function updateCardIdToEdit(setState, cardIdToEdit) {
  setState((prevState) => {
    return {
      ...prevState,
      cardIdToEdit: cardIdToEdit,
    };
  });
}
