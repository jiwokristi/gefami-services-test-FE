'use client';

import { ForwardedRef, forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

import { inputVariants } from '../utils/constants/variants/input';

export interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'size' | 'color'>,
    VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  inputClasses?: string;
  containerClasses?: string;
  label?: string;
  errorMessage?: string;
  onIconClick?: () => void;
}

const Input = (
  {
    startIcon,
    endIcon,
    inputClasses = '',
    containerClasses = '',
    label,
    variant,
    size,
    color,
    align,
    errorMessage,
    onIconClick,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div
      ref={ref}
      className={`flex w-full flex-col-reverse ${containerClasses}`}
    >
      {errorMessage && (
        <span className="tracking-0.1 mt-8 text-14 font-medium">
          {errorMessage}
        </span>
      )}

      <div className="relative">
        {startIcon && (
          <div
            id="StartIcon"
            onClick={onIconClick}
            className={clsx(
              'absolute left-16 top-1/2 z-10 flex h-fit -translate-y-1/2 items-center',
              {
                'cursor-pointer': onIconClick,
                'pointer-events-none': !onIconClick,
              },
            )}
          >
            {startIcon}
          </div>
        )}
        <input
          type="text"
          className={clsx(
            `${inputVariants({ variant, size, color, align })} ${inputClasses}`,
            {
              'pl-48': startIcon,
              'pr-48': endIcon,
            },
          )}
          placeholder="Search"
          {...props}
        />
        {endIcon && (
          <div
            id="EndIcon"
            onClick={onIconClick}
            className={clsx(
              'absolute right-16 top-1/2 z-10 flex h-fit -translate-y-1/2 items-center',
              {
                'cursor-pointer': onIconClick,
                'pointer-events-none': !onIconClick,
              },
            )}
          >
            {endIcon}
          </div>
        )}
        {label && (
          <label
            htmlFor={props.name}
            className="peer-focus:text-primary-shade-2 absolute -top-24 left-0 text-14 transition-all ease-in"
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

const ForwardedInput = forwardRef<HTMLInputElement, InputProps>(Input);

export { ForwardedInput as Input };
