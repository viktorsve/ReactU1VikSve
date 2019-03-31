import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './DashboardComponent.module.css';
import UserComponent from './UserComponent';
import WrapperComponent from './WrapperComponent';

/*
Our main container component used for storing our list of users as a state that
will be passed to our other components as props. Also handles the color state
which will toggle the color of our list items. The form that is rendered in this
component will update the users list in state.
*/
class DashboardComponent extends Component {
  state = {
    users: ["pelle", "kalle"],
    value: "",
    color: true
  }

  // Updates value state to the current value of the event object that is passed as an argument
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  /*
  Prevents the default behavior of the element. Updates the users list in state
  and adds the key value of value to the end of the list. Also resets value in state.
  */
  addUser = event => {
    event.preventDefault()
    this.setState(prevState => ({ users: [...prevState.users, prevState.value]}))
    this.setState({ value: ""})
  }

  // Updates the users list in state and removes the last item in the list
  removeUser = () => {
    this.setState(prevState => ({ users: prevState.users.slice(0, prevState.users.length - 1)}))
  }

  // Updates the key value of color to the opposite boolean value
  toggleColor = () => {
    this.setState(prevState => ({
      color: !prevState.color
    }))
  }

  // Lifecycle method that render our JSX code into the DOM
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
