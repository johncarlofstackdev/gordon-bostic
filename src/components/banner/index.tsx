"use client";
import React from "react";
import Styles from "@/styles/components/banner.module.css";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHomeAlt } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const Banner: React.FC = () => {
    let pageTitle = "";
    const path = usePathname();
    const router = path.split("/");
    router[0] = "home";

    // Dymanic Route
    if (router.length === 3) {
        pageTitle = router[2].replace(/-/g, " ");
    } else {
        const arrayPage = router[1].split("-");
        if (arrayPage.length === 3) {
            pageTitle = arrayPage[2];
        } else {
            pageTitle = arrayPage[0];
        }
    }

    if (!router[1]) {
        return (
            <video autoPlay muted loop className={Styles.video}>
                <source src="/videos/banner/bg_low_quality.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }

    return (
        <div className={Styles.other}>
            <div className={Styles.container}>
                <h1 className={Styles.title}>{pageTitle}</h1>
                <ul className={Styles.breadcrumbs}>
                    {router.map((value, index) =>
                        index === router.length - 1 ? (
                            <li key={index} className={Styles.activename}>
                                {value.replace(/-/g, " ")}
                            </li>
                        ) : (
                            <li key={index} className={Styles.activename}>
                                <Link href={`/${value.replace(/ /g, "-") === "book" ? "about-the-books" : value.replace(/ |home/g, "/")}`} >
                                    {index === 0 && <span><FontAwesomeIcon icon={faHomeAlt} /></span>} {value.replace(/-/g, " ")}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Banner;