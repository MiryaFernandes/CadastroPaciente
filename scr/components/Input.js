import React,{useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../const/Colors";
 
 
const Input = ({label,IconName, error, onFocus=()=>{}, ...props}) => {
 
 
   return (
       <View style={estilos.formContainer}>
 
           <Text style={estilos.inputLabel}>{label}</Text>
 
           <View style={[estilos.inputContainer, {borderBottomColor: error ? COLORS.errorRed : COLORS.lightPurlple }]}>
               <TextInput
               style={estilos.textInput}
               autoCorrect={false}
               onFocus={()=>{onFocus()}}
               {...props}            
               />
 
           </View>
 
 
 
           <Text style={[estilos.errorMessage]}>{error}</Text>
 
       </View>
 
   );
}
 
const estilos = StyleSheet.create({
   formContainer:{
       marginBottom:1,
   },
   inputLabel:{
       height: 20,
       fontSize:14,
       color:COLORS.black,
       marginTop:5
     
   },
   errorMessage:{
       color:COLORS.darkRed,
       fontSize: 10, 
   },
   inputContainer:{
       height:40,
       backgroundColor:COLORS.white,
       borderBottomWidth:1,
       alignItems:"flex-start",
       borderBottomColor:COLORS.black,
       borderRadius: 5,
       marginBottom: 5
   },
   textInput:{
       color:COLORS.black,
   },
  
 
});
 
export default Input;
