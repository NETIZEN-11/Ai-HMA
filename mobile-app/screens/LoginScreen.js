import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";

import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../services/firebase";

export default function LoginScreen({ navigation }) {

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [showPassword,setShowPassword]=useState(false)

const handleLogin = () => {

if(email==="" || password===""){
Alert.alert("Error","Please enter email and password")
return
}

signInWithEmailAndPassword(auth,email,password)
.then(()=>{
navigation.navigate("Home")
})
.catch(error=>{
Alert.alert("Login Error",error.message)
})

}

const handleResetPassword = () => {

if(email===""){
Alert.alert("Enter Email","Please enter your email first")
return
}

sendPasswordResetEmail(auth,email)
.then(()=>{
Alert.alert("Reset Email Sent","Check your email to reset password")
})
.catch(error=>{
Alert.alert("Error",error.message)
})

}

return(

<View style={styles.container}>

<Text style={styles.title}>Login</Text>

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
<Ionicons
name={showPassword ? "eye-off" : "eye"}
size={20}
/>
</TouchableOpacity>

</View>

<TouchableOpacity onPress={handleResetPassword}>
<Text style={styles.forgot}>Forgot Password?</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
activeOpacity={0.7}
onPress={handleLogin}
>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

<Text style={styles.or}>OR</Text>

<TouchableOpacity style={styles.googleBtn}>
<Text style={{fontWeight:"600"}}>Continue with Google</Text>
</TouchableOpacity>

<View style={styles.socialRow}>

<TouchableOpacity style={styles.iconBox}>
<AntDesign name="google" size={22} color="#DB4437"/>
</TouchableOpacity>

<TouchableOpacity style={styles.iconBox}>
<FontAwesome name="facebook" size={22} color="#1877F2"/>
</TouchableOpacity>

<TouchableOpacity style={styles.iconBox}>
<FontAwesome name="twitter" size={22} color="#1DA1F2"/>
</TouchableOpacity>

<TouchableOpacity style={styles.iconBox}>
<FontAwesome name="apple" size={22} color="black"/>
</TouchableOpacity>

</View>

<TouchableOpacity
onPress={()=>navigation.navigate("Register")}
>
<Text style={styles.signup}>
Don't have account? Sign Up
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
fontSize:30,
fontWeight:"bold",
marginBottom:30,
textAlign:"center"
},

input:{
borderWidth:1,
borderColor:"#ddd",
padding:14,
borderRadius:10,
marginBottom:15
},

passwordBox:{
flexDirection:"row",
borderWidth:1,
borderColor:"#ddd",
borderRadius:10,
alignItems:"center",
paddingHorizontal:10,
marginBottom:10
},

passwordInput:{
flex:1,
padding:14
},

forgot:{
textAlign:"right",
marginBottom:20,
color:"#4A6CF7"
},

button:{
backgroundColor:"#4A6CF7",
padding:15,
borderRadius:10,
alignItems:"center"
},

buttonText:{
color:"white",
fontWeight:"bold"
},

or:{
textAlign:"center",
marginVertical:18
},

googleBtn:{
borderWidth:1,
borderColor:"#ddd",
padding:14,
borderRadius:10,
alignItems:"center"
},

socialRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:25
},

iconBox:{
borderWidth:1,
borderColor:"#ddd",
padding:12,
borderRadius:10,
width:60,
alignItems:"center"
},

signup:{
textAlign:"center",
marginTop:30,
color:"#4A6CF7"
}

})