import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Platform, Image, KeyboardAvoidingView } from 'react-native'
import Input from '../components/Input'

import { TextInput } from 'react-native-paper'
import AuthBtn from "../components/AuthBtn"
import { Formik } from 'formik';

import * as yup from 'yup';

import Icon from 'react-native-vector-icons/Feather'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


let loginValidationSchema = yup.object().shape({
  email: yup.string().email("Please Enter The valid Email").required('Email is Required'),
  password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`).
    required('Password is required').matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
})

export default function App() {
  const [eye, setEye] = React.useState(true);
  const [securePass,setSecurePass] = React.useState(true)
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => console.log(values)}
      validationSchema={loginValidationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
        <KeyboardAwareScrollView enableOnAndroid>
        {/* // <KeyboardAvoidingView style={{ flex: 1,backgroundColor:'#FEFEFE' }} behavior={Platform.OS === 'ios' ? 'padding' : null}> */}
          <SafeAreaView style={{ padding: 20, flex: 1 }}>
            <View style={styles.container}>
              <Image style={styles.logo} source={{ uri: 'https://cdn.mos.cms.futurecdn.net/MFHVMYQCeJHMGop4u8VkzJ.jpg' }} />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.header, { textAlign: 'center' }]}>Create an account to save {'\n'}</Text>
              <Text style={[styles.header, { textAlign: "center", marginTop: -15 }]}>your progress</Text>
            </View>

            <View style={styles.inputContainer}>
              <Input label="First Name"/>
            </View>
            <View style={styles.inputContainer}>
              <Input label="Last Name" />
            </View>
            <View style={styles.inputContainer}>
              <Input label="Email Address"
                style={styles.insideInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {(errors.email || touched.email) &&
              <Text style={styles.emailError}>{errors.email}</Text>
            }
            <View style={styles.inputContainer}>
              <Input
                style={styles.insideInput}
                onChangeText={handleChange('password')}
                // onFocus={handleFocus('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secure={securePass}
                theme={{ colors: { placeholder: 'grey', text: 'black', primary: 'red',underlineColor:'transparent'}}}
                label="Password" right={eye ? <TextInput.Icon name="eye" onPress={()=>setSecurePass(!securePass)} style={{color:"red"}} /> : <TextInput.I  con name="eye-off" />} />
            </View>
            {(errors.password && touched.password) &&
              <View>
                <Text style={styles.emailError}>{errors.password}</Text>
                
              </View>

            }
            <View style={styles.btnContainer}>
              {/* <AuthBtn mode="outlined">Login</AuthBtn> */}
              <AuthBtn onPress={handleSubmit} style={!isValid ? styles.btnStyleDisabled : styles.btnStyle} disabled={!isValid} mode="contained">Signup</AuthBtn>
            </View>
          </SafeAreaView>
        {/* </KeyboardAvoidingView> */}
        </KeyboardAwareScrollView>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center"
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    height: 50,
    width: 50
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputContainer: {
    marginBottom: 10
  },
  textContainer: {
    marginTop: 10,
    padding: 45,
  },
  emailError: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  insideInput: {

  },
  btnStyle: {
    backgroundColor: 'green'
  },
  btnStyleDisabled: {
    backgroundColor: "grey"
  }
})
