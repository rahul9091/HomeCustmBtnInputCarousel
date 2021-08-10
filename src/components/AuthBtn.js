import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native'
import { Button } from 'react-native-paper';

const {width} = Dimensions.get('window')

const AuthBtn = (props) => {
    return (
        <Button onPress={props.onPress} labelStyle={props.laebelStyle} style={{...styles.btnStyle,...props.style}} disabled={props.disabled} mode={props.mode}>{props.children}</Button>
    )
}
const styles = StyleSheet.create({
    btnStyle:{
        width:'100%',
        paddingVertical:8,
        // backgroundColor:'green',
        color:"black"
    }
})

export default AuthBtn;