import * as React from 'react';
import {Link} from 'react-router-dom';
import * as fetch from 'isomorphic-fetch';
import Page from 'Components/Page';
import Avatar from 'Components/Avatar';
import LoadingScreen from 'Components/LoadingScreen';
import Heading from 'Components/Heading';
import {Row} from 'Components/Grid';

interface Props {
  match: any;
}

export default class GetStarted extends React.Component<Props> {
  state = {
    loading: true,
    userFound: true,
    firstName: '',
    avatarUrl: '',
  };

  componentWillMount() {
    const {username} = this.props.match.params;
    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok) {
          return {
            userFound: false,
          };
        }

        return res.json();
      })
      .then(({userFound, name, avatar_url: avatarUrl}) => {
        if (userFound === false) {
          this.setState({
            loading: false,
            userFound: false,
          });
          return;
        }

        const firstName = name.split(' ')[0];
        this.setState({
          loading: false,
          firstName,
          avatarUrl,
        });
      });
  }

  loadingComplete() {
    this.setState({loading: false});
  }

  render() {
    const {loading, firstName, avatarUrl, userFound} = this.state;

    const content = userFound ? (
      <>
        <Row>
          <Avatar src={avatarUrl} />
        </Row>
        <Row>
          <Heading size="extra-large">Hey {firstName}!</Heading>
          <Heading size="large" subdued>
            Let's get you set up.
          </Heading>
        </Row>
        <small>
          <Link to="/">Back</Link>
        </small>
      </>
    ) : (
      <>
        <Row>
          <Heading size="extra-large">404</Heading>
          <Heading size="large" subdued>
            We could not find the user you're looking for.
          </Heading>
        </Row>
        <small>
          <Link to="/">Try again</Link>
        </small>
      </>
    );

    return (
      <Page>
        <LoadingScreen hidden={!loading} />
        {content}
      </Page>
    );
  }
}
