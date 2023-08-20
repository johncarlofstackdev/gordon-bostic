import React from "react";
import { usePathname } from "next/navigation";

import Navigation from "@/components/navigation";
import Styles from "@/styles/includes/header.module.css";
import Banner from "@/components/banner";

const Header: React.FC = () => {
    const router = usePathname().replace("/", "");

    if (!router) {
        return (
            <div className={Styles.section}>
                <Banner />
                <Navigation container={Styles.container} />
            </div>
        );
    }

    return (
        <>
            <div className={Styles.section}>
                <Navigation container={Styles.container} />
            </div>
            <Banner />
        </>
    );
};

export default Header;
