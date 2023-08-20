"use client";
import React from "react";
import Image from "next/image";
import useWindowResize from "@/hooks/useWindowResize";

interface AboutTheAuthorProps {
    css: any;
};

const AboutTheAuthor: React.FC<AboutTheAuthorProps> = ({ css }) => {

    const windowSize = useWindowResize();
    const mobileTabletView = windowSize.width <= 1030;

    if (mobileTabletView) {
        return (
            <div className={css["about-author"]}>
                <h3>About the Author</h3>
                <h1>Gordon <span>Bostic</span></h1>
                <div className={css["author-image"]}>
                    <img
                        src="/images/Author-Picture.png"
                        alt="Author Profile"
                    />
                </div>
                <div className={css["author-descrip"]}>
                    <p>Gordon Bostic was born in West Virginia and grew up in Virginia. He’s a graduate of Dabney S. Lancaster Community College, James Madison University, Brookdale Community College and Fairleigh Dickinson University. He worked as a computer scientist and a software engineer for most of his life. He began writing at a young age as a way of expressing himself, his feelings, and his view of the world. He has currently had seven books published. Gordon currently lives on the Jersey Shore with his wife, Susan.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={css["about-author"]}>
            <div className={css["author-descrip"]}>
                <h3>About the Author</h3>
                <h1>Gordon <span>Bostic</span></h1>
                <p>Gordon Bostic was born in West Virginia and grew up in Virginia. He’s a graduate of Dabney S. Lancaster Community College, James Madison University, Brookdale Community College and Fairleigh Dickinson University. He worked as a computer scientist and a software engineer for most of his life. He began writing at a young age as a way of expressing himself, his feelings, and his view of the world. He has currently had seven books published. Gordon currently lives on the Jersey Shore with his wife, Susan.</p>
            </div>
            <div className={css["author-image"]}>
                <Image
                    src="/images/Author-Picture.png"
                    alt="Author Profile"
                    width="300"
                    height="345"
                    priority={true}
                />
            </div>
        </div>
    );
};

export default AboutTheAuthor;
