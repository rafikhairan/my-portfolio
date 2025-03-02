import { CardBody, CardContainer, CardItem } from "./3D.tsx";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

type CardProps = {
  title: string;
  description: string;
  image: string;
  iconLists: string[];
  isWrapperExpanded?: boolean;
  github?: string;
  live?: string;
};

const Card = ({
  title,
  description,
  image,
  iconLists,
  isWrapperExpanded,
  github,
  live,
}: CardProps) => {
  return (
    <CardContainer
      className={`inter-var w-full ${isWrapperExpanded ? "card-wrapper-expanded" : "card"}`}
    >
      <CardBody className="group/card relative h-auto w-full rounded-xl border border-white/[0.2] bg-custom-black p-[18px] hover:shadow-2xl hover:shadow-teal-500/[0.1]">
        <CardItem translateZ="35" className="w-full">
          <img
            src={image}
            className="w-full rounded-lg object-cover group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        <CardItem translateZ="30" className="relative mt-4 text-xl font-bold">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="25" className="mt-2 max-w-sm text-sm">
          {description.length > 130
            ? description.substring(0, 130) + "..."
            : description}
        </CardItem>

        <div className="mt-6 flex items-center justify-between">
          <CardItem className="flex">
            {iconLists.map((icon, idx) => (
              <div
                key={idx}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.2] bg-neutral-950 md:h-8 md:w-8 lg:h-10 lg:w-10"
                style={{
                  transform: `translateX(-${5 * idx + 2}px)`,
                }}
              >
                <img src={icon} alt={icon} className="p-2" />
              </div>
            ))}
          </CardItem>

          <CardItem className="flex">
            {github && (
              <CardItem
                as="a"
                className="flex items-center text-xs font-normal hover:text-neutral-300"
                target="_blank"
                href={github}
              >
                Github
                <ArrowUpRightIcon className="ml-1 h-3 w-3" />
              </CardItem>
            )}

            {github && live && (
              <div className="mx-2 border-r border-white/[0.2]" />
            )}

            {live && (
              <CardItem
                as="a"
                className="flex items-center text-xs font-normal hover:text-neutral-300"
                target="_blank"
                href={live}
              >
                View
                <ArrowUpRightIcon className="ml-1 h-3 w-3" />
              </CardItem>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
