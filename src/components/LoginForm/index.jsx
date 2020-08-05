import React, { Component } from 'react';
import styles from './LoginForm.module.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      userPass: '',
    };
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      userEmail: value,
    });
  };

  handlePassChange = ({ target: { value } }) => {
    this.setState({
      userPass: value,
    });
  };

  render() {
    const { userEmail, userPass } = this.state;
    return (
      <form className={styles.container}>
        <input
          className="styles.input"
          value={userEmail}
          placeholder="email"
          type="email"
          name="user-email"
          onChange={this.handleEmailChange}
        />
        <input
          value={userPass}
          placeholder="password"
          type="password"
          name="user-pass"
          onChange={this.handlePassChange}
        />
        <input type="submit" value="login" />
      </form>
    );
  }
}

export default LoginForm;
