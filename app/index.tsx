import * as React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import * as styles from './App.scss';

import Welcome from './pages/Welcome';
import GetStarted from './pages/GetStarted';

const App = withRouter(({location}) => (
  <div className={styles.App}>
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames={{
          enter: styles.PageEnter,
          enterActive: styles.PageEnterActive,
          exit: styles.PageExit,
          exitActive: styles.PageExitActive,
        }}
        timeout={500}
      >
        <Switch location={location}>
          <Route exact path="/" component={Welcome} />
          <Route path="/start/:username" component={GetStarted} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
));

render(
  <Router basename="/react-page-transitions-example">
    <App />
  </Router>,
  document.getElementById('app'),
);
