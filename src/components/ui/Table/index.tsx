import clsx from 'clsx';
import { FC, HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

import styles from './Table.module.scss';
import { Typography } from '../Typography';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  withVerticalBorder?: boolean;
  fullWidth?: boolean;
}

const TableComponent: FC<TableProps> = ({ className, withVerticalBorder, fullWidth, ...props }) => (
  <table
    className={clsx(className, styles.root, {
      [styles.withVerticalBorder]: withVerticalBorder,
      [styles.fullWidth]: fullWidth,
    })}
    {...props}
  />
);

const Thead: FC<HTMLAttributes<HTMLTableSectionElement>> = (props) => <thead {...props} />;
const Tr: FC<HTMLAttributes<HTMLTableRowElement>> = (props) => <tr {...props} />;

const Th: FC<ThHTMLAttributes<HTMLTableCellElement>> = (props) => (
  <Typography variant='paragraphs.caption_bold_1b' as='th' {...props} />
);

const Tbody: FC<HTMLAttributes<HTMLTableSectionElement>> = (props) => <tbody {...props} />;

const Td: FC<TdHTMLAttributes<HTMLTableCellElement>> = (props) => (
  <Typography variant='paragraphs.caption_bold_2b' as='td' {...props} />
);

type ExtendedTable = typeof TableComponent & {
  Thead: typeof Thead;
  Tr: typeof Tr;
  Th: typeof Th;
  Tbody: typeof Tbody;
  Td: typeof Td;
};

const Table = TableComponent as ExtendedTable;

Table.Thead = Thead;
Table.Tr = Tr;
Table.Th = Th;
Table.Tbody = Tbody;
Table.Td = Td;

export default Table;
