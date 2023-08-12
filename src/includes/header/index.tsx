import React from "react"; // Import React from the 'react' library
import Navigation from "@/components/navigation";
import Styles from "@/styles/includes/header.module.css";

const Header: React.FC = () => {
    return (
        <div className={Styles.section}>
            <Navigation container={Styles.container} />
        </div>
    );
};

export default Header;
