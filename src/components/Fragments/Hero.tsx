import { Spotlight } from "@/components/Elements/Spotlight";
import { motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 antialiased bg-grid-white/[0.03]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <Spotlight
        className="-top-40 left-0 h-[120%] md:-top-20 md:left-64"
        fill="#1C82AD"
      />
      <Spotlight
        className="-top-40 left-0 h-[115%] md:-top-20 md:left-[33%]"
        fill="#03C988"
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center">
        <motion.h5
          animate={{ opacity: [0, 1], y: [-40, 0] }}
          transition={{
            delay: 2.5,
            duration: 1,
            ease: "easeInOut",
          }}
          className="font-montserrat text-base sm:text-lg"
        >
          Hi there 👋, I'm
        </motion.h5>

        <motion.h1
          animate={{ opacity: [0, 1] }}
          transition={{
            delay: 1.4,
            duration: 2.5,
            ease: "circInOut",
          }}
          className="my-5 text-center font-montserrat text-5xl font-bold text-gradient sm:text-6xl md:text-7xl"
        >
          Rafi Ahmad <br />
          Khairan
        </motion.h1>

        <motion.div
          animate={{ opacity: [0, 1], y: [40, 0] }}
          transition={{
            delay: 2.5,
            duration: 1,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center justify-between"
        >
          <div className="relative mb-1 flex items-center justify-center rounded-full border border-white/[0.2] bg-neutral-950 px-4 py-2">
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-teal-500 to-transparent shadow-2xl" />
            <CodeBracketIcon className="mr-3 h-5 w-5" />
            <span className="relative z-20 text-sm">Full Stack Developer</span>
          </div>
          <p className="mx-8 mt-4 max-w-md text-center text-sm sm:mx-auto sm:max-w-lg sm:text-base md:max-w-xl lg:max-w-3xl">
            I'm expertise in both Front End and Back End development, I create
            seamless, dynamic, and user-friendly web applications. Explore my
            projects to see my skills in action.
          </p>
        </motion.div>

        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10"
        >
          <Link
            to="about-me"
            offset={-75}
            smooth={true}
            className="block animate-bounce cursor-pointer text-center"
          >
            Scroll down for more <br />
            👇
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
