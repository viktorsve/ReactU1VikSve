import React, { Fragment } from 'react';
import styles from './UserComponent.module.css'

const UserComponent = (props) => {
  return (
    <Fragment>
      {props.users.map(user => (
        <li className="list-group-item" key={user}><a href="/" className={props.color ? styles.blue : styles.red}>{user}</a></li>
      ))}
    </Fragment>
  );
}

export default UserComponent;
