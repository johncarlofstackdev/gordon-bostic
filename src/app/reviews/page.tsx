import React from "react";
import type { Metadata } from "next";
import Books from "@/cms/reviews.json";
import Styles from "@/styles/reviews.module.css";
import { DEFAULT_AUTHOR_NAME, DEFAULT_AUTHOR_DESCRIPTION } from "@/const/author";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: DEFAULT_AUTHOR_NAME + " - Reviews",
    description: DEFAULT_AUTHOR_DESCRIPTION,
};

const Reviews: React.FC = () => {
    return (
        <div className={Styles.main}>
            <p>
                Read what others are saying about the author books. Explore their
                thoughts, opinions, and feedback.
            </p>
            <section className={Styles.list}>
                {Books.map((data, i) => (
                    <div className={Styles.card} key={i}>
                        <h3>{data.name}</h3>
                        <div className={Styles.star}>
                            {[...Array(5)].map((_, starIndex) => (
                                starIndex < data.rate ? (
                                    <FontAwesomeIcon icon={faStar} key={starIndex} className={Styles.rated} />
                                ) : (
                                    <FontAwesomeIcon icon={faStar} key={starIndex} />
                                )
                            ))} - {data.from}
                        </div>
                        <p>{data.reviewed}</p>
                        <span>{data.date}</span>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Reviews;
