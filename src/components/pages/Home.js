import React from "react";
import PageTitle from "../PageTitle";
import PageParagraph from "../PageParagraph";
import FlagCards from "../FlagCards";
import { Box, Container } from "@mui/material";

const Home = () => (
 
  <div sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Container sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <PageTitle title="Lingua Amore"/>
      <div>
        <PageParagraph p="Discover a brand new way to get language fluency with Lingua Amore. Start by learning new vocabulary with our innovative flashcards. Then test your knowledge with the handy language quiz!"/>
        <PageParagraph p="I want to learn..."/>
      </div>
      </Container>
      <FlagCards />
  </div>
  
);

export default Home;