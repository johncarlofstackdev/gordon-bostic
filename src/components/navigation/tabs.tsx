"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavigation } from "@/context/globalStateContext";
import useWindowResize from "@/hooks/useWindowResize";
import Styles from "@/styles/components/navigation.module.css";
import { DEFAULT_MENU_ICON } from "@/const/svgs";

const Tabs: React.FC = () => {
    const windowSize = useWindowResize();
    const [checkMobileView, checkMobileViewSet] = useState(windowSize.width <= 1030);
    const { isNavigationVisible, showNavigation, hideNavigation } = useNavigation();
    const activePath = usePathname();

    const tabData = [
        { path: "/about-the-author", label: "About the Author" },
        { path: "/about-the-books", label: "About the Books" },
        { path: "/reviews", label: "Reviews" },
        { path: "/articles", label: "Articles" },
    ];

    useEffect(() => {
        checkMobileViewSet(windowSize.width <= 1030);
        if (!checkMobileView && isNavigationVisible) {
            hideNavigation();
        }
    }, [windowSize, isNavigationVisible, checkMobileView]);

    const scrollToSection = (id: any) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    if (!checkMobileView) {
        return (
            <nav className={Styles.tabs}>
                <ul className={activePath === "/" ? "" : Styles.nonhome}>
                    {tabData.map(({ path, label }) => (
                        <li key={path}>
                            <Link
                                href={path}
                                className={activePath === path ? Styles.active : Styles["not-active"]}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="#" onClick={() => scrollToSection("contact-me")}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        );
    }


    return (
        <>
            <button className={`${Styles.menu} ${activePath === "/" ? "" : Styles["active-nonhome"]}`} onClick={showNavigation}>{DEFAULT_MENU_ICON}</button>
            <nav className={`${Styles["responsive-tab"]} ${isNavigationVisible ? Styles.open : Styles.close}`}>
                <ul className={activePath === "/" ? "" : Styles.nonhome}>
                    {tabData.map(({ path, label }) => (
                        <li key={path}>
                            <Link
                                href={path}
                                className={activePath === path ? Styles.active : Styles["not-active"]}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="#contact-me" onClick={() => scrollToSection("contact-me")}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Tabs;