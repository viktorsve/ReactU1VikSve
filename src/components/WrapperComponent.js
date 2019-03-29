import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './WrapperComponent.module.css';

/*
Component that is used as a wrapper for our cards. Will render everything placed
inside this component as children if showComponent is true, otherwise it will not
render any children under that wrapper.
*/
class WrapperComponent extends Component {
  state = {
    showComponent: true,
  }

  // Updates the key value of showComponent to the opposite boolean value
  showComponent = () => {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }))
  }

  render() {
    return (
      <Card className={styles.card}>
        <Card.Body>
          {this.state.showComponent ? (
            <Fragment>
              {this.props.children}
            </Fragment>
          ) : null }
          <hr/>
          <Button onClick={this.showComponent} variant="info">Show content</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default WrapperComponent;
