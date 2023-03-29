import React from "react";
import PageTitle from "../PageTitle";
import PageParagraph from "../PageParagraph";
import FlagCards from "../FlagCards";

const Home = () => (
 
<div

sx={{display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: 20, paddingTop: 10}}>
  <PageTitle title="Lingua Amore"/>
    <div>
      <PageParagraph p="Discover a brand new way to get language fluency with Lingua Amore. Start by learning new vocabulary with our innovative flashcards. Then test your knowledge with the handy language quiz!"/>
      <PageParagraph p="I want to learn..."/>
    </div>
    <FlagCards />
 
</div>
  
);

export default Home;