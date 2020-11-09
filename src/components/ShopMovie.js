import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Movies from "../components/Products";
import Trolley from "../components/Trolley";
import Search from "../components/InputSearchFilter";
import "../styles/trolley.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';


let theme = createMuiTheme();

function ShowMovie() {
  const [movies, setMovies] = useState([]);
  
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [trolley, setTrolley] = useState([]);
  const [charactersTrue, setCharactersTrue] = useState(true);
  const [load, setLoad] = useState(false)
  let date = new Date().getFullYear();

  useEffect(() => {
    axios
    .get('http://localhost:3002/')
    .then(res => { 
      setMovies(res.data)
      console.log(res.data)
      setSearchResults(res.data)      
      setLoad(false)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  useEffect(() => {
    const results = movies.filter((person) =>
      person.Titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  if(load){
    return <p>Cargando Peliculas....</p>
  }

  return (
    <Fragment>
      <Header title="Tienda Virtual" date={date} />

      <Search
        charactersTrue={charactersTrue}
        setCharactersTrue={setCharactersTrue}
        setSearchTerm={setSearchTerm}
      />

      <div className="trolley">
        <ThemeProvider theme={theme}>
          <Typography
            style={{ fontStyle: "italic", color: "#01579b" }}
            variant="h4"
          >
            Lista de Peliculas
          </Typography>
        </ThemeProvider>
        {searchResults.map((producto, index) => (
          <Movies
            producto={producto}
            key={index}
            trolley={trolley}
            setTrolley={setTrolley}
            movies={movies}
          />
        ))}
      </div>
      <Trolley trolley={trolley} setTrolley={setTrolley} />

      <Footer date={date} />
    </Fragment>
  );
}

export default ShowMovie;
