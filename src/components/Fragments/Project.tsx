import Card from "@/components/Elements/Card";
import { animate, stagger, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Section from "@/components/Layouts/Section.tsx";
import { Project as Model } from "@/models";
import { fetchData } from "@/lib/utils.ts";
import { ShimmerButton } from "@/components/Elements/Button";
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Project = () => {
  const ref = useRef<HTMLDivElement>(null);
  const prevState = useRef<boolean>(false);
  const isInView = useInView(ref, {
    once: true,
  });
  const [projects, setProjects] = useState<Model[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isExpand, setIsExpand] = useState(false);
  const api = `${import.meta.env.VITE_API}/${import.meta.env.VITE_API_VERSION}/data/query/production?query=*[_type == 'project'] | order(_createdAt desc){...,"imageUrl": image.asset->url}`;

  const handleClick = () => {
    prevState.current = isExpand;
    setIsExpand(!isExpand);
  };

  useEffect(() => {
    fetchData<Model[]>(api, toProjects, setProjects, setIsFetching);
  }, []);

  useEffect(() => {
    if (!isFetching && !prevState.current) {
      animate(
        `${isExpand ? ".card-wrapper-expanded" : ".card"}`,
        isInView ? { opacity: [0, 1], y: [50, 0] } : { opacity: 0, y: 50 },
        {
          delay: stagger(0.2, { startDelay: 0.5 }),
          duration: 0.5,
          ease: "easeOut",
        },
      );
    }
  }, [isInView, isFetching, isExpand]);

  return (
    <Section
      name="project"
      title={{ normal: "🧑‍💻 My ", gradient: "Projects" }}
      subtitle="Explore my work and see the diverse range of projects I've developed. Each project showcases my skills and creativity in web development."
      useContainer
      className="mb-20"
      ref={ref}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => {
          if (!isExpand && idx >= 3) {
            return null;
          }

          return (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              iconLists={project.iconLists}
              github={project.github}
              live={project.live}
              {...(idx >= 3 && { isWrapperExpanded: isExpand })}
            />
          );
        })}
      </div>
      <motion.div
        className="mt-14 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.7,
        }}
        viewport={{ once: true }}
      >
        <ShimmerButton
          icon={
            isExpand ? (
              <ArrowsPointingInIcon className="ml-3.5 h-5 w-5" />
            ) : (
              <ArrowsPointingOutIcon className="ml-3.5 h-5 w-5" />
            )
          }
          text={isExpand ? "Collapse" : "Expand"}
          onClick={handleClick}
        />
      </motion.div>
    </Section>
  );
};

const toProjects = (result: any): Model[] => {
  return result.map((item: any): Model => {
    const iconLists = item.techStacks.map(
      (stack: string) => `/icons/${stack}.svg`,
    );

    return {
      id: item._id,
      title: item.title,
      description: item.description,
      image: item.imageUrl,
      iconLists: iconLists,
      github: item.github ?? null,
      live: item.site ?? null,
    };
  });
};

export default Project;
