import * as React from 'react';
import Page from 'Components/Page';
import {Link} from 'react-router-dom';

export default () => (
  <Page>
    <h1 style={{fontWeight: 700}}>Welcome! Let's do this.</h1>
    <Link to="/start">Next step</Link>
  </Page>
);
