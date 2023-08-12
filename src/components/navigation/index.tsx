import React from "react";
import Logo from "@/components/navigation/logo";
import Tabs from "@/components/navigation/tabs";

interface NavigationProps {
    container: string;
};

const Navigation: React.FC<NavigationProps> = ({ container }) => {
    return (
        <div className={container}>
           <Logo />
           <Tabs />
        </div>
    );
};

export default Navigation;