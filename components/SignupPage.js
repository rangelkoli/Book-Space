import React from 'react'
import { Text, TextInput, Dimensions, Button, StyleSheet, View} from 'react-native'
import auth from '@react-native-firebase/auth';

const dimensions = Dimensions.get('window');

function SignupPage({navigation}) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    
    const Submit = (event) => {
        event.preventDefault();
        console.log('username:', username);
        console.log('password:', password);
        console.log('confirm   password:',confirmPassword);
        setUsername('');
        setPassword('');
        setConfirmPassword('');

        auth()
        .createUserWithEmailAndPassword(username, password)
        .then(() => {

          console.log('User account created & signed in!');
          
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
        }

  return (
    <View style={styles.container}>

    <Text>SignupPage</Text>
    <View style={styles.textinputContainer}>
    <TextInput
    style={styles.textinput}
    placeholder="Username"
    onChangeText={setUsername}
    />
    <TextInput
    style={styles.textinput}
    placeholder="Password"
    onChangeText={setPassword}
    />
    <TextInput
    style={styles.textinput}
    placeholder="Confirm Password"
    onChangeText={setConfirmPassword}
    />
    </View>
    <Button
    title="Submit"
    onPress={Submit}

    />
    <Button
    title="Login"
    onPress={() => navigation.replace('LoginPage')}
    />
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinputContainer: {
      width: dimensions.width,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: dimensions.width/1.25,
      marginBottom: 10
    }
  });
export default SignupPage