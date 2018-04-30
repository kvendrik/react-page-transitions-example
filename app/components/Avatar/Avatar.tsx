import * as React from 'react';

import * as styles from './Avatar.scss';

interface Props {
  src: string;
  alt?: string;
}

export default ({src, alt}: Props) => (
  <div className={styles.Avatar}>
    <img src={src} alt={alt} />
  </div>
);
