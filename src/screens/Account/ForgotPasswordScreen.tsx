// import { Feather } from "@expo/vector-icons";
// import axios from "axios";
// import { LinearGradient } from "expo-linear-gradient";
// import React, { useState } from "react";
// import {
//     ActivityIndicator,
//     Alert,
//     KeyboardAvoidingView,
//     Platform,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const API_URL = "http://192.168.43.254:5000/api/auth";

// const ForgotPasswordScreen = ({ navigation }: any) => {
//   const [step, setStep] = useState(1); // 1: Send OTP, 2: Reset Password
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   // --- Step 1: Request OTP ---
//   const handleSendOtp = async () => {
//     if (!email) {
//       Alert.alert("Error", "Please enter your email address.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post(`${API_URL}/forgot-password`, { email: email.trim() });
//       Alert.alert(
//         "OTP Sent",
//         "Please check your email for the verification code.",
//       );
//       setStep(2);
//     } catch (err: any) {
//       Alert.alert(
//         "Error",
//         err.response?.data?.message || "Failed to send OTP.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- Step 2: Reset Password ---
//   const handleResetPassword = async () => {
//     if (!otp || !newPassword) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post(`${API_URL}/reset-password`, {
//         email: email.trim(),
//         otp: otp.trim(),
//         newPassword: newPassword,
//       });
//       Alert.alert(
//         "Success",
//         "Password changed successfully! You can login now.",
//       );
//       navigation.navigate("Login");
//     } catch (err: any) {
//       Alert.alert("Error", err.response?.data?.message || "Reset failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={{ flex: 1 }}
//       >
//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Back Button */}
//           <TouchableOpacity
//             onPress={() => (step === 2 ? setStep(1) : navigation.goBack())}
//             style={styles.backButton}
//           >
//             <Feather name="arrow-left" size={24} color="#10b981" />
//           </TouchableOpacity>

//           <View style={styles.card}>
//             {/* Header Icon */}
//             <View style={styles.iconCircle}>
//               <Feather
//                 name={step === 1 ? "mail" : "lock"}
//                 size={32}
//                 color="#10b981"
//               />
//             </View>

//             <Text style={styles.title}>
//               {step === 1 ? "FORGOT PASSWORD?" : "RESET PASSWORD"}
//             </Text>
//             <Text style={styles.subtitle}>
//               {step === 1
//                 ? "Enter your registered email address to receive an OTP code."
//                 : `Enter the code we sent to ${email} and set your new password.`}
//             </Text>

//             {/* Step 1: Email Input */}
//             {step === 1 && (
//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>EMAIL ADDRESS</Text>
//                 <View style={styles.inputWrapper}>
//                   <Feather
//                     name="mail"
//                     size={20}
//                     color="#10b981"
//                     style={styles.inputIcon}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="example@mail.com"
//                     placeholderTextColor="#64748b"
//                     keyboardType="email-address"
//                     autoCapitalize="none"
//                     value={email}
//                     onChangeText={setEmail}
//                   />
//                 </View>
//               </View>
//             )}

//             {/* Step 2: OTP & New Password */}
//             {step === 2 && (
//               <View style={{ gap: 20 }}>
//                 <View style={styles.inputContainer}>
//                   <Text style={styles.label}>OTP CODE</Text>
//                   <View style={styles.inputWrapper}>
//                     <Feather
//                       name="key"
//                       size={20}
//                       color="#10b981"
//                       style={styles.inputIcon}
//                     />
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Enter 6-digit code"
//                       placeholderTextColor="#64748b"
//                       keyboardType="number-pad"
//                       maxLength={6}
//                       value={otp}
//                       onChangeText={setOtp}
//                     />
//                   </View>
//                 </View>

//                 <View style={styles.inputContainer}>
//                   <Text style={styles.label}>NEW PASSWORD</Text>
//                   <View style={styles.inputWrapper}>
//                     <Feather
//                       name="shield"
//                       size={20}
//                       color="#10b981"
//                       style={styles.inputIcon}
//                     />
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Min. 6 characters"
//                       placeholderTextColor="#64748b"
//                       secureTextEntry
//                       value={newPassword}
//                       onChangeText={setNewPassword}
//                     />
//                   </View>
//                 </View>
//               </View>
//             )}

