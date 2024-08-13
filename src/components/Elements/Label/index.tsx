import { ReactNode } from "react";

type LabelProps = {
  name: string;
  children: ReactNode;
};

const Label = ({ name, children }: LabelProps) => {
  return (
    <label
      htmlFor={name}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  );
};

export default Label;
