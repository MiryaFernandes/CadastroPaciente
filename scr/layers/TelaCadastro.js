import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView,Image  } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import COLORS from "../const/Colors";
import imagem from "../assests/cruz.png"
 
 
const TelaCadastro = () => {
 
 
const [inputs, setInputs] = React.useState({
   nome: '',
   telefone: '',
   celular: '',
   email: '',
   nomeresposavel: '',
   telefoneresponsavel: '',
 });
 
 const handlerOnChange = (text, input) => {
   setInputs( (prevState) => (
     {...prevState, [input]:text}
    
     ));
 }
 const [errors, setErrors] = React.useState({});
 
 const handlerErrors = (errorMessage, input) => {
   setErrors( (prevState)=>({...prevState, [input]:errorMessage}) );
 }            
const validate = () => {
  
   let validate = true;
 
   if (!inputs.nome) {
     validate = false;
     handlerErrors('Informe o seu Nome.', 'nome');
  
   }
   if (!inputs.telefone) {
     validate = false;
     handlerErrors('Informe o seu Telefone.', 'telefone');
   }
   if (!inputs.celular) {
     validate = false;
     handlerErrors('Informe o seu Celular.', 'celular');
   }
   if (!inputs.email) {
     validate = false;
     handlerErrors('Informe o seu Email.', 'email');
   }
   if(validate){
       console.log('cadastrou ai sim')
      }
      console.log(errors);
    }
 
 
   return(
       <SafeAreaView style={styles.safe}>
 
           <View style={styles.containerText}>       
               <Text style={styles.textTitle}>Cadastro Paciente</Text>
               <Image source={imagem} style={styles.image} /> 
           </View>
          
           <ScrollView style={styles.scroll}>
               <View style={styles.viewForm}></View>
               <Input  label="Nome" error={errors.nome}     onFocus={()=>(handlerErrors(null, 'nome'))}    onChangeText={ (text) => handlerOnChange(text, 'nome' )  }/>
                   <Input  label="Telefone" error={errors.telefone}     onFocus={()=>(handlerErrors(null, 'telefone'))}    onChangeText={ (text) => handlerOnChange(text, 'telefone' )  }/>
                   <Input  label="Celular" error={errors.celular}     onFocus={()=>(handlerErrors(null, 'celular'))}    onChangeText={ (text) => handlerOnChange(text, 'celular' )     }/>
                   <Input  label="Email" error={errors.email}     onFocus={()=>(handlerErrors(null, 'email'))}    onChangeText={ (text) => handlerOnChange(text, 'email' )     }/>
                   <Input  label="Nome Responsável"/>
                   <Input label="Telefone Responsável"/>
                   <Button title="CADASTRAR"  onPress={validate} />
            </ScrollView>
        </SafeAreaView>

   );
}
const styles = StyleSheet.create({
 
   safe:{
     flex:1,
     backgroundColor:COLORS.white,
   },
   scroll:{
       paddingHorizontal:20,    
     },
     viewForm:{
       marginVertical:20,
       marginBottom:50
     },
     textTitle:{
       color:COLORS.darkRed,
       fontSize:26,
       fontWeight:"bold",
       padding: 20
      
     },
     containerText:{
       width: '100%',
       height:80,
       justifyContent:"center",
       alignItems:"center",
       flexDirection:'row',
       backgroundColor:COLORS.white
 
     },
     image:{
       height:40,
       width:40,   
     },
  });
  export default TelaCadastro;