import React from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, Button } from 'react-native'

const dimensions = Dimensions.get('window');


function LoginPage({navigation}) {


    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('username:', username);
        console.log('password:', password);
        setUsername('');
        setPassword('');
        }

    

  return (
    <View style={styles.container}>

    <Text>LoginPage</Text>
    <View style={styles.textinputContainer}>
        
    <TextInput
    style={styles.textinput}
    placeholder="Username"
    onChangeText={setUsername}
    value={username}
    />
    <TextInput
    style={styles.textinput}
          placeholder="Password"
            onChangeText={setPassword}
            value={password}

    />
    </View>
    <Button 
    title="Submit"
    onPress={handleSubmit}
    />

    <Button
    title="Signup"
    onPress={() => navigation.replace('SignupPage')}
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

export default LoginPage