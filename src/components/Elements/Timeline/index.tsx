import { forwardRef } from "react";

type TimelineProps = {
  role: string;
  company: string;
  responsibilities: string[];
  time: string;
};

const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  ({ role, company, responsibilities, time }, ref) => {
    return (
      <div
        ref={ref}
        className="timeline group relative translate-y-[50px] transform pb-6 pl-8 pt-10 sm:pl-[11.4rem] sm:pt-0"
      >
        <div className="font-medium">{role}</div>
        <div className="flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-neutral-200 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-neutral-200 after:bg-custom-black group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem]">
          <time className="absolute left-7 top-1 mb-3 inline-flex h-6 translate-y-[3px] items-center justify-center rounded-full border border-white/[0.2] bg-custom-black px-2.5 text-xs font-semibold sm:left-0 sm:top-6">
            {time}
          </time>
          <div className="text-xl font-bold text-gradient">{company}</div>
        </div>
        <ul className="ml-6 mt-1.5 list-disc space-y-1">
          {responsibilities.map((responsibility, idx) => (
            <li key={idx}>{responsibility}</li>
          ))}
        </ul>
      </div>
    );
  },
);

export default Timeline;
