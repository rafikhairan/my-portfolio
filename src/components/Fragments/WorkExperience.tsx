import Section from "@/components/Layouts/Section.tsx";
import Timeline from "@/components/Elements/Timeline";
import { useEffect, useRef, useState } from "react";
import { animate, stagger, useInView } from "framer-motion";
import { fetchData } from "@/lib/utils.ts";
import { WorkExperience as Model } from "@/models";

const WorkExperience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [workExperiences, setWorkExperiences] = useState<Model[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const api = `${import.meta.env.VITE_API}/${import.meta.env.VITE_API_VERSION}/data/query/production?query=*[_type == 'experience'] | order(duration.end desc)`;

  useEffect(() => {
    if (!isFetching) {
      animate(
        ".timeline",
        isInView ? { opacity: [0, 1], y: [50, 0] } : { opacity: 0, y: 50 },
        {
          delay: stagger(0.2, { startDelay: 0.5 }),
          duration: 0.5,
          ease: "easeOut",
        },
      );
    }

    fetchData<Model[]>(
      api,
      toWorkExperiences,
      setWorkExperiences,
      setIsFetching,
    );
  }, [isInView, isFetching]);

  return (
    <Section
      name="work-experiences"
      title={{
        normal: "💼 Work ",
        gradient: "Experiences",
      }}
      subtitle="Discover my professional journey, highlighting the key roles and responsibilities I've undertaken."
      useContainer
      className="mb-16"
      ref={ref}
    >
      {workExperiences.map((workExperience) => (
        <Timeline
          key={workExperience.id}
          role={workExperience.role}
          company={workExperience.company}
          responsibilities={workExperience.responsibilities}
          time={workExperience.time}
        />
      ))}
    </Section>
  );
};

const toWorkExperiences = (result: any): Model[] => {
  return result.map((item: any): Model => {
    const responsibilities = item.jobDescription.map((value: any) => {
      const [responsibility] = value.children;

      return responsibility.text;
    });

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
    };
    let start = new Date(item.duration.start);
    let end = new Date(item.duration.end);

    return {
      id: item._id,
      role: item.position,
      company: item.company,
      responsibilities: responsibilities,
      time: `${start.toLocaleDateString("en-US", options)} - ${end.toLocaleDateString("en-US", options)}`,
    };
  });
};

export default WorkExperience;
