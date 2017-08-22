import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
// import { View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import styles from './styles';
import keys from '../../config/common';

class GoogleSigninLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.signInLocal = this.signInLocal.bind(this);
    this.signOutLocal = this.signOutLocal.bind(this);
    this.setupGoogleSigninLocal = this.setupGoogleSigninLocal.bind(this);
  }
  componentDidMount() {
    this.setupGoogleSigninLocal();
  }
  async setupGoogleSigninLocal() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: keys.iosClientId,
        offlineAccess: false,
      });
      const user = await GoogleSignin.currentUserAsync();
      this.setState({ user });
    } catch (err) {
      /* eslint no-console: ["error", { allow: ["error"] }] */
      console.error('Google signin error', err.code, err.message);
    }
  }
  signInLocal() {
    GoogleSignin.signIn()
      .then((user) => {
        this.setState({ user });
      })
      .catch((err) => {
        /* eslint no-console: ["error", { allow: ["error"] }] */
        console.error('WRONG SIGNIN', err);
      })
      .done();
  }
  signOutLocal() {
    GoogleSignin.revokeAccess()
      .then(() => GoogleSignin.signOut())
      .then(() => {
        this.setState({ user: null });
      })
      .done();
  }
  render() {
    if (!this.state.user) {
      return (
        <View style={styles.container}>
          <GoogleSigninButton
            style={styles.signinButton}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Auto}
            onPress={this.signInLocal}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome {this.state.user.name}</Text>
        <Text>Your email is: {this.state.user.email}</Text>
        <TouchableOpacity
          onPress={() => {
            this.signOutLocal();
          }}
        >
          <View style={styles.logoutView}>
            <Text>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

GoogleSigninLayout.propTypes = {
  navigation: PropTypes.object,
};

export default GoogleSigninLayout;
