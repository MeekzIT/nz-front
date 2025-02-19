'use client';
import { Root, Content, List, Trigger, TabsProps } from '@radix-ui/react-tabs';
import clsx from 'clsx';
// import { motion } from 'framer-motion';
import { FC, ReactElement, useEffect, useLayoutEffect, useState } from 'react';
import { TabProps } from './Tab';

import styles from './Tabs.module.scss';
import { Typography } from '../Typography';

export interface ITabsProps extends TabsProps {
  className?: string;
  cursorDisabled?: boolean;
  children?: ReactElement<TabProps>[] | ReactElement<TabProps>;
}

const Tabs: FC<ITabsProps> = ({
  className,
  children,
  value,
  defaultValue,
  cursorDisabled,
  onValueChange,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);

  // const layoutId = useId();

  const handleValueChange = (newValue: string) => {
    if (value === undefined) setInternalValue(newValue);
    onValueChange?.(newValue);
  };

  useLayoutEffect(() => {
    if (value !== undefined) setInternalValue(value);
  }, [value]);

  const tabs = Array.isArray(children) ? children : children ? [children] : [];

  useEffect(() => {
    setInternalValue(defaultValue);
  }, [defaultValue]);

  return (
    <Root
      className={clsx(className, styles.root)}
      value={internalValue}
      onValueChange={handleValueChange}
      {...props}
    >
      <List className={styles.triggers}>
        {tabs.map((tab) => {
          const label = tab.props.label;
          const onClick = tab.props.onClick;

          return (
            <Trigger
              key={label}
              className={clsx(styles.trigger, { [styles.cursorDisabled]: cursorDisabled })}
              value={label}
              onClick={onClick}
            >
              <Typography as='span' variant='elements.limits_tarif' textAlign='center'>
                {label}
              </Typography>
              {/* {label === internalValue && (
                <motion.span className={styles.underline} layoutId={layoutId} />
              )} */}
            </Trigger>
          );
        })}
      </List>
      {tabs.map((tab) => {
        const label = tab.props.label;
        const onClick = tab.props.onClick;

        return (
          <Content key={label} value={label} onClick={onClick}>
            {tab}
          </Content>
        );
      })}
    </Root>
  );
};

export default Tabs;
