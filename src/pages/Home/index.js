/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Grid, Typography } from "@mui/material";
import Logo from "@Assets/logo.png";
import Products from "@Assets/products.png";
import { LogoImg, Wrapper, LogoCont, ProductImg } from "./Home.style";

const Home = () => {
  return (
    <Wrapper>
      <LogoCont>
        <LogoImg src={Logo} />
      </LogoCont>
      <Grid container className="mt-3">
        <Grid item md={4}>
          <Typography variant="h4" className="mt-3 text-bold">
            DISCOVER US
          </Typography>

          <Typography className="mt-3">
            Flick is here to help you; Our experts are available to answer any
            questions you might have. We’ve got the answers.
          </Typography>

          <Typography variant="h5" className="mt-3">
            VISIT US
          </Typography>
          <a
            style={{
              color: "black",
            }}
            href="https://shopee.ph/rmsprinting644"
          >
            <Typography className="text-underline">
              https://shopee.ph/rmsprinting644
            </Typography>
          </a>

          <Typography className="mt-2">
            Feel free to get in touch with us through our channels:
          </Typography>
          <Typography variant="h5" className="mt-3">
            EMAIL US
          </Typography>
          <Typography className="text-underline">
            rms.printing17@gmail.com
          </Typography>

          <Typography variant="h5" className="mt-3">
            CALL US
          </Typography>
          <Typography className="text-underline">0956-879-7310</Typography>
          <Typography className="text-underline">0927-254-7102</Typography>
        </Grid>
        <Grid item md={8}>
          <ProductImg src={Products} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Home;
