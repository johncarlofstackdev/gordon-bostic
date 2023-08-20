import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Books from "@/cms/books.json";
import Styles from "@/styles/books.module.css";
import { DEFAULT_AUTHOR_NAME, DEFAULT_AUTHOR_DESCRIPTION } from "@/const/author";

export const metadata: Metadata = {
  title: DEFAULT_AUTHOR_NAME + " - Books",
  description: DEFAULT_AUTHOR_DESCRIPTION,
};

const About: React.FC = () => {
  return (
    <div className={Styles.main}>
      <p>Embark on a literary journey through three captivating novels by Author Gordon Bostic. &ldquo;The Chosen&ldquo; weaves a tapestry of love and magic in an American town, blurring the lines between reality and mysticism, while &ldquo;The Labyrinth&ldquo; follows Lee&rsquo;s harrowing quest through a treacherous challenge to escape poverty, uncovering a dystopian society&rsquo;s truths along the way. Finally, &ldquo;The Mantis Squad&ldquo; introduces gifted children thrust into a perilous government experiment, navigating trust, identity, and power in a thrilling narrative. These novels explore the extraordinary within the ordinary, testing characters&rsquo; resilience against extraordinary circumstances, all while inviting readers to reflect on their own lives and the forces that shape them.</p>
      <section className={Styles.list}>
        {Books.map((data, i) =>
          <div className={Styles.card} key={i}>
            <figure>
              <Image 
              src={data.path} 
              alt={data.title} 
              width={500}
              height={400}
              />
            </figure>
            <div className={Styles.info}>
              <h3>{data.title}</h3>
              <span>{data.available ? "Available" : "Not Available"}</span>
              <div className={Styles.action}>
                <a href="#">Buy Now</a>
                <Link href={`/book/${data.reference}`}>Read More</Link>
              </div>
            </div>
          </div>
        )}
      </section>
      <div className={Styles.seemore}>
          <a href="https://www.amazon.com/stores/Gordon-Bostic/author/B09FRZNW9T?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true" target="_blank">See More Books</a>
      </div>
    </div>
  );
};

export default About;