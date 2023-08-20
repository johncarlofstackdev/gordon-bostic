import React from "react";
import type { Metadata } from "next";

import Styles from "@/styles/home.module.css";

// === Components
import FeaturedBook from "@/components/home/featuredBook";
import AboutTheAuthor from "@/components/home/aboutTheAuthor";
import ListOfBooks from "@/components/home/listOfBook";
import Reviews from "@/components/home/reviews";

import { DEFAULT_AUTHOR_NAME, DEFAULT_AUTHOR_DESCRIPTION } from "@/const/author";

export const metadata: Metadata = {
  title: DEFAULT_AUTHOR_NAME,
  description: DEFAULT_AUTHOR_DESCRIPTION,
};

const Home: React.FC = () => {
  return (
    <div className={Styles.main}>
      <FeaturedBook css={Styles} />
      <AboutTheAuthor css={Styles} />
      <ListOfBooks css={Styles} />
      <Reviews css={Styles} />
    </div>
  );
};

export default Home;
