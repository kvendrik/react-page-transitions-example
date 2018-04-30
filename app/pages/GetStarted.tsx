import * as React from 'react';
import Page from 'Components/Page';
import {Link} from 'react-router-dom';

export default () => (
  <Page>
    <Link to="/">Back</Link>
    <h1>Alright, let's get you set up.</h1>
  </Page>
);
