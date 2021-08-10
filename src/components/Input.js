import React,{useRef,useEffect} from 'react';
import { StyleSheet } from 'react-native';
import {TextInput} from 'react-native-paper';

const Input = (props,ref) => {
    const [focused,setFocused] = React.useState(false)
    
    // useEffect(()=>{
    //     ref.inputRef1.current.focus()
    // },[])

    return (
        <TextInput
        onChangeText={props.onChangeText}
        value={props.value}
        ref={ref}
        // ref={userRef}
        keyboardType={props.keyboardType}
        maxLength={props.max}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        secureTextEntry={props.secure}
        // style={[focused? styles.focusedStyle:styles.text]}
        // theme={props.theme}
        theme={{ colors: { placeholder: '#FEFEFE', text: 'black', primary: 'green',underlineColor:'transparent'}}}
        style={{...styles.input,...props.style}}
        label={props.label}
        mode='outlined'
        // onFocus={()=>{
        //     setFocused(true)
        // }}
        // onBlur={()=>setFocused(!focused)}
        // placeholder="First Name"
        right={props.right}
        selectionColor={focused ? 'green' : 'grey'}
        outlineColor="grey"
        // // underlineColor="green"
        />
    )
}

const styles = StyleSheet.create({
    focusedStyle:{
        borderColor:'green',
        backgroundColor:"#FEFEFE"
    },
    text:{
        color:'grey',
        backgroundColor:'white'
    },
    input:{
        height:50,
        backgroundColor:"#FEFEFE"
    }
})

const forwardedRef = React.forwardRef(Input)

console.log(forwardedRef,'forwadedref')

export default forwardedRef;