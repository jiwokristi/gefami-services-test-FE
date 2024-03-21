interface ButtonProps extends React.ComponentProps<'button'> {
  classes?: string;
}

export const Button = ({ classes = '', children, ...props }: ButtonProps) => {
  return (
    <button
      className={`gradient__blue shadow-glow/30 hover:shadow-glow/40 active:shadow-glow/40 rounded-xl px-32 py-16 text-20 font-semibold tracking-0.25 shadow-xl transition-all duration-300 ease-in ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
};
