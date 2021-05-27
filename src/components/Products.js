import React, { Fragment } from "react";
import "../styles/trolley.css";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {
  Button,
  Card,
  Grid,
  CardContent,
  Divider,
  Typography,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      padding: 30,
      color: "blue",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: 20,
  },
  divider: {
    margin: 12,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  title: {
    color: "#ff9800",
  },
  fuente: {
    fontFamily: ["Roboto"].join(","),
  },
}));

const Movies = ({ producto, trolley, setTrolley, movies }) => {
  const {
    Precio,
    Titulo,
    id,
    Foto,
    Fecha_de_Estreno,
    Duracion,
    Compañia,
  } = producto;
  const handleClick = (id) => {
    let producto = movies.filter((elemento) => elemento.id === id)[0];
    producto.compra = true;
    setTrolley([...trolley.concat(producto)]);
  };
  const handleDelete = (id) => {
    let valor = id;
    let i = 0;
    while (i <= 7 && trolley[i].id !== valor) {
      i = i + 1;
    }
    const indice = i;
    let eliminateMove = trolley.filter((element, index) => {
      return index !== indice;
    });

    setTrolley(eliminateMove);
  
  };
  const classes = useStyles();

  return (
    <div>
      <Grid item style={{ padding: 20 }}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={Foto} />
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant={"h4"}>
              {Titulo}
            </Typography>
              <p className={classes.fuente}>
                Fecha de estreno : {Fecha_de_Estreno}
              </p>
              <p className={classes.fuente}>
                Duracion de la Pelicula : {Duracion}
              </p>
              <p className={classes.fuente}>Compañia : {Compañia} </p>
              {Precio}$
        
            <Divider className={classes.divider} light />

            {movies ? (
              <Button
                variant="contained"
                color="primary"
                type="button"
                id="comprar"
                onClick={() => handleClick(id)}
              >
              <ShoppingCartIcon></ShoppingCartIcon> Comprar
              </Button>
            ) : (
              <Fragment>
                <h4 style={{ color: "green" }}>
                  <CheckCircleIcon></CheckCircleIcon> Producto Añadido A Carrito
                </h4>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  id="comprar"
                  onClick={() => handleDelete(id)}
                >
                  <DeleteIcon></DeleteIcon>Eliminar
                </Button>
              </Fragment>
            )}
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Movies;
