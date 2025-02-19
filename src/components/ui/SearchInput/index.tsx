import styles from './SearchInput.module.scss';
import { IInputProps, Input } from '../Input';
import { FC, forwardRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type TSearchInputProps = {
  placeholder?: string;
  className?: string;
};

const SearchInput: FC<IInputProps & TSearchInputProps> = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, placeholder = 'Placeholder', ...props }, ref) => {
    return (
      <Input
        {...props}
        ref={ref}
        leftElement={<Image src='/assets/icon-search.svg' alt='time' width={20} height={20} />}
        classNamelabelInputWrapper={clsx(styles.root, className)}
        placeholder={placeholder}
      />
    );
  },
);

export default SearchInput;
