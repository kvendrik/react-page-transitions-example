import * as React from 'react';
import {Link} from 'react-router-dom';

import * as styles from './Button.scss';

interface Props {
  children: React.ReactNode;
  href?: string;
  type?: 'submit' | undefined;
}

export default ({children, href, type}: Props) => {
  if (!href || type === 'submit') {
    return (
      <button type={type} className={styles.Button}>
        {children}
      </button>
    );
  }

  return (
    <Link className={styles.Button} to={href}>
      {children}
    </Link>
  );
};
