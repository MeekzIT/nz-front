import { InputHTMLAttributes, ReactNode } from 'react';

export interface IInputPropsBase extends Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'> {
  error?: ReactNode;
  label?: string;
  iconClear?: boolean;
  caption?: ReactNode;
  containerClassName?: string;
  classNamelabelInputWrapper?: string;
  inputClassName?: string;
  isError?: boolean;
  handleKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  noSpaces?: boolean;
}

interface LeftElementInputProps extends IInputPropsBase {
  leftElement: ReactNode;
  leftElementAction?: () => void;
  rightElement?: never;
  rightElementAction?: never;
  rightElementClassName?: string;
}

interface RightElementInputProps extends IInputPropsBase {
  rightElement: ReactNode;
  rightElementAction?: () => void;
  leftElement?: never;
  leftElementAction?: never;
  rightElementClassName?: string;
}

interface PartialElementInputProps extends IInputPropsBase {
  leftElement?: never;
  rightElement?: never;
  leftElementAction?: never;
  rightElementAction?: never;
  rightElementClassName?: string;
}

interface ElementInputProps extends IInputPropsBase {
  leftElement: ReactNode;
  rightElement: ReactNode;
  leftElementAction?: () => void;
  rightElementAction?: () => void;
  rightElementClassName?: string;
}

export type IInputProps =
  | PartialElementInputProps
  | LeftElementInputProps
  | RightElementInputProps
  | ElementInputProps;
