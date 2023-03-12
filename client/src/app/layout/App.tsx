
import { Container, CssBaseline, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css'


function App() {
  

  return (
    <>
    <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
    <CssBaseline/>
      <Header/>
      <Container>
        <Outlet/>
      </Container>
      
      
    </>
  );
}

export default App;
