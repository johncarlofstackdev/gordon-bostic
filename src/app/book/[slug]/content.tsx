"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation"; // Assuming this is a valid import
import BookData from "@/cms/books.json";
import Image from "next/image";
import he from "he";

interface Book {
    reference: string;
    available: boolean;
    path: string;
    title: string;
    description: string;
    second_path: string;
    buy_link: String;
}

interface BookProps {
    css: any
}

const Content: React.FC<BookProps> = ({ css }) => {
    const path = usePathname();
    const router = path.split("/");
    const data = findBookByReference(BookData, router[2]);

    if(!data){
        return (
            <div>
                <p>No Record Found</p>
            </div>
        );
    }

    return (
        <section className={css.content}>   
            <Image src={data?.second_path} alt={data?.title} width={600} height={500} />
            <h1>{data?.title}</h1>
            <span className={css.divider}></span>
            <p className={css.status}>{data?.available ? "- Available -" : "- Not Available -"}</p>
            <p>{he.decode(data?.description)}</p>
            <div className={css.action}>
                <a href={data?.buy_link.toString()}>Buy Now</a>
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
