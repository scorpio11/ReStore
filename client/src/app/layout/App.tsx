import { Container, CssBaseline, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";



function App() {
  

  return (
    <>
    <CssBaseline/>
      <Header/>
      <Container>
      <Catalog products={products} addProduct={addProduct}/>
      </Container>
      
      
    </>
  );
}

export default App;
