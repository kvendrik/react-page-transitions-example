import * as React from 'react';

import * as styles from './Input.scss';

interface Props {
  placeholder?: string;
  required?: boolean;
}

export default ({placeholder, required}: Props) => (
  <input
    className={styles.Input}
    placeholder={placeholder}
    required={required}
  />
);
