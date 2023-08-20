import React from "react";
import type { Metadata } from "next";
import Styles from "@/styles/author.module.css";
import { DEFAULT_AUTHOR_NAME, DEFAULT_AUTHOR_DESCRIPTION } from "@/const/author";

export const metadata: Metadata = {
  title: DEFAULT_AUTHOR_NAME + " - About",
  description: DEFAULT_AUTHOR_DESCRIPTION,
};

const About: React.FC = () => {
  return (
    <div className={Styles.main}>
      <section>
        <h3>About the Author</h3>
        <h1>Gordon <span>Bostic</span></h1>
        <img src="/images/Author-Picture.png" alt="Gordon Bostic" />
        <p>Gordon Bostic is a multi-talented individual who has successfully pursued careers in both technology and writing. Born in West Virginia, he grew up in Virginia, which likely contributed to his appreciation for both natural landscapes and human experiences. His diverse academic journey reflects his commitment to education and personal growth, having attended several notable institutions including Dabney S. Lancaster Community College, James Madison University, Brookdale Community College, and Fairleigh Dickinson University. This educational background indicates a thirst for knowledge and a willingness to explore different fields of study.</p>
        <p>While Bostic's professional life predominantly revolved around computer science and software engineering, his passion for writing has remained a constant. He began honing his writing skills at a young age, using it as a means to express his thoughts, feelings, and perspectives on the world around him. This early inclination toward creative expression likely laid the foundation for his later success as an author.</p>
        <p>Despite dedicating the majority of his career to the technical realm, Bostic's innate storytelling abilities ultimately led him to pursue writing more seriously. His transition from computer scientist and software engineer to accomplished author demonstrates his adaptability and the depth of his creative talents. This unique combination of skills suggests an analytical mind coupled with a vivid imagination—an ideal blend for crafting engaging narratives.</p>
        <p>Bostic's relocation to the Jersey Shore with his wife, Susan, adds a personal touch to his biography. This change of scenery could have influenced the settings and atmospheres depicted in his novels. The coastal surroundings and the blend of natural beauty and urban living may have infused his writing with a distinct sense of place.</p>
        <p>The success of publishing seven books is a testament to Bostic's dedication to his craft. Each of his novels, as described in the synopses, explores complex themes such as magic, human resilience, power dynamics, social injustice, and the pursuit of truth. This breadth of thematic exploration showcases his depth as a storyteller and his commitment to addressing thought-provoking subjects through his writing.</p>
        <p>Overall, Gordon Bostic's journey—from a young individual using writing as an outlet to an author who skillfully weaves intricate narratives—is a compelling story in itself. His ability to balance his technical expertise with his creative spirit underscores the multidimensionality of his personality and accomplishments. The worlds he creates in his books mirror his diverse background, and his writing has the power to resonate deeply with readers, encouraging them to reflect on their own lives and the broader human experience.</p>
      </section>
    </div>
  );
};

export default About;