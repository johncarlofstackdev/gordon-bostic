"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewsData from "@/cms/reviews.json";

interface ListOfBooksrProps {
    css: any;
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Reviews: React.FC<ListOfBooksrProps> = ({ css }) => {
    return (
        <div className={css.reviews}>
            <section>
                <h3>Reader Reviews</h3>
                <h1>What Reader Says</h1>
                <div className={css["reviews-container"]}>
                    <Slider {...settings}>
                        {ReviewsData.map(({ from, reviewed }, index) => (
                            <section key={index}>
                                <p>{reviewed}</p>
                                <h3>&quot;{from}&quot;</h3>
                            </section>
                        ))}
                    </Slider>
                </div>
            </section>
        </div>
    );
};

export default Reviews;