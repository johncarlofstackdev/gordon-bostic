import React from "react";
import Styles from "@/styles/components/banner.module.css";

const Navigation: React.FC = () => {
    return (
        <video autoPlay loop muted className={Styles.video}>
            <source src="/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default Navigation;