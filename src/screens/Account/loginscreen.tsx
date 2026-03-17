// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import React, { useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Platform,
//   SafeAreaView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const API_URL = "http://192.168.43.254:5000/api/auth";

// const LoginScreen = ({ navigation }: any) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     const cleanEmail = email.trim().toLowerCase();

//     if (!cleanEmail || !password) {
//       if (Platform.OS === "web") alert("Please fill all fields");
//       else Alert.alert("Error", "Please fill all fields");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post(`${API_URL}/login`, {
//         email: cleanEmail,
//         password,
//       });

//       // User දත්ත සහ Token එක Phone එකේ Save කිරීම
//       await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
//       if (res.data.token) {
//         await AsyncStorage.setItem("token", res.data.token);
//       }

//       // Navigation stack එක Reset කර කෙලින්ම AccountMain එකට යෑම
//       navigation.reset({
//         index: 0,
//         routes: [{ name: "AccountMain" }],
//       });
//     } catch (err: any) {
//       const errorMsg =
//         err.response?.data?.message || "Invalid email or password";
//       if (Platform.OS === "web") alert(errorMsg);
//       else Alert.alert("Login Failed", errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: "white",
//         padding: 32,
//         justifyContent: "center",
//       }}
//     >
//       <View style={{ maxWidth: 400, alignSelf: "center", width: "100%" }}>
//         <Text
//           style={{
//             fontSize: 40,
//             fontWeight: "900",
//             color: "#1e293b",
//             marginBottom: 8,
//           }}
//         >
//           Welcome Back.
//         </Text>
//         <Text style={{ color: "#94a3b8", marginBottom: 40, fontWeight: "500" }}>
//           Log in to manage your listings.
//         </Text>

//         <View style={{ gap: 16 }}>
//           <TextInput
//             placeholder="Email Address"
//             style={{
//               backgroundColor: "#f8fafc",
//               padding: 16,
//               borderRadius: 16,
//               borderWidth: 1,
//               borderColor: "#f1f5f9",
//             }}
//             onChangeText={setEmail}
//             autoCapitalize="none"
//             keyboardType="email-address"
//           />
//           <TextInput
//             placeholder="Password"
//             secureTextEntry
//             style={{
//               backgroundColor: "#f8fafc",
//               padding: 16,
//               borderRadius: 16,
//               borderWidth: 1,
//               borderColor: "#f1f5f9",
//             }}
//             onChangeText={setPassword}
//           />

//           <TouchableOpacity
//             onPress={handleLogin}
//             disabled={loading}
//             style={{
//               backgroundColor: "#2563eb",
//               padding: 16,
//               borderRadius: 16,
//               alignItems: "center",
//               marginTop: 16,
//             }}
//           >
//             {loading ? (
//               <ActivityIndicator color="white" />
//             ) : (
//               <Text
//                 style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
//               >
//                 Sign In
//               </Text>
//             )}
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity
//           onPress={() => navigation.navigate("Register")}
//           style={{ marginTop: 32, alignItems: "center" }}
//         >
//           <Text style={{ color: "#64748b", fontWeight: "500" }}>
//             New here?{" "}
//             <Text style={{ color: "#2563eb", fontWeight: "bold" }}>
//               Create Account
//             </Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;



import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useForm, Controller } from "react-hook-form";

// ඔබේ Backend URL එක
const API_URL = "http://192.168.43.254:5000/api/auth";

const LoginScreen = ({ navigation }: any) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // ✅ Web එකේ වගේම Submit Logic එක
  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post(`${API_URL}/login`, data);

      if (res.data.token && res.data.user) {
        // දත්ත Save කිරීම
        await AsyncStorage.setItem("token", res.data.token);
        await AsyncStorage.setItem("user", JSON.stringify(res.data.user));

        // Navigation Reset කර ඇතුළට යෑම
        navigation.reset({
          index: 0,
          routes: [{ name: "AccountMain" }],
        });
      }
    } catch (err: any) {
      const status = err.response?.status;
      const message = err.response?.data?.message || "";

      // ✅ Web එකේ තිබුණු විදිහටම Error Mapping
      if (status === 404 || message.toLowerCase().includes("not found")) {
        setError("email", {
          message: "Account එකක් හමු වුණේ නැහැ. කරුණාකර මුලින්ම Register වෙන්න.",
        });
      } else if (status === 403) {
        setError("email", {
          message: "කරුණාකර ඔබගේ Email එක මුලින්ම Verify කරන්න.",
        });
      } else {
        setError("password", {
          message: "Email හෝ Password වැරදියි. නැවත උත්සාහ කරන්න.",
        });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            
            {/* 🟢 Logo & Title Section */}
            <View style={styles.logoContainer}>
              <View style={styles.logoBox}>
                <Text style={styles.logoText}>L</Text>
              </View>
              <Text style={styles.title}>Welcome Back</Text>
              <Text style={styles.subtitle}>Login to your account</Text>
            </View>

            {/* 📧 Email Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>EMAIL ADDRESS</Text>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email එක අවශ්‍යයි",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "වලංගු Email ලිපිනයක් ඇතුළත් කරන්න",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[styles.input, errors.email && styles.inputError]}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="example@mail.com"
                    placeholderTextColor="#64748b"
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />
                )}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email.message}</Text>
              )}
            </View>

            {/* 🔑 Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>PASSWORD</Text>
              <Controller
                control={control}
                name="password"
                rules={{ required: "Password එක අවශ්‍යයි" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[styles.input, errors.password && styles.inputError]}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                    placeholder="••••••••"
                    placeholderTextColor="#64748b"
                  />
                )}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}
            </View>

            {/* Forgot Password */}
            <TouchableOpacity 
              onPress={() => navigation.navigate("ForgotPassword")}
              style={styles.forgotBtn}
            >
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            {/* 🚀 Login Button (Gradient) */}
            <TouchableOpacity 
              onPress={handleSubmit(onSubmit)} 
              disabled={isSubmitting}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#10b981", "#059669"]}
                style={[styles.button, isSubmitting && { opacity: 0.6 }]}
              >
                {isSubmitting ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.buttonText}>LOGIN TO ACCOUNT</Text>
                )}
              </LinearGradient>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Register Footer */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={styles.footer}
            >
              <Text style={styles.footerText}>
                තවමත් Account එකක් නැද්ද?{" "}
                <Text style={styles.registerLink}>Register Here</Text>
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 24,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    // Shadow for iOS
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    // Shadow for Android
    elevation: 5,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoBox: {
    width: 64,
    height: 64,
    backgroundColor: "#10b981",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  logoText: {
    color: "white",
    fontSize: 32,
    fontWeight: "900",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#fff",
    letterSpacing: -0.5,
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 4,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: "#cbd5e1",
    fontSize: 11,
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
    fontSize: 16,
  },
  inputError: {
    borderColor: "#ef4444",
  },
  errorText: {
    color: "#f87171",
    fontSize: 12,
    marginTop: 6,
    marginLeft: 4,
    fontWeight: "500",
  },
  forgotBtn: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotText: {
    color: "#10b981",
    fontSize: 13,
    fontWeight: "700",
  },
  button: {
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  dividerText: {
    color: '#64748b',
    fontSize: 10,
    fontWeight: '700',
    marginHorizontal: 10,
  },
  footer: {
    alignItems: "center",
  },
  footerText: {
    color: "#94a3b8",
    fontSize: 14,
  },
  registerLink: {
    color: "#10b981",
    fontWeight: "800",
  },
});

export default LoginScreen;