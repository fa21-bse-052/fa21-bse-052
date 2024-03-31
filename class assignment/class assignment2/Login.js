import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Background from "./Background";
import { darkGreen } from "./Constraints";
import Fields from "./Fields"; 
import Btn from "./Btn";

const Login = (props) => (
    <Background>
        <View style={{ alignItems: 'center', width: 460 }}>
            <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>

            <View style={{
                backgroundColor: 'white',
                height: 700,
                width: 460,
                borderTopLeftRadius: 130,
                paddingTop: 100,
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>
                    Welcome Back
                </Text>
                <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Login to your Account</Text>
                <Fields placeholder="Email/ Username" keyboardType={"email-address"} />
                <Fields placeholder="Password" secureTextEntry={true} />
                <View style={{ alignItems: 'flex-end', width: '80%', paddingRight: 16, marginBottom: 200 }}>
                    <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Forgot Password </Text>
                </View>
                
            <Btn textColor='white' bdColor={darkGreen} btnLabel="Login" Press={() => alert("LoggedIn")} />
                <TouchableOpacity style={{ backgroundColor: darkGreen, borderRadius: 100, alignItems: 'center', justifyContent: 'center', width: '80%', height: 50, marginBottom: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Background>
);

export default Login;
