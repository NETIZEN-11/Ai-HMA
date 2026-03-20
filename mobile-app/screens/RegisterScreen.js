import React,{useState} from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export default function RegisterScreen({navigation}){

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [showPassword,setShowPassword]=useState(false)

const handleSignup = () => {

if(email==="" || password===""){
Alert.alert("Error","Please fill all fields")
return
}

createUserWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{
Alert.alert("Success","Account Created Successfully")
navigation.navigate("Home")
})
.catch((error)=>{
Alert.alert("Signup Error",error.message)
})

}

return(

<View style={styles.container}>

<Text style={styles.title}>Sign Up</Text>

<TextInput
placeholder="Full Name"
style={styles.input}
value={name}
onChangeText={setName}
/>

<TextInput
placeholder="Email"
style={styles.input}
value={email}
onChangeText={setEmail}
/>

<View style={styles.passwordBox}>

<TextInput
placeholder="Password"
style={styles.passwordInput}
secureTextEntry={!showPassword}
value={password}
onChangeText={setPassword}
/>

<TouchableOpacity
onPress={()=>setShowPassword(!showPassword)}
>
<Text style={styles.eye}>
{showPassword ? "Hide" : "Show"}
</Text>
</TouchableOpacity>

</View>

<TouchableOpacity
style={styles.button}
onPress={handleSignup}
>
<Text style={styles.buttonText}>Create Account</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate("Login")}
>
<Text style={styles.login}>
Already have account? Login
</Text>
</TouchableOpacity>

</View>

)
}

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:25
},

title:{
fontSize:28,
fontWeight:"bold",
marginBottom:30,
textAlign:"center"
},

input:{
borderWidth:1,
borderColor:"#ccc",
padding:12,
borderRadius:8,
marginBottom:15
},

passwordBox:{
flexDirection:"row",
borderWidth:1,
borderColor:"#ccc",
borderRadius:8,
alignItems:"center",
paddingHorizontal:10,
marginBottom:15
},

passwordInput:{
flex:1,
padding:12
},

eye:{
color:"blue"
},

button:{
backgroundColor:"#4A6CF7",
padding:15,
borderRadius:8
},

buttonText:{
color:"white",
textAlign:"center",
fontWeight:"bold"
},

login:{
textAlign:"center",
marginTop:20,
color:"blue"
}

})