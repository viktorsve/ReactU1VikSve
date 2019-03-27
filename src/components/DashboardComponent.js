import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './DashboardComponent.module.css';
import UserComponent from './UserComponent';
import WrapperComponent from './WrapperComponent';

class DashboardComponent extends Component {
  state = {
    users: ["pelle", "kalle"],
    value: "",
    color: true
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addUser = event => {
    event.preventDefault()
    this.setState(prevState => ({ users: [...prevState.users, prevState.value]}))
    this.setState({ value: ""})
  }

  removeUser = () => {
    this.setState(prevState => ({ users: prevState.users.slice(0, prevState.users.length - 1)}))
  }

  toggleColor = () => {
    this.setState(prevState => ({
      color: !prevState.color
    }))
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <WrapperComponent>
            <ListGroup as="ul">
              <UserComponent users={this.state.users} color={this.state.color}/>
            </ListGroup>
              <Button variant="info" onClick={this.toggleColor} className={styles.toggle}>Toggle Colors</Button>
          </WrapperComponent>
          <WrapperComponent>
            <Form onSubmit={this.addUser}>
              <Form.Group>
                <Form.Control type="text" placeholder="new user.." value={this.state.value} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group>
                <Button type="submit" value="Submit" variant="success" onClick={this.addUser} disabled={!this.state.value} className={styles.button}>Add</Button>
              </Form.Group>
              <Button variant="danger" onClick={this.removeUser} className={styles.button}>Remove</Button>
            </Form>
          </WrapperComponent>
        </Row>
      </Container>
    );
  }
}

export default DashboardComponent;
