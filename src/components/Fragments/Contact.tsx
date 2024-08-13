import Keyboard from "@/components/Elements/Keyboard";
import Section from "@/components/Layouts/Section.tsx";
import { BorderBeam } from "@/components/Elements/BorderBeam";
import InputWithLabel from "@/components/Elements/InputWithLabel";
import TextareaWithLabel from "@/components/Elements/TextareaWithLabel";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion.ts";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { ShimmerButton } from "@/components/Elements/Button";

const Contact = () => {
  return (
    <Section
      name="contact-me"
      title={{
        normal: "✉️ Contact ",
        gradient: "Me",
      }}
      subtitle="Feel free to reach out for collaborations, project inquiries, or just
          to connect. Let's create something amazing together."
      useContainer
      className="mb-24 grid grid-cols-1 items-center lg:grid-cols-2"
    >
      <motion.div
        className="relative rounded-xl border border-white/[0.2] bg-custom-black p-6"
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.48, duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 -z-50 h-full w-full scale-[0.80] transform rounded-xl bg-gradient-to-r from-[#1C82AD] to-[#03C988] blur-3xl"
        />
        <BorderBeam size={250} duration={10} />
        <form action=" " className="w-full">
          <InputWithLabel
            label="Name"
            name="name"
            type="text"
            placeholder="Your name"
          />
          <InputWithLabel
            label="Email"
            name="email"
            type="email"
            placeholder="Your email"
          />
          <TextareaWithLabel
            label="Message"
            name="message"
            placeholder="Your message"
          />
          <div className="mb-2 mt-8 flex justify-center">
            <ShimmerButton
              text="Send Message"
              icon={<PaperAirplaneIcon className="ml-3.5 h-5 w-5" />}
            />
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="m-auto mt-16 w-full lg:mt-0"
      >
        <Keyboard />
      </motion.div>
    </Section>
  );
};

export default Contact;
