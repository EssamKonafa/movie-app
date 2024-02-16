import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import NavBar from "./src/Components/NavBar/NavBar";
import Register from "./src/pages/Register/Register";
import Login from "./src/pages/Login/Login";
import Movies from "./src/pages/movies/Movies";
import MovieDetails from "./src/pages/MovieDetails/MovieDetails";
import Favorites from "./src/Components/Faviorites/Faviorites"; 
import NotFound from "./src/pages/NotFound/NotFound";
import { useState } from "react";
import { LanguageContextProvider } from "./src/Contexts/languageContext";

export default function App() {
  const [language,setLanguage] = useState("english")
  return (
    <LanguageContextProvider value={{language,setLanguage}}> 
    <Provider store={store}>
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/" element={<Movies />} />
            <Route path="MovieDetails/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    </Provider>
    </LanguageContextProvider>
  );
}