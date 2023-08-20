"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowResize from "@/hooks/useWindowResize";

interface ListOfBooksrProps {
    css: any;
    responsive: boolean;
};

const ListOfBooks: React.FC<ListOfBooksrProps> = ({ css, responsive }) => {
    const windowSize = useWindowResize();
    const mobileTabletView = windowSize.width <= 1030;
    return (
        <div className={css.list}>
            <div className={css["list-container"]}>
                <div className={css.books}>
                    <Image
                        src="/images/List-of-Books(2).png"
                        alt="Author Profile"
                        width="550"
                        height="600"
                        priority={true}
                    />
                </div>
                <div className={css["books-intro"]}>
                    <section>
                        <h1>Books</h1>
                        <p>Offer a captivating blend of magic, and suspense. Thought-provoking themes that leave readers hungry for more. Each novel takes readers on an unforgettable ride, inviting them to reflect on their own lives, challenge societal norms, and embrace the extraordinary potential within themselves.</p>
                        <Link href="/about-the-books">See More</Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ListOfBooks;