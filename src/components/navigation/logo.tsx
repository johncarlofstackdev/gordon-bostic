import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Style from "@/styles/components/navigation.module.css";

const Logo: React.FC = () => {
    const router = usePathname().replace("/", "");

    if (!router) {
        return (
            <div className={Style.logo}>
                <Image
                    src="/images/logo/Gordon-Bostic-(Dark-Mode)-v2.png"
                    alt="Author Logo"
                    width="600"
                    height="300"
                    priority={true}
                    className={Style.image}
                />
            </div>
        );
    }

    return (
        <div className={Style.logo}>
            <Link href="/">
                <Image
                    src="/images/logo/Gordon-Bostic-(Light-Mode)-v2.png"
                    alt="Author Logo"
                    width="600"
                    height="300"
                    priority={true}
                    className={Style.image}
                />
            </Link>
        </div>
    );
};

export default Logo;