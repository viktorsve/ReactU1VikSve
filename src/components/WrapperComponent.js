import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './WrapperComponent.module.css';

class WrapperComponent extends Component {
  state = {
    showComponent: true,
    hover: false
  }

  showComponent = () => {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }))
  }

  hoverFunction = () => {
    this.setState(prevState => ({
      hover: !prevState.hover
    }))
  }

  render() {
    return (
      <Card onMouseEnter={this.hoverFunction} onMouseLeave={this.hoverFunction} className={`${this.state.hover ? "shadow-lg" : "shadow"} ${styles.card}`}>
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
