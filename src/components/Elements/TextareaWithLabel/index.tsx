import Label from "@/components/Elements/Label";

type TextareaWithLabelProps = {
  label: string;
  name: string;
  placeholder: string;
};

const TextareaWithLabel = ({
  label,
  name,
  placeholder,
}: TextareaWithLabelProps) => {
  return (
    <div className="mb-5">
      <Label name={name}>{label}</Label>
      <textarea
        id={name}
        className="placeholder-text-neutral-600 mt-2 flex w-full rounded-lg border-none bg-neutral-900 px-3 py-2 text-sm transition file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-white/[0.2] disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]"
        placeholder={placeholder}
        rows={6}
      />
    </div>
  );
};

export default TextareaWithLabel;
