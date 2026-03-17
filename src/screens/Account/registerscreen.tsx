// '// import axios from "axios";
// // import React, { useRef, useState } from "react";
// // import {
// //   ActivityIndicator,
// //   Alert,
// //   KeyboardAvoidingView,
// //   Platform,
// //   SafeAreaView,
// //   ScrollView,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   View,
// // } from "react-native";

// // // ඔබේ Laptop එකේ IP ලිපිනය සහ Port එක නිවැරදිදැයි බලන්න
// // const API_URL = "http://192.168.43.254:5000/api/auth";

// // const RegisterScreen = ({ navigation }: any) => {
// //   const [loading, setLoading] = useState(false);
// //   const [showOtpScreen, setShowOtpScreen] = useState(false);
// //   const [emailForOtp, setEmailForOtp] = useState("");

// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     password: "",
// //     confirmPassword: "",
// //   });

// //   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
// //   const otpInputs = useRef<Array<TextInput | null>>([]);

// //   // --- 1. User Registration ---
// //   const handleRegister = async () => {
// //     if (
// //       !form.name ||
// //       !form.email ||
// //       !form.phone ||
// //       !form.password ||
// //       !form.confirmPassword
// //     ) {
// //       if (Platform.OS === "web") alert("Please fill in all details.");
// //       else Alert.alert("Required", "Please fill in all details.");
// //       return;
// //     }

// //     if (form.password !== form.confirmPassword) {
// //       if (Platform.OS === "web") alert("Passwords do not match.");
// //       else Alert.alert("Error", "Passwords do not match.");
// //       return;
// //     }

// //     const cleanEmail = form.email.trim().toLowerCase();
// //     setLoading(true);

// //     try {
// //       await axios.post(`${API_URL}/register`, {
// //         name: form.name.trim(),
// //         email: cleanEmail,
// //         phone: form.phone.trim(),
// //         password: form.password,
// //       });

// //       setEmailForOtp(cleanEmail);
// //       setShowOtpScreen(true);
// //       if (Platform.OS === "web") alert("OTP Sent to your email!");
// //       else
// //         Alert.alert("OTP Sent", "Check your email for the verification code.");
// //     } catch (err: any) {
// //       const errorMsg = err.response?.data?.message || "Registration failed.";
// //       if (Platform.OS === "web") alert(errorMsg);
// //       else Alert.alert("Registration Error", errorMsg);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // --- 2. OTP Verification ---
// //   const handleVerifyOtp = async () => {
// //     const otpCode = otp.join("").trim();

// //     if (otpCode.length < 6) {
// //       if (Platform.OS === "web") alert("Please enter the full 6-digit code.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const response = await axios.post(`${API_URL}/verify-otp`, {
// //         email: emailForOtp.trim().toLowerCase(),
// //         otp: otpCode,
// //       });

// //       console.log("Verify Response:", response.data);

// //       // Web එකේදීAlert.alert වැඩ නොකරන නිසා alert() සහ navigate කෙලින්ම භාවිතා කරයි
// //       if (Platform.OS === "web") {
// //         alert("Account verified! You can login now.");
// //         navigation.navigate("Login");
// //       } else {
// //         Alert.alert("Success", "Account verified! You can login now.", [
// //           { text: "Go to Login", onPress: () => navigation.navigate("Login") },
// //         ]);
// //       }
// //     } catch (err: any) {
// //       const errorMsg = err.response?.data?.message || "Verification failed.";
// //       if (Platform.OS === "web") alert("Invalid OTP: " + errorMsg);
// //       else Alert.alert("Invalid OTP", errorMsg);

