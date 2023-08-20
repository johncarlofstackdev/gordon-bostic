"use client";
import React, { useState, useEffect } from "react";
import useWindowResize from "@/hooks/useWindowResize";
import Link from "next/link";

interface FeaturedProps {
    css: any;
};

const Featured: React.FC<FeaturedProps> = ({ css }) => {
    const [checkMobileView, checkMobileViewSet] = useState(false);
    const windowSize = useWindowResize();
    
    useEffect(() => {
        checkMobileViewSet(windowSize.width <= 1030);
    }, [windowSize]);

    if (checkMobileView) {
        return (
            <div className={css["featured-book"]}>
                <div className={css["featured-container"]}>
                    <div className={css.book}>
                        <img src="/images/books/Mantis-Squad.png" />
                    </div>
                    <div className={css["book-intro"]}>
                        <h3>Featured Book</h3>
                        <h1>Mantis Squad</h1>
                        <p>In the gripping and enthralling poetic novel "Mantis Squad," a group of gifted children with extraordinary abilities become pawns in a dangerous government experiment. Their powers, concealed by their parents, are forcibly revealed when the government snatches them away for intensive training.</p>
                        <div className={css["book-action"]}>
                            <a href="#">Buy Now</a>
                            <Link href="/book/mantis-squad">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className={css["featured-book"]}>
            <div className={css["featured-container"]}>
                <div className={css.book}>
                    <img
                        src="/images/Featured-Book.png"
                        alt="Featured Book"
                    />
                </div>
                <div className={css["book-intro"]}>
                    <h3>Featured Book</h3>
                    <h1>Mantis Squad</h1>
                    <p>In the gripping and enthralling poetic novel "Mantis Squad," a group of gifted children with extraordinary abilities become pawns in a dangerous government experiment. Their powers, concealed by their parents, are forcibly revealed when the government snatches them away for intensive training.</p>
                    <div className={css["book-action"]}>
                        <a href="#">Buy Now</a>
                        <Link href="/book/mantis-squad">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
