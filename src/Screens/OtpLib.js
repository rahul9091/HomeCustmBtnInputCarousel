
import React, { useState } from 'react';
import { Alert, TextInput, View, Text, StyleSheet, Dimensions, SafeAreaView, Image, Modal, Pressable } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AuthBtn from '../components/AuthBtn';
import Icon from 'react-native-vector-icons/AntDesign'

const { width } = Dimensions.get('screen')
const heigth = width

const OtpLib = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={[styles.container,modalVisible ? {backgroundColor: 'rgba(0,0,0,0.7)'}:""]}>
            <View style={styles.topView}>
                <Icon style={{ marginBottom: 25 }} name="arrowleft" size={30} />
            </View>
            <Text style={[styles.digit, { fontSize: 30 }]}>Enter 4 Digit Code</Text>
            <View style={[styles.otpContainer]}>
                <Text style={[styles.otpsent]}>Enter the 4 digit OTP that was sent {'\n'}</Text>
                <Text style={[styles.otpsent, { marginTop: -12 }]}>to <Text style={{ fontWeight: "bold", color: "black" }}>rah****.com</Text></Text>
            </View>
            <View style={styles.otpContainer}>
                <Text style={styles.otpsent}>Not your Email / <Text style={{ fontWeight: "bold", color: "black" }}> Change Email</Text></Text>
            </View>
            <OTPInputView
                style={[styles.view, { ...styles.otpContainer }]} pinCount={4}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={() => alert('done')}
                placeholderTextColor="grey"
                placeholderCharacter="0"
            />
            <View style={styles.otpContainer}>
                <Text style={styles.otpsent}>Didn't Recieve a code ? <Text style={{ fontWeight: "bold", color: "black" }}>Resend Code</Text></Text>
            </View>
            <View style={styles.otpContainer}>
                <AuthBtn onPress={() => setModalVisible(true)} mode="contained" laebelStyle={{ color: "black" }} style={styles.btnStyle}>Verify</AuthBtn>
            </View>
            <View style={styles.textInputStyle}>
                <TextInput style={{ flex: 1, fontSize: 16, marginLeft: 5 }}

                    // inlineImageLeft=
                    placeholder="Phone"
                    underlineColorAndroid="transparent"
                    placeholderStyle={styles.placeholder}
                />

                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',
                    }}
                    style={styles.imageStyle}
                />
            </View>

            <View style={styles.centeredView}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{borderRadius:20,elevation:20,height:'50%',backgroundColor:"white",marginTop:'auto'}}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
        paddingTop: 90
    },
    btnStyle: {
        backgroundColor: "#9DBF1C"
    },
    topView: {
        marginTop: -40
    },
    placeholder: {
        fontSize: 25,
        marginRight: 10,
        marginLeft: 30
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 22
    },
    textInputStyle: {
        borderColor: "#000",
        borderWidth: 0.5,
        backgroundColor: "#fff",
        flexDirection: "row-reverse",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    otpContainer: {
        marginTop: 45
    },
    otpsent: {
        color: "grey",
        fontSize: 16
    },
    view: {
        height: 100,
        paddingRight: 200,
        width: width,
        // justifyContent: 'center',
        // alignItems: "center"
    },
    imageStyle: {
        resizeMode: 'contain',
        // padding: 10,
        marginLeft: 8,
        height: 25,
        alignItems: "center",
        width: 25,
    },
    digit: {
        fontSize: 25,
        fontFamily: "RobotoCondensed-BoldItalic"
        // fontWeight:'bold'
    },
    borderStyleBase: {
        width: 30,
        // height: 45,
        borderRadius: 15
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 40,
        height: 45,
        // borderRadius: 20,
        borderWidth: 0,
        // borderColor: "black",
        borderBottomWidth: 2,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
});

//make this component available to the app
export default OtpLib;
