//import liraries
import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import AuthBtn from '../components/AuthBtn';

import Input from '../components/Input'
// create a component
const OtpScreen = (props) => {
    const [inpt, setInpt] = useState("")

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);

    console.log(inputRef1,'inputRef1')



    // useEffect(()=>{
    //     inputRef1.current.focus()
    // },[])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.top}>OTP Verification</Text>
            <View style={styles.viewContainer}>
                <Input value={inpt} onChangeText={(txt) => setInpt(txt)} ref={inputRef1} max={1} keyboardType="numeric" style={styles.input} />
                <Input max={1} keyboardType="numeric" ref={inputRef2} max={1} style={styles.input} />
                <Input max={1} keyboardType="numeric" ref={inputRef3} max={1} style={styles.input} />
                <Input max={1} keyboardType="numeric" max={1} ref={inputRef4} style={styles.input} />
            </View>
            <AuthBtn style={styles.button} mode="contained">Verify</AuthBtn>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:"center",
    },
    input: {
        width: '10%',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    viewContainer: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    top: {
        fontSize: 19,
        // alignItems:"center"
        textAlign: "center",
        marginTop: 10
    },
    button: {
        backgroundColor: "green",
        // marginTop:20
        marginVertical: 30
    }
});

//make this component available to the app
export default OtpScreen;
