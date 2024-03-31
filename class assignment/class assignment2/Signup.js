import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Background from "./Background";
import { darkGreen } from "./Constraints";
import Fields from "./Fields";
import Btn from "./Btn";


const Signup = (props) => (
    <Background>
        <View style={{ alignItems: 'center', width: 460 }}>
            <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginTop: 20 }}>Register</Text>
            <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}> Create a new Account</Text>
            <View style={{
                backgroundColor: 'white',
                height: 700,
                width: 460,
                borderTopLeftRadius: 130,
                paddingTop: 50,
                alignItems: 'center'
            }}>


                <Fields placeholder="First Name" />
                <Fields placeholder="Last Name" />
                <Fields placeholder="Email/UserName" keyboardType={"email-address"} />
                <Fields placeholder="Contact Number" keyboardType="number" />
                <Fields placeholder="Password" secureTextEntry={true} />
                <Fields placeholder=" Confirm Password" secureTextEntry={true} />
                <View style={{ display: 'flex', flexDirection: 'row', width: '80%', paddingRight: 16}}>
                    <Text style={{ color: Grey, fontWeight: 'bold', fontSize: 16 }}>By signing in,you agree to our </Text>
                    <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Terms & Conditions</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row',  justifyContent:'center' ,width: '80%', paddingRight: 16 ,marginBottom:10}}>
                    <Text style={{ color: Grey, fontWeight: 'bold', fontSize: 16 }}>and {""} </Text>
                    <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Privacy Policy</Text>
                </View>

                <Btn textColor='white' bdColor={darkGreen} btnLabel="Signup" Press={() => {
                    alert("Account Created")
                    props.navigation.navigate("Login")
                }} />
                <TouchableOpacity style={{ backgroundColor: darkGreen, borderRadius: 100, alignItems: 'center', justifyContent: 'center', width: '80%', height: 50, marginBottom: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Already  have an account? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Background>
);

export default Signup;
