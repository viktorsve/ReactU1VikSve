import React, { Fragment } from 'react';
import styles from './UserComponent.module.css'
import ListGroup from 'react-bootstrap/ListGroup';

const UserComponent = (props) => {
  return (
    <Fragment>
      {props.users.map(user => (
        <ListGroup.Item as="li" className={props.color ? styles.blue : styles.red}>
          {user}
        </ListGroup.Item>
      ))}
    </Fragment>
  );
}

export default UserComponent;