// //       setOtp(["", "", "", "", "", ""]);
// //       otpInputs.current[0]?.focus();
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleOtpChange = (value: string, index: number) => {
// //     if (!/^\d?$/.test(value)) return;

// //     const newOtp = [...otp];
// //     newOtp[index] = value;
// //     setOtp(newOtp);

// //     if (value && index < 5) {
// //       otpInputs.current[index + 1]?.focus();
// //     }
// //   };

// //   // --- OTP UI ---
// //   if (showOtpScreen) {
// //     return (
// //       <SafeAreaView
// //         style={{
// //           flex: 1,
// //           backgroundColor: "white",
// //           padding: 20,
// //           justifyContent: "center",
// //         }}
// //       >
// //         <View style={{ maxWidth: 400, alignSelf: "center", width: "100%" }}>
// //           <Text
// //             style={{
// //               fontSize: 30,
// //               fontWeight: "900",
// //               color: "#1e293b",
// //               marginBottom: 8,
// //             }}
// //           >
// //             Verify Account
// //           </Text>
// //           <Text style={{ color: "#94a3b8", marginBottom: 32 }}>
// //             Enter code sent to {emailForOtp}
// //           </Text>

// //           <View
// //             style={{
// //               flexDirection: "row",
// //               justifyContent: "space-between",
// //               marginBottom: 32,
// //             }}
// //           >
// //             {otp.map((digit, index) => (
// //               <TextInput
// //                 key={index}
// //                 ref={(ref) => (otpInputs.current[index] = ref)}
// //                 style={{
// //                   width: "14%",
// //                   height: 56,
// //                   backgroundColor: "#f8fafc",
// //                   borderWidth: 1,
// //                   borderColor: "#e2e8f0",
// //                   borderRadius: 12,
// //                   textAlign: "center",
// //                   fontSize: 20,
// //                   fontWeight: "bold",
// //                 }}
// //                 keyboardType="number-pad"
// //                 maxLength={1}
// //                 value={digit}
// //                 onChangeText={(v) => handleOtpChange(v, index)}
// //                 onKeyPress={({ nativeEvent }) => {
// //                   if (
// //                     nativeEvent.key === "Backspace" &&
// //                     !otp[index] &&
// //                     index > 0
// //                   ) {
// //                     otpInputs.current[index - 1]?.focus();
// //                   }
// //                 }}
// //               />
// //             ))}
// //           </View>

// //           <TouchableOpacity
// //             onPress={handleVerifyOtp}
// //             disabled={loading || otp.some((d) => d === "")}
// //             style={{
// //               padding: 16,
// //               borderRadius: 16,
// //               alignItems: "center",
// //               backgroundColor: otp.some((d) => d === "")
// //                 ? "#cbd5e1"
// //                 : "#2563eb",
// //             }}
// //           >
// //             {loading ? (
// //               <ActivityIndicator color="white" />
// //             ) : (
// //               <Text
// //                 style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
// //               >
// //                 Verify & Continue
// //               </Text>
// //             )}
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             onPress={() => setShowOtpScreen(false)}
// //             style={{ marginTop: 24, alignItems: "center" }}
// //           >
// //             <Text style={{ color: "#2563eb" }}>Back to Registration</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </SafeAreaView>
// //     );
// //   }

// //   // --- Register UI ---
// //   return (
// //     <KeyboardAvoidingView
// //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// //       style={{ flex: 1 }}
// //     >
// //       <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
// //         <ScrollView
// //           contentContainerStyle={{
// //             flexGrow: 1,
// //             justifyContent: "center",
// //             padding: 20,
// //           }}
// //         >
// //           <View style={{ maxWidth: 400, alignSelf: "center", width: "100%" }}>
// //             <Text
// //               style={{
// //                 fontSize: 40,
// //                 fontWeight: "900",
// //                 color: "#1e293b",
// //                 marginBottom: 8,
// //               }}
// //             >
// //               Join Us.
// //             </Text>
// //             <Text
// //               style={{ color: "#94a3b8", marginBottom: 40, fontWeight: "500" }}
// //             >
// //               Create an account to start selling.
// //             </Text>

// //             <View style={{ gap: 16 }}>
// //               <TextInput
// //                 placeholder="Full Name"
// //                 style={{
// //                   backgroundColor: "#f8fafc",
// //                   padding: 16,
// //                   borderRadius: 16,
// //                   borderWidth: 1,
// //                   borderColor: "#f1f5f9",
// //                 }}
// //                 onChangeText={(v) => setForm({ ...form, name: v })}
// //               />
// //               <TextInput
// //                 placeholder="Email"
// //                 autoCapitalize="none"
// //                 keyboardType="email-address"
// //                 style={{
// //                   backgroundColor: "#f8fafc",
// //                   padding: 16,
// //                   borderRadius: 16,
// //                   borderWidth: 1,
// //                   borderColor: "#f1f5f9",
// //                 }}
// //                 onChangeText={(v) => setForm({ ...form, email: v })}
// //               />
// //               <TextInput
// //                 placeholder="Phone"
// //                 keyboardType="phone-pad"
// //                 style={{
// //                   backgroundColor: "#f8fafc",
// //                   padding: 16,
// //                   borderRadius: 16,
// //                   borderWidth: 1,
// //                   borderColor: "#f1f5f9",
// //                 }}
// //                 onChangeText={(v) => setForm({ ...form, phone: v })}
// //               />
// //               <TextInput
// //                 placeholder="Password"
// //                 secureTextEntry
// //                 style={{
// //                   backgroundColor: "#f8fafc",
// //                   padding: 16,
// //                   borderRadius: 16,
// //                   borderWidth: 1,
// //                   borderColor: "#f1f5f9",
// //                 }}
// //                 onChangeText={(v) => setForm({ ...form, password: v })}
// //               />
// //               <TextInput
// //                 placeholder="Confirm Password"
// //                 secureTextEntry
// //                 style={{
// //                   backgroundColor: "#f8fafc",
// //                   padding: 16,
// //                   borderRadius: 16,
// //                   borderWidth: 1,
// //                   borderColor: "#f1f5f9",
// //                 }}
// //                 onChangeText={(v) => setForm({ ...form, confirmPassword: v })}
// //               />

// //               <TouchableOpacity
// //                 onPress={handleRegister}
// //                 disabled={loading}
// //                 style={{
// //                   backgroundColor: "#2563eb",
// //                   padding: 16,
// //                   borderRadius: 16,
// //                   alignItems: "center",
// //                   marginTop: 16,
// //                 }}
// //               >
// //                 {loading ? (
// //                   <ActivityIndicator color="white" />
// //                 ) : (
// //                   <Text
// //                     style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
// //                   >
// //                     Create Account
// //                   </Text>
// //                 )}
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </ScrollView>
// //       </SafeAreaView>
// //     </KeyboardAvoidingView>
// //   );
// // };

// // export default RegisterScreen;

// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const API_URL = "http://192.168.43.254:5000/api/auth";

// const RegisterScreen = ({ navigation, route }: any) => {
//   // Navigation හරහා එන දත්ත (Change Password එකෙන් එනවා නම්)
//   const isResetMode = route.params?.isReset || false;
//   const initialEmail = route.params?.email || "";

//   const [loading, setLoading] = useState(false);
//   const [resendLoading, setResendLoading] = useState(false);
//   const [showOtpScreen, setShowOtpScreen] = useState(isResetMode);
//   const [emailForOtp, setEmailForOtp] = useState(initialEmail);
//   const [timer, setTimer] = useState(60);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const otpInputs = useRef<Array<TextInput | null>>([]);

//   // Timer logic for Resend OTP
//   useEffect(() => {
//     let interval: any;
//     if (showOtpScreen && timer > 0) {
//       interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [showOtpScreen, timer]);

//   // --- 1. User Registration ---
//   const handleRegister = async () => {
//     if (
//       !form.name ||
//       !form.email ||
//       !form.phone ||
//       !form.password ||
//       !form.confirmPassword
//     ) {
//       Alert.alert("Required", "Please fill in all details.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       Alert.alert("Error", "Passwords do not match.");
//       return;
//     }

//     const cleanEmail = form.email.trim().toLowerCase();
//     setLoading(true);

//     try {
//       await axios.post(`${API_URL}/register`, {
//         name: form.name.trim(),
//         email: cleanEmail,
//         phone: form.phone.trim(),
//         password: form.password,
//       });

//       setEmailForOtp(cleanEmail);
//       setShowOtpScreen(true);
//       setTimer(60);
//       Alert.alert("OTP Sent", "Check your email for the verification code.");
//     } catch (err: any) {
//       Alert.alert(
//         "Error",
//         err.response?.data?.message || "Registration failed.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- 2. OTP Verification (Supports Register & Reset) ---
//   const handleVerifyOtp = async () => {
//     const otpCode = otp.join("").trim();
//     if (otpCode.length < 6) return;

//     setLoading(true);
//     try {
//       if (isResetMode) {
//         // Password Reset Mode (Reactivate account)
//         await axios.post(`${API_URL}/reset-password`, {
//           email: emailForOtp,
//           otp: otpCode,
//           newPassword: route.params?.newPassword, // ChangePassword screen එකෙන් එන අලුත් password එක
//         });
//         Alert.alert("Success", "Password reset successfully!");
//       } else {
//         // Normal Registration Mode
//         await axios.post(`${API_URL}/verify-otp`, {
//           email: emailForOtp,
//           otp: otpCode,
//         });
//         Alert.alert("Success", "Account verified! You can login now.");
//       }
//       navigation.navigate("Login");
//     } catch (err: any) {
//       Alert.alert(
//         "Invalid OTP",
//         err.response?.data?.message || "Verification failed.",
//       );
//       setOtp(["", "", "", "", "", ""]);
//       otpInputs.current[0]?.focus();
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- 3. Resend OTP ---
//   const handleResendOtp = async () => {
//     setResendLoading(true);
//     try {
//       await axios.post(`${API_URL}/resend-otp`, { email: emailForOtp });
//       setTimer(60);
//       Alert.alert("Sent", "A new OTP has been sent to your email.");
//     } catch (err: any) {
//       Alert.alert("Error", "Failed to resend OTP.");
//     } finally {
//       setResendLoading(false);
//     }
//   };

//   const handleOtpChange = (value: string, index: number) => {
//     if (!/^\d?$/.test(value)) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     if (value && index < 5) otpInputs.current[index + 1]?.focus();
//   };

//   // --- OTP UI ---
//   if (showOtpScreen) {
//     return (
//       <SafeAreaView
//         style={{
//           flex: 1,
//           backgroundColor: "white",
//           justifyContent: "center",
//           padding: 20,
//         }}
//       >
//         <View style={{ maxWidth: 400, alignSelf: "center", width: "100%" }}>
//           <Text
//             style={{
//               fontSize: 30,
//               fontWeight: "900",
//               color: "#1e293b",
//               marginBottom: 8,
//             }}
//           >
//             {isResetMode ? "Reset Password" : "Verify Account"}
//           </Text>
//           <Text style={{ color: "#94a3b8", marginBottom: 32 }}>
//             Enter code sent to {emailForOtp}
//           </Text>

//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               marginBottom: 32,
//             }}
//           >
//             {otp.map((digit, index) => (
//               <TextInput
//                 key={index}
//                 ref={(ref) => (otpInputs.current[index] = ref)}
//                 style={{
//                   width: "14%",
//                   height: 56,
//                   backgroundColor: "#f8fafc",
//                   borderWidth: 1,
//                   borderColor: "#e2e8f0",
//                   borderRadius: 12,
//                   textAlign: "center",
//                   fontSize: 20,
//                   fontWeight: "bold",
//                 }}
//                 keyboardType="number-pad"
//                 maxLength={1}
//                 value={digit}
//                 onChangeText={(v) => handleOtpChange(v, index)}
//                 onKeyPress={({ nativeEvent }) => {
//                   if (
//                     nativeEvent.key === "Backspace" &&
//                     !otp[index] &&
//                     index > 0
//                   ) {
//                     otpInputs.current[index - 1]?.focus();
//                   }
//                 }}
//               />
//             ))}
//           </View>

//           <TouchableOpacity
//             onPress={handleVerifyOtp}
//             disabled={loading || otp.some((d) => d === "")}
//             style={{
//               padding: 16,
//               borderRadius: 16,
//               alignItems: "center",
//               backgroundColor: otp.some((d) => d === "")
//                 ? "#cbd5e1"
//                 : "#2563eb",
//             }}
//           >
//             {loading ? (
//               <ActivityIndicator color="white" />
//             ) : (
//               <Text
//                 style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
//               >
//                 Verify & Continue
//               </Text>
//             )}
//           </TouchableOpacity>

//           <View style={{ marginTop: 24, alignItems: "center" }}>
//             <TouchableOpacity
//               disabled={timer > 0 || resendLoading}
//               onPress={handleResendOtp}
//             >
//               <Text
//                 style={{
//                   color: timer > 0 ? "#94a3b8" : "#2563eb",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {timer > 0 ? `Resend Code in ${timer}s` : "Resend New OTP"}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   // --- Register UI ---
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
//         <ScrollView
//           contentContainerStyle={{
//             flexGrow: 1,
//             justifyContent: "center",
//             padding: 20,
//           }}
//         >
//           <View style={{ maxWidth: 400, alignSelf: "center", width: "100%" }}>
//             <Text
//               style={{
//                 fontSize: 40,
//                 fontWeight: "900",
//                 color: "#1e293b",
//                 marginBottom: 8,
//               }}
//             >
//               Join Us.
//             </Text>
//             <Text style={{ color: "#94a3b8", marginBottom: 40 }}>
//               Create an account to start selling.
//             </Text>

//             <View style={{ gap: 16 }}>
//               <TextInput
//                 placeholder="Full Name"
//                 style={styles.input}
//                 onChangeText={(v) => setForm({ ...form, name: v })}
//               />
//               <TextInput
//                 placeholder="Email"
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 style={styles.input}
//                 onChangeText={(v) => setForm({ ...form, email: v })}
//               />
//               <TextInput
//                 placeholder="Phone"
//                 keyboardType="phone-pad"
//                 style={styles.input}
//                 onChangeText={(v) => setForm({ ...form, phone: v })}
//               />
//               <TextInput
//                 placeholder="Password"
//                 secureTextEntry
//                 style={styles.input}
//                 onChangeText={(v) => setForm({ ...form, password: v })}
//               />
//               <TextInput
//                 placeholder="Confirm Password"
//                 secureTextEntry
//                 style={styles.input}
//                 onChangeText={(v) => setForm({ ...form, confirmPassword: v })}
//               />

//               <TouchableOpacity
//                 onPress={handleRegister}
//                 disabled={loading}
//                 style={styles.button}
//               >
//                 {loading ? (
//                   <ActivityIndicator color="white" />
//                 ) : (
//                   <Text
//                     style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
//                   >
//                     Create Account
//                   </Text>
//                 )}
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = {
//   input: {
//     backgroundColor: "#f8fafc",
//     padding: 16,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: "#f1f5f9",
//   },
//   button: {
//     backgroundColor: "#2563eb",
//     padding: 16,
//     borderRadius: 16,
//     alignItems: "center",
//     marginTop: 16,
//   },
// };

// export default RegisterScreen;

import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const API_URL = "http://192.168.43.254:5000/api/auth";

const RegisterScreen = ({ navigation, route }: any) => {
  const isResetMode = route.params?.isReset || false;
  const initialEmail = route.params?.email || "";

  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [showOtpScreen, setShowOtpScreen] = useState(isResetMode);
  const [emailForOtp, setEmailForOtp] = useState(initialEmail);
  const [timer, setTimer] = useState(60);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInputs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    let interval: any;
    if (showOtpScreen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showOtpScreen, timer]);

  const handleRegister = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      Alert.alert("Required", "කරුණාකර සියලු විස්තර ඇතුළත් කරන්න.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords ගැලපෙන්නේ නැත.");
      return;
    }

    const cleanEmail = form.email.trim().toLowerCase();
    setLoading(true);

    try {
      await axios.post(`${API_URL}/register`, {
        name: form.name.trim(),
        email: cleanEmail,
        phone: form.phone.trim(),
        password: form.password,
      });

      setEmailForOtp(cleanEmail);
      setShowOtpScreen(true);
      setTimer(60);
      Alert.alert(
        "OTP Sent",
        "ඔබේ Email ලිපිනයට ලැබුණු OTP අංකය ඇතුළත් කරන්න.",
      );
    } catch (err: any) {
      Alert.alert(
        "Error",
        err.response?.data?.message || "Registration failed.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join("").trim();
    if (otpCode.length < 6) return;

    setLoading(true);
    try {
      if (isResetMode) {
        await axios.post(`${API_URL}/reset-password`, {
          email: emailForOtp,
          otp: otpCode,
          newPassword: route.params?.newPassword,
        });
        Alert.alert("Success", "Password එක සාර්ථකව වෙනස් කළා!");
      } else {
        await axios.post(`${API_URL}/verify-otp`, {
          email: emailForOtp,
          otp: otpCode,
        });
        Alert.alert("Success", "ගිණුම තහවුරු කළා! දැන් ඔබට Login විය හැක.");
      }
      navigation.navigate("Login");
    } catch (err: any) {
      Alert.alert("Invalid OTP", "OTP අංකය වැරදියි. නැවත උත්සාහ කරන්න.");
      setOtp(["", "", "", "", "", ""]);
      otpInputs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    try {
      await axios.post(`${API_URL}/resend-otp`, { email: emailForOtp });
      setTimer(60);
      Alert.alert("Sent", "අලුත් OTP අංකයක් ඔබගේ Email වෙත එවනු ලැබුවා.");
    } catch (err: any) {
      Alert.alert("Error", "OTP එවීමට නොහැකි වුණා.");
    } finally {
      setResendLoading(false);
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) otpInputs.current[index + 1]?.focus();
  };

  // --- OTP Verification UI ---
  if (showOtpScreen) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.otpCard}>
          <View style={styles.logoBox}>
            <Feather name="shield" size={32} color="white" />
          </View>
          <Text style={styles.title}>
            {isResetMode ? "Reset Password" : "Verify Account"}
          </Text>
          <Text style={styles.subtitle}>Enter code sent to {emailForOtp}</Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (otpInputs.current[index] = ref)}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                placeholder="-"
                placeholderTextColor="#334155"
                onChangeText={(v) => handleOtpChange(v, index)}
                onKeyPress={({ nativeEvent }) => {
                  if (
                    nativeEvent.key === "Backspace" &&
                    !otp[index] &&
                    index > 0
                  ) {
                    otpInputs.current[index - 1]?.focus();
                  }
                }}
              />
            ))}
          </View>

          <TouchableOpacity
            onPress={handleVerifyOtp}
            disabled={loading || otp.some((d) => d === "")}
          >
            <LinearGradient
              colors={["#10b981", "#059669"]}
              style={[
                styles.button,
                otp.some((d) => d === "") && { opacity: 0.5 },
              ]}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.buttonText}>VERIFY & CONTINUE</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={timer > 0 || resendLoading}
            onPress={handleResendOtp}
            style={{ marginTop: 25 }}
          >
            <Text
              style={{
                color: timer > 0 ? "#64748b" : "#10b981",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {timer > 0 ? `Resend Code in ${timer}s` : "RESEND NEW OTP"}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // --- Main Register UI ---
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.card}>
            <View style={styles.logoContainer}>
              <View style={styles.logoBox}>
                <Text style={styles.logoText}>L</Text>
              </View>
              <Text style={styles.title}>Join Us.</Text>
              <Text style={styles.subtitle}>
                Create an account to start selling
              </Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>FULL NAME</Text>
              <TextInput
                style={styles.input}
                placeholder="John Doe"
                placeholderTextColor="#64748b"
                onChangeText={(v) => setForm({ ...form, name: v })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>EMAIL ADDRESS</Text>
              <TextInput
                style={styles.input}
                placeholder="example@mail.com"
                autoCapitalize="none"
                keyboardType="email-address"
                placeholderTextColor="#64748b"
                onChangeText={(v) => setForm({ ...form, email: v })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>PHONE NUMBER</Text>
              <TextInput
                style={styles.input}
                placeholder="+94 7X XXX XXXX"
                keyboardType="phone-pad"
                placeholderTextColor="#64748b"
                onChangeText={(v) => setForm({ ...form, phone: v })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>PASSWORD</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#64748b"
                onChangeText={(v) => setForm({ ...form, password: v })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>CONFIRM PASSWORD</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#64748b"
                onChangeText={(v) => setForm({ ...form, confirmPassword: v })}
              />
            </View>

            <TouchableOpacity
              onPress={handleRegister}
              disabled={loading}
              style={{ marginTop: 10 }}
            >
              <LinearGradient
                colors={["#10b981", "#059669"]}
                style={styles.button}
              >
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                )}
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.footer}
            >
              <Text style={styles.footerText}>
                Already have an account?{" "}
                <Text style={styles.link}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  scrollContent: { flexGrow: 1, justifyContent: "center", padding: 24 },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 24,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  otpCard: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    alignItems: "center",
  },
  logoContainer: { alignItems: "center", marginBottom: 30 },
  logoBox: {
    width: 64,
    height: 64,
    backgroundColor: "#10b981",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  logoText: { color: "white", fontSize: 32, fontWeight: "900" },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 4,
    textAlign: "center",
    marginBottom: 20,
  },
  inputGroup: { marginBottom: 16 },
  label: {
    color: "#cbd5e1",
    fontSize: 10,
    fontWeight: "800",
    marginBottom: 8,
    marginLeft: 4,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 16,
    padding: 16,
    color: "white",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    fontSize: 15,
  },
  button: {
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 1,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
    marginTop: 10,
  },
  otpInput: {
    width: "14%",
    height: 60,
    backgroundColor: "#18181b",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#10b981",
  },
  footer: { marginTop: 25, alignItems: "center" },
  footerText: { color: "#64748b", fontSize: 14 },
  link: { color: "#10b981", fontWeight: "900" },
});

export default RegisterScreen;
