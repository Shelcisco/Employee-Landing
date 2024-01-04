
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (item) => {
    const updatedFavorites = favorites.filter((fav) => fav !== item);
    setFavorites(updatedFavorites);
  };

  const isFavorite = (item) => favorites.includes(item);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};