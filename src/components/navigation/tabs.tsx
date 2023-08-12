import React from "react";
import Link from "next/link";
import Styles from "@/styles/components/navigation.module.css";

const Tabs: React.FC = () => {
    return (
        <nav className={Styles.tabs}>
            <ul>
                <li>
                    <Link href="/about-the-author">About The Author</Link>
                </li>
                <li>
                    <Link href="/about-the-books">About The Book</Link>
                </li>
                <li>
                    <Link href="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link href="/contact-me">Contact Me</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Tabs;