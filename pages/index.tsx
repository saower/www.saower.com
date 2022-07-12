import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [{ content: "Hello Saower" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.div
        className="text-7xl mb-8 gradient-text"
        variants={text_reveal}
      >
        {text.content}
      </motion.div>
    </div>
  ));

  return (
    <>
      <SeoTags />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p
            variants={text_reveal_fade}
            style={{ lineHeight: "2.1rem", fontSize: "17px" }}
          >
            I'm a Full stack Software engineer , I build intuitive digital
            interfaces, offering a memorable user experience. I currently
            working with React, GraphQl, Typescript, NodeJs and Prisma. My whole
            life is shaped around my passion for programming ✨.
          </motion.p>
            <motion.p
                variants={text_reveal_fade}
                style={{ lineHeight: "2.1rem", fontSize: "17px" }}
            >
                我是一名全栈开发工程师，我热爱开发，并专注与物联网领域。我喜欢旅行，至今我已经走过了中国上百座城市；很多时候我觉得，行万里路胜过
                读万卷书；旅行让我看遍世间千万种风土人情，让我领悟得更多更多。
            </motion.p>




        </motion.div>

        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
