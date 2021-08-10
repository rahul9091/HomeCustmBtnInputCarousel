import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import Input from '../components/Input';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Checkbox } from 'react-native-paper';
import AuthBtn from '../components/AuthBtn';

// create a component
const Login = () => {
    const [check,setCheck] = React.useState(false)
    return (
        <KeyboardAwareScrollView enableOnAndroid>
            <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: '#FEFEFE' }}>
                <Image style={{ height: 30, width: 30 }} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEX///8BAQEAAACkpKSjo6Onp6egoKBzc3N2dnZwcHB8fHx5eXlra2tpaWlse0WKAAAEAElEQVR4nO2dgZriIAyEu9Werrv3/q97dpXbYlGrhGSYb/4HSDMlIUCBDoMQQgghhBBCCCGEEEIIIURPHP9Ee1Bgf7CzdRhHPIn7cfy0snUaz+ysrBkxzU592dg6C/z4GMe9jTUjpotTJhKPsy00iVNyyiAXrwJnazi5uPt1qlriKdlCasVp6VRloC4EztYwupspd6pK4mFpCyVQd7dOVRSNY24LoxWntVPv5+L+1hiAxJXAusjCk2gssIHBShq88pLEuFYseVNdwpoYxfJlByOx5IlJyqC0YkmgUcJgSGzaIzR8e5tp3KvHF43mlTm6aDgkSmwuurzgyAGcU5LE5aJbRxeVi44JElM0XHuAZsOmF5/ZsIvz71Hdn+j9wIDc9y0aIf2350ODarBf4ISNo7weHDgW9unAQ+czHg8PnpO2D6Do6VrzNxw/5W7sAsT6XsseFWPpq6Eb4TmYaDXiAMjBtq5Afe9qEU4gOdjOHTCB9t16xCrCE2zfOcLngxWWEmHKRI7dewcqEzlWjpXKBMguLJvggutFl1g4B5qDifpxCGwOJmodhBqqlakLMugcTNSMbroQWCMRYka/hXdbopMWnHnPVfAykfNOjwhfJnJed7eDMpHzash1lIOJ11zuKgcTr8wQOsvBxHa3IWf0W9gaeh3mYGJb23QscFugdjNUK/O8fbpuwZlnArosEzmPxyqdlomcRyK6G6qVuR+I3edg4p4QGoH3CgJFDiZKYr45cjBRkkglsBSot3QcohfWrbjOzM55LJFA4GOJnedgYj2CocnBxL1WJGnBmbJEihxMlCRSCRyG74LCv9FOWULfhvR5SN+X0tdD+jEN/biUfm5BPz+kn+PTr9PQr7XRr5fSr3nTf7eg//ZE//2Q/hsw/Xd8+r0Y9Ptp6PdE0e9ro9+bSL+/lH6PMP0+b/q9+vTnLejPzNCfe6I/u0Z//pD+DCn9OWD6s9z05/Hp71SgvxeD/m4T+vtp6O8Yor8niv6uL/r72ujv3KO/N5H+7kv6+0vp76Clv0eY/i5or54uLFD9HhxUNDyDJ2QAR/9vBO/Acc9F/8xwfiL9f2bo/xUUVZ/cJMaNMZxih/6/a7GTUocEiV5YaP6CwyekrZMEYbG96UuGWBhqmSgYAhuObgDWvR54YhCoKC3YzJfoMvHcm0qJ8WUix7xoAH0HumL8yvEEWks83lqLF1iQOI6H960dcmsQmz9ui8Y4ftZYOy2tIbTgzJQ79VVnbSERRWAmsVrgMHwlayBbsH7Y/TpVkYOJq0Qkgf9b0UTgNVCxBF4lGoTohbNEnBxMTLNTRgJ/igZCmcjZV5aJnCOewLNEkxwUQgghhBBCCCGEEEIIIYRw4x+naydLjRwgBgAAAABJRU5ErkJggg==' }} />
                <View style={styles.container}>
                    <Image style={styles.logo} source={{ uri: 'https://cdn.mos.cms.futurecdn.net/MFHVMYQCeJHMGop4u8VkzJ.jpg' }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.header, { textAlign: 'center' }]}>Welcome back {'\n'}</Text>
                    <Text style={[styles.header, { textAlign: "center", marginTop: -20 }]}>Log in and let's get going</Text>
                </View>
                <View>
                    <Input label="Email Address" right={<TextInput.Icon source={require('../assets/images/cross.png')} />} />
                    <Input label="Password" />
                    <Text style={styles.forgotStyle}>Forgot your Password?</Text>
                </View>
                <Text style={styles.line}>_____________________________or____________________________</Text>
                <View style={styles.imageStyle}>
                    <Image style={styles.signIn} source={{ uri: "https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/images/apple-id-sign-up-with_2x.png" }} />
                </View>
                <View style={[styles.imageStyle, { marginTop: 15 }]}>
                    <Image style={[styles.signIn, { height: 40 }]} source={{ uri: "https://i.stack.imgur.com/oL5c2.png" }} />
                </View>
                <View style={[styles.imageStyle, { marginTop: 15 }]}>
                    <Image style={[styles.signIn, { height: 35 }]} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJvJeICVmrqFtHG1UX9TC8qPMJwuN-K3sUy9JdmHfulwwNg6AfanEyvXV_1I8qvmbRw&usqp=CAU" }} />
                </View>
                <View style={styles.checkBoxStyle}>
                    <Checkbox
                        status={check ? 'checked' :'unchecked'}
                        onPress={() => setCheck(!check)}
                    />
                    <Text style={{fontFamily:"RobotoCondensed-Italic",fontSize:16}}>Remember Me</Text>
                    
                </View>
                <AuthBtn mode='contained' style={{paddingVertical:10,textAlign:"center"}}>Login</AuthBtn>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: "center"
    },
    logo: {
        height: 50,
        width: 50
    },
    textContainer: {
        marginTop: 6,
        padding: 45,
    },
    header: {
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily:'RobotoCondensed-Bold'
    },
    forgotStyle: {
        textAlign: "center",
        fontSize: 16,
        marginTop: 8,
        color: "grey"
    },
    line: {
        color: 'grey',
        marginTop: 25
    },
    imageStyle: {
        marginTop: 30
    },
    signIn: {
        height: 50,
        width: '100%'
    },
    checkBoxStyle:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems: 'center'
    }
});

//make this component available to the app
export default Login;
