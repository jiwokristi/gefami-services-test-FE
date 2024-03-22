import type { VariantProps } from 'class-variance-authority';
import ReactLoading from 'react-loading';

import { buttonVariants } from '../utils/constants/variants/button';

export interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'color'>,
    VariantProps<typeof buttonVariants> {
  classes?: string;
  loading?: boolean;
}

export const Button = ({
  classes = '',
  variant,
  size,
  color,
  shadowSize,
  children,
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      aria-disabled={disabled}
      disabled={disabled}
      className={`${buttonVariants({ variant, size, color, shadowSize })} ${classes}`}
      {...props}
    >
      {loading ? (
        <ReactLoading type="balls" width={32} height={32} color="#FFF" />
      ) : (
        children
      )}
    </button>
  );
};
