import React from "react";
import type { Metadata } from "next";
import BlogsData from "@/cms/reviews.json";
import Styles from "@/styles/reviews.module.css";
import { DEFAULT_AUTHOR_NAME, DEFAULT_AUTHOR_DESCRIPTION } from "@/const/author";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: DEFAULT_AUTHOR_NAME + " - Articles",
    description: DEFAULT_AUTHOR_DESCRIPTION,
};

const Blogs: React.FC = () => {
    return (
        <div className={Styles.main}>
            <p>
                We are currently updating our content to provide you with even better
                information and experiences. Please excuse the inconvenience. We
                appreciate your patience!
            </p>
            <section className={Styles.list}>

            </section>
        </div>
    );
};

export default Blogs;
