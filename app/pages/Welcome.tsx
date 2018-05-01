import * as React from 'react';
import Page from 'Components/Page';
import Input from 'Components/Input';
import Button from 'Components/Button';
import {Row} from 'Components/Grid';
import Heading from 'Components/Heading';

function getOnSubmit(history: any) {
  return (evt: any) => {
    evt.preventDefault();
    const query = evt.target.querySelector('input').value;
    history.push(`/react-page-transitions-example/start/${encodeURI(query)}`);
  };
}

export default ({history}: any) => (
  <Page>
    <Row>
      <Heading size="extra-large">Welcome! Let's do this.</Heading>
      <Heading size="large" subdued>
        Enter your Github username below.
      </Heading>
    </Row>
    <form onSubmit={getOnSubmit(history)}>
      <Row>
        <Input placeholder="E.g. theradbrad" required />
      </Row>
      <Button type="submit">Next step</Button>
    </form>
  </Page>
);
