import Image from "next/image";
import styles from "@/styles/home.module.css";
import type { Metadata } from "next";
import { DEFAULT_AUTHOR_NAME, DEFAULT_AUTHOR_DESCRIPTION } from "@/const/author";

export const metadata: Metadata = {
  title: DEFAULT_AUTHOR_NAME,
  description: DEFAULT_AUTHOR_DESCRIPTION,
};

function Home() {
  return (
    <div>
      TEST
    </div>
  )
}

export default Home;
