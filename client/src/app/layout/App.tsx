
import { Container, CssBaseline, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";



function App() {
  

  return (
    <>
    <CssBaseline/>
      <Header/>
      <Container>
        <Outlet/>
      </Container>
      
      
    </>
  );
}

export default App;
