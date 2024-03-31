import React from "react";
import {View,StyleSheet,Text} from 'react-native';
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen, green} from "./Constraints";

const Home = (props) => {
    return (
        <Background>
            <View style = {{ marginHorizontal: 40 ,marginVertical :100}} >
      <Text styles={{ color: 'white',fontsize:64}}>Let's start </Text>
      <Text styles={{ color: 'white',fontsize:64 ,marginBottom :40}}>Coding </Text>
      <Btn bgColor={green} textColor='white' btnLabel ="Login" Press={() => props.navigation.navigate("Login")}/>
      <Btn bgColor={white} textColor='darkGreen' btnLabel ="Signup" Press={() =>props.navigation.navigate("Signup")}  />
      </View>
      </Background>
        
    );
}
 const styles = StyleSheet.create ({})
  export default Home;