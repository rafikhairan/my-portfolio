import Section from "@/components/Layouts/Section.tsx";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion.ts";
import { GradientButton } from "@/components/Elements/Button";

const About = () => {
  return (
    <Section
      name="about-me"
      title={{
        normal: "😎 About ",
        gradient: "Me",
      }}
      subtitle="Get to know me better and discover more about who I
        am."
      useContainer
      className="mb-14"
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-5 md:gap-16">
        <motion.div
          className="flex items-center justify-center md:col-span-2"
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <svg
            id="blob"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <defs>
              <clipPath id="blob-mask">
                <path
                  fill="#0F62FE"
                  d="M43.9,-79.8C54.9,-69.6,60.5,-53.9,67.3,-39.7C74.1,-25.5,82,-12.7,81.2,-0.4C80.5,11.9,71.2,23.8,63.4,36.2C55.6,48.7,49.3,61.6,39,67.9C28.7,74.2,14.4,73.9,0.5,73.1C-13.4,72.3,-26.9,71.1,-37.9,65.2C-48.9,59.3,-57.5,48.7,-66.8,37.1C-76.1,25.4,-86.1,12.7,-84.6,0.9C-83,-10.9,-69.7,-21.7,-61.5,-35.2C-53.2,-48.7,-50,-64.8,-40.6,-75.9C-31.2,-87.1,-15.6,-93.2,0.4,-93.9C16.4,-94.7,32.9,-90,43.9,-79.8Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>
            <foreignObject
              x="0"
              y="0"
              width="200"
              height="200"
              clipPath="url(#blob-mask)"
            >
              <img src="/images/rafi.jpg" alt="Rafi" />
            </foreignObject>
          </svg>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-3 lg:mt-8"
        >
          <p className="leading-relaxed">
            I'm a passionate and experienced{" "}
            <span className="font-bold text-gradient">
              Full Stack Developer
            </span>{" "}
            with over two years of hands-on experience in web development. My
            expertise spans both{" "}
            <span className="font-bold text-gradient">Front End</span> and{" "}
            <span className="font-bold text-gradient">Back End</span>, allowing
            me to create seamless, dynamic, and user-friendly web applications.
            I'm dedicated to continuous learning and enhancing my skills to
            adapt to evolving technologies. My goal is to stay updated with new
            technologies and practices, ensuring I can deliver innovative
            solutions and meet the challenges of modern web development.
          </p>
          <GradientButton
            text="Download CV"
            icon={<ArrowDownTrayIcon className="ml-3.5 h-5 w-5" />}
            className="mt-4"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
