import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Container from "@/components/Elements/Container";
import React, { forwardRef } from "react";
import { slideInFromLeft } from "@/lib/motion.ts";

type SectionProps = {
  name: string;
  title: {
    normal: string | string[];
    gradient: string;
  };
  subtitle: string;
  useContainer?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ name, title, subtitle, children, className }, ref) => {
    return (
      <Element name={name} className="mx-auto w-full max-w-7xl px-8">
        <motion.div
          variants={slideInFromLeft()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-10"
        >
          <h3 className="font-montserrat text-4xl font-bold">
            {Object.keys(title).map((text, idx) =>
              text == "normal" ? (
                title.normal
              ) : (
                <span key={idx} className="text-gradient">
                  {title.gradient}
                </span>
              ),
            )}
          </h3>
          <p className="mt-2 max-w-3xl font-montserrat text-lg">{subtitle}</p>
        </motion.div>
        <Container ref={ref} className={className}>
          {children}
        </Container>
      </Element>
    );
  },
);

export default Section;
