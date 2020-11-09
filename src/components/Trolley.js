import React from "react";
import "../styles/trolley.css";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Producto from "./Products";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
theme.typography.h4 = {
  fontStyle: "italic",
  color: "white",
};

const Trolley = ({ trolley, setTrolley}) => {
  let total = () => {
    var total = trolley.map((element) => {
      return element.Precio;
    });
    var complet = total.reduce((a, b) => a + b, 0);
    return complet;
  };

  return (
    <div style={{ background: "pink" }} className="trolley">
      <ThemeProvider theme={theme}>
        <Typography variant="h4">Lista de Compras</Typography>
      </ThemeProvider>
      <h3>Unidades : {trolley.length} </h3>
      <h3>Total :{total()} </h3>

      {trolley.length === 0 ? (
        <p>No hay Peliculas seleccionadas</p>
      ) : (
        trolley.map((producto, index) => (
          <Producto
            key={index}
            producto={producto}
            trolley={trolley}
            setTrolley={setTrolley}
          />
        ))
      )}
    </div>
  );
};

export default Trolley;
