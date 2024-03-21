interface InputProps extends React.ComponentProps<'input'> {}

export const Input = ({ ...props }: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Quantity (between 1 and 10000)"
        className="w-full rounded-xl bg-primary px-24 py-16 text-[1.8rem] tracking-0.25 placeholder-white/40"
        {...props}
      />
    </div>
  );
};
