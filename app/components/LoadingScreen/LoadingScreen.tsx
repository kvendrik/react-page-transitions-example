import * as React from 'react';
import classNames from 'Utils/classNames';

import * as spinner from './spinner.svg';

import * as styles from './LoadingScreen.scss';

interface Props {
  hidden?: boolean;
}

export default ({hidden}: Props) => (
  <div
    className={classNames(
      styles.LoadingScreen,
      hidden && styles.LoadingScreenHidden,
    )}
  >
    <div className={styles.Spinner}>
      <img src={spinner} alt="Spinner" />
    </div>
  </div>
);
