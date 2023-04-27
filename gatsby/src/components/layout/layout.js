import React from "react";
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
import Header from "./header"
import Sidebar from "./sidebar";

function Layout({ children  }) {



    return (
      <>
        <Normalizer />
        <Typography />
        <Header/>
        <Sidebar />
        <main >{children}</main>
      </>
    )
  }
  
  
  export default Layout
  