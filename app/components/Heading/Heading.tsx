import * as React from 'react';
import classNames from 'Utils/classNames';

import * as styles from './Heading.scss';

interface Props {
  size: 'extra-large' | 'large';
  children: React.ReactNode;
  subdued?: boolean;
}

export default ({children, size, subdued}: Props) => {
  let HeadingTag = 'h2';

  if (size === 'extra-large') {
    HeadingTag = 'h1';
  }

  return (
    <HeadingTag
      className={classNames(
        styles.Heading,
        size === 'large' && styles.SubHeading,
        subdued && styles.Subdued,
      )}
    >
      {children}
    </HeadingTag>
  );
};
