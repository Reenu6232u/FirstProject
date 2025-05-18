import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Slider from "./Component/Slider";
import AllRoutes from "./Router/AllRoutes";
import Agents from "./Component/Agents";
import NewHeader from "./Component/NewHeader";

const app = () => {
  return (
    <>
    <NewHeader />
      {/* <Header /> */}
      {/* <Slider /> */}
      <AllRoutes />
      <Agents />
      <Footer />
    </>
  );
};

export default app;
  