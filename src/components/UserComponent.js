import React, { Fragment } from 'react';
import styles from './UserComponent.module.css'
import ListGroup from 'react-bootstrap/ListGroup';

/*
Component used for rendering all the list items in the users list that is passed here
as a prop. The text color of the list items will depend on the value it gets from
props.
*/
const UserComponent = props => {
  return (
    <Fragment>
      {props.users.map((user, i) => (
        <ListGroup.Item as="li" key={i} className={props.color ? styles.blue : styles.red}>
          {user}
        </ListGroup.Item>
      ))}
    </Fragment>
  );
}

export default UserComponent;
