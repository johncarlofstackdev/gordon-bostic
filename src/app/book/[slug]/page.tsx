import React from "react";
import type { Metadata } from "next";
import Styles from "@/styles/book.module.css";
import { DEFAULT_AUTHOR_NAME, DEFAULT_AUTHOR_DESCRIPTION } from "@/const/author";
import Content from "@/app/book/[slug]/content";

export const metadata: Metadata = {
  title: DEFAULT_AUTHOR_NAME + " - Book",
  description: DEFAULT_AUTHOR_DESCRIPTION,
};

const Book: React.FC = (props) => {
  return (
    <div className={Styles.main}>
      <Content css={Styles} />
    </div>
  );
};

export default Book;
