import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PanelContent from "../components/PanelContent";
import { aTagClick, customCursor, dataImage, sticky } from "../utilits";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Nav from "./Nav";
import Triggger from "./Triggger";

const Layout = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    dataImage();
    customCursor();
    aTagClick();
    window.addEventListener("scroll", sticky);
  });
  const triggerMenu = () => {
    setTrigger(!trigger);
    document.querySelector(".resumo_fn_wrapper").classList.toggle("nav-opened");
  };
  return (
    <Fragment>
      <Head>
        <title>Steven Garman | Personal Portfolio</title>
        <script id='fiverr-seller-widget-script-5f9c85fa-b446-461d-b1d7-84ea2dece6f2' src='https://widgets.fiverr.com/api/v1/seller/stevengarman434?widget_id=5f9c85fa-b446-461d-b1d7-84ea2dece6f2' data-config='{"category_name":"\n                                    Programming \u0026 Tech\n\n                            "}' async='true' defer='true'></script>
      </Head>
      <div className="resumo_fn_wrapper">
        {/* MODALBOX */}
        {/* <Modalbox /> */}
        {/* /MODALBOX */}
        <div className="resumo_fn_content">
          {/* Main Left Part */}
          <div className="resumo_fn_left">
            {/* Page */}
            <div className="resumo_fn_page">{children}</div>
            {/* /Page */}
            <Footer />
          </div>
          {/* /Main Left Part */}
          {/* Main Right Part */}
          <div className="resumo_fn_right">
            {/* Menu Triggger */}
            <Triggger open={() => triggerMenu()} />
            {/* /Menu Triggger */}
            {/* Panel Content */}
            <PanelContent />
            {/* /Panel Content */}
          </div>
          {/* /Main Right Part */}
        </div>
        {/* Right Hidden Navigation */}
        <Nav close={() => triggerMenu()} trigger={trigger} />
        {/* /Right Hidden Navigation */}
        <Cursor />
      </div>
      {/* /Wrapper All */}
      {/* Scripts */}
      {/*[if lt IE 10]>  <![endif]*/}
      {/* /Scripts */}
    </Fragment>
  );
};

export default Layout;
