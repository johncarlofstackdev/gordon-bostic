"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation"; // Assuming this is a valid import
import BookData from "@/cms/books.json";

interface Book {
    reference: string;
    available: boolean;
    path: string;
    title: string;
    description: string;
    second_path: string;
}

interface BookProps {
    css: any
}

const Content: React.FC<BookProps> = ({ css }) => {
    const path = usePathname();
    const router = path.split("/");
    const data = findBookByReference(BookData, router[2]);

    if(!data){
        return useRouter().replace("/404");
    }

    return (
        <section className={css.content}>   
            <img src={data?.second_path} alt={data?.title} />
            <h1>{data?.title}</h1>
            <span className={css.divider}></span>
            <p className={css.status}>{data?.available ? "- Available -" : "- Not Available -"}</p>
            <p>{data?.description}</p>
            <div className={css.action}>
                <a href="#">Buy Now</a>
            </div>
        </section>
    );
};

const findBookByReference = (booksArray: Book[], reference: string) => {
    return booksArray.find((book) => {
        if (book.reference === reference) {
            return book;
        }
    });
};

export default Content;