//             {/* Action Button */}
//             <TouchableOpacity
//               onPress={step === 1 ? handleSendOtp : handleResetPassword}
//               disabled={loading}
//               style={{ marginTop: 30 }}
//             >
//               <LinearGradient
//                 colors={["#10b981", "#059669"]}
//                 style={styles.button}
//               >
//                 {loading ? (
//                   <ActivityIndicator color="white" />
//                 ) : (
//                   <Text style={styles.buttonText}>
//                     {step === 1 ? "SEND OTP CODE" : "UPDATE PASSWORD"}
//                   </Text>
//                 )}
//               </LinearGradient>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#000" },
//   scrollContent: { flexGrow: 1, padding: 24, justifyContent: "center" },
//   backButton: {
//     position: "absolute",
//     top: 20,
//     left: 20,
//     zIndex: 10,
//     padding: 10,
//     backgroundColor: "rgba(255,255,255,0.05)",
//     borderRadius: 12,
//   },
//   card: {
//     backgroundColor: "rgba(255, 255, 255, 0.05)",
//     padding: 30,
//     borderRadius: 32,
//     borderWidth: 1,
//     borderColor: "rgba(255, 255, 255, 0.1)",
//     alignItems: "center",
//   },
//   iconCircle: {
//     width: 80,
//     height: 80,
//     backgroundColor: "rgba(16, 185, 129, 0.1)",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: "rgba(16, 185, 129, 0.2)",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "900",
//     color: "#fff",
//     textAlign: "center",
//     letterSpacing: -0.5,
//   },
//   subtitle: {
//     color: "#94a3b8",
//     fontSize: 14,
//     textAlign: "center",
//     marginTop: 8,
//     lineHeight: 20,
//     marginBottom: 30,
//   },
//   inputContainer: { width: "100%" },
//   label: {
//     color: "#cbd5e1",
//     fontSize: 10,
//     fontWeight: "800",
//     marginBottom: 10,
//     marginLeft: 4,
//     letterSpacing: 1,
//   },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.03)",
//     borderRadius: 18,
//     borderWidth: 1,
//     borderColor: "rgba(255, 255, 255, 0.1)",
//     paddingHorizontal: 16,
//   },
//   inputIcon: { marginRight: 12 },
//   input: {
//     flex: 1,
//     paddingVertical: 16,
//     color: "white",
//     fontSize: 16,
//   },
//   button: {
//     padding: 18,
//     borderRadius: 18,
//     alignItems: "center",
//     width: "100%",
//     minWidth: 250,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "900",
//     fontSize: 16,
//     letterSpacing: 1,
//   },
// });

// export default ForgotPasswordScreen;

import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const API_URL = "http://192.168.43.254:5000/api/auth";

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ Password එක පෙන්වීමට/සැඟවීමට

  const handleSendOtp = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API_URL}/forgot-password`, { email: email.trim() });
      Alert.alert(
        "OTP Sent",
        "Please check your email for the verification code.",
      );
      setStep(2);
    } catch (err: any) {
      Alert.alert(
        "Error",
        err.response?.data?.message || "Failed to send OTP.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!otp || !newPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API_URL}/reset-password`, {
        email: email.trim(),
        otp: otp.trim(),
        newPassword: newPassword,
      });
      Alert.alert("Success", "Password changed successfully!");
      navigation.navigate("Login");
    } catch (err: any) {
      Alert.alert("Error", err.response?.data?.message || "Reset failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            onPress={() => (step === 2 ? setStep(1) : navigation.goBack())}
            style={styles.backButton}
          >
            <Feather name="arrow-left" size={24} color="#10b981" />
          </TouchableOpacity>

          <View style={styles.card}>
            <View style={styles.iconCircle}>
              <Feather
                name={step === 1 ? "mail" : "lock"}
                size={32}
                color="#10b981"
              />
            </View>

            <Text style={styles.title}>
              {step === 1 ? "FORGOT PASSWORD?" : "RESET PASSWORD"}
            </Text>
            <Text style={styles.subtitle}>
              {step === 1
                ? "Enter your email to receive an OTP code."
                : `Enter the code sent to ${email}`}
            </Text>

            {step === 1 ? (
              <View style={styles.inputContainer}>
                <Text style={styles.label}>EMAIL ADDRESS</Text>
                <View style={styles.inputWrapper}>
                  <Feather
                    name="mail"
                    size={20}
                    color="#10b981"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="example@mail.com"
                    placeholderTextColor="#64748b"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
              </View>
            ) : (
              <View style={{ gap: 20, width: "100%" }}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>OTP CODE</Text>
                  <View style={styles.inputWrapper}>
                    <Feather
                      name="key"
                      size={20}
                      color="#10b981"
                      style={styles.inputIcon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Enter 6-digit code"
                      placeholderTextColor="#64748b"
                      keyboardType="number-pad"
                      maxLength={6}
                      value={otp}
                      onChangeText={setOtp}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>NEW PASSWORD</Text>
                  <View style={styles.inputWrapper}>
                    <Feather
                      name="shield"
                      size={20}
                      color="#10b981"
                      style={styles.inputIcon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Min. 6 characters"
                      placeholderTextColor="#64748b"
                      secureTextEntry={!showPassword} // ✅ Toggle hide/show
                      value={newPassword}
                      onChangeText={setNewPassword}
                    />
                    {/* ✅ Eye Icon Button */}
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      style={styles.eyeIcon}
                    >
                      <Feather
                        name={showPassword ? "eye" : "eye-off"}
                        size={20}
                        color="#64748b"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            <TouchableOpacity
              onPress={step === 1 ? handleSendOtp : handleResetPassword}
              disabled={loading}
              style={{ width: "100%", marginTop: 30 }}
            >
              <LinearGradient
                colors={["#10b981", "#059669"]}
                style={styles.button}
              >
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.buttonText}>
                    {step === 1 ? "SEND OTP CODE" : "UPDATE PASSWORD"}
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  scrollContent: { flexGrow: 1, padding: 24, justifyContent: "center" },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 12,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 30,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
  },
  iconCircle: {
    width: 80,
    height: 80,
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(16, 185, 129, 0.2)",
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 30,
  },
  inputContainer: { width: "100%" },
  label: {
    color: "#cbd5e1",
    fontSize: 10,
    fontWeight: "800",
    marginBottom: 10,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 16,
  },
  inputIcon: { marginRight: 12 },
  input: { flex: 1, paddingVertical: 16, color: "white", fontSize: 16 },
  eyeIcon: { padding: 8 }, // Eye icon එකට ඉඩ ලබා දීම
  button: {
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    width: "100%",
  },
  buttonText: { color: "white", fontWeight: "900", fontSize: 16 },
});

export default ForgotPasswordScreen;
