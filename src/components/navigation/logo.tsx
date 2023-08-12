import Image from "next/image";
import Style from "@/styles/components/navigation.module.css";

function Logo(){
    return (
        <div className={Style.logo}>
            <Image 
                src="/images/logo/Gordon-Bostic-(Dark-Mode).png" 
                alt="Author Logo" 
                width="1000"
                height="600"
                objectFit="cover"
                className={Style.image}
            />
        </div>
    );
};

export default Logo;