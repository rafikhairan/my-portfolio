import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import certificate from "@/assets/certificate.svg";
import IconCloud from "@/components/Elements/IconCloud";

// import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "md:grid-row-7 mx-auto grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | ReactNode;
  description?: string | ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "prisma",
    "mysql",
    "git",
    "github",
    "php",
    "laravel",
    "bootstrap",
    "tailwindcss",
    "nestjs",
    "go",
    "mongodb",
  ];

  return (
    <div
      className={cn(
        "bento-item group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-white/[0.2] bg-custom-black transition duration-200",
        className,
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
          )}
        >
          <div className="z-10 text-sm text-neutral-300 md:max-w-44 md:text-xs lg:text-base">
            {description}
          </div>
          <div
            className={`z-10 max-w-96 font-montserrat text-lg font-bold lg:text-3xl`}
          >
            {title}
          </div>

          {id === 3 && (
            <div className="absolute -bottom-6 right-0">
              <img className="w-32" src={certificate} alt="Certificate" />
            </div>
          )}

          {id === 5 && (
            <div className="absolute right-10 top-5 max-w-[20rem]">
              <IconCloud iconSlugs={slugs} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
