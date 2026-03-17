// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { ArrowLeft } from "lucide-react-native";
// import React, { useEffect, useState } from "react";
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

// // ඔබේ IP ලිපිනය මෙතන නිවැරදිව ඇතුළත් කර ඇත
// const API_URL = "http://192.168.43.254:5000/api/auth";

// const ChangePasswordScreen = ({ navigation }: any) => {
//   const [loading, setLoading] = useState(false);
//   const [step, setStep] = useState(1); // 1: Send OTP, 2: Reset with OTP
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   useEffect(() => {
//     const getUserEmail = async () => {
//       try {
//         const userStr = await AsyncStorage.getItem("user");
//         if (userStr) {
//           const user = JSON.parse(userStr);
//           setEmail(user.email);
//         }
//       } catch (e) {
//         console.error("Failed to load user email");
//       }
//     };
//     getUserEmail();
//   }, []);

//   // පියවර 1: OTP එකක් ඊමේල් එකට යැවීම
//   const handleRequestOTP = async () => {
//     if (!email) return Alert.alert("Error", "Email not found");

//     setLoading(true);
//     try {
//       await axios.post(`${API_URL}/forgot-password`, { email });
//       Alert.alert("Success", "A verification OTP has been sent to your email.");
//       setStep(2); // OTP ඇතුළත් කරන පියවරට මාරු වීම
//     } catch (err: any) {
//       Alert.alert("Error", err.response?.data?.message || "Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // පියවර 2: OTP සහ නව මුරපදය මගින් Update කිරීම
//   const handleUpdatePassword = async () => {
//     if (!otp || !newPassword || !confirmPassword) {
//       return Alert.alert("Error", "Please fill all fields");
//     }
//     if (newPassword !== confirmPassword) {
//       return Alert.alert("Error", "Passwords do not match");
//     }
//     if (newPassword.length < 6) {
//       return Alert.alert("Error", "Password must be at least 6 characters");
//     }

//     setLoading(true);
//     try {
//       // මෙහිදී ඔබගේ Backend එකේ reset-password route එක භාවිතා වේ
//       await axios.post(`${API_URL}/reset-password`, {
//         email,
//         otp,
//         newPassword,
//       });

//       Alert.alert("Success", "Your password has been updated successfully!", [
//         { text: "OK", onPress: () => navigation.goBack() },
//       ]);
//     } catch (err: any) {
//       Alert.alert("Error", err.response?.data?.message || "Reset failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fafc" }}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={{ flex: 1 }}
//       >
//         <ScrollView contentContainerStyle={{ padding: 24 }}>
//           {/* Header */}
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             style={{ marginBottom: 20 }}
//           >
//             <ArrowLeft color="#1e293b" size={24} />
//           </TouchableOpacity>

//           <Text
//             style={{
//               fontSize: 28,
//               fontWeight: "bold",
//               color: "#1e293b",
//               marginBottom: 8,
//             }}
//           >
//             {step === 1 ? "Verify Identity" : "New Password"}
//           </Text>
//           <Text style={{ color: "#64748b", marginBottom: 32, fontSize: 16 }}>
//             {step === 1
//               ? `We will send an OTP to ${email} to verify it's you.`
//               : "Enter the OTP sent to your email and set your new password."}
//           </Text>

//           {step === 1 ? (
//             /* STEP 1: Request OTP Button */
//             <TouchableOpacity
//               onPress={handleRequestOTP}
//               disabled={loading}
//               style={{
//                 backgroundColor: "#2563eb",
//                 padding: 18,
//                 borderRadius: 16,
//                 alignItems: "center",
//                 marginTop: 10,
//               }}
//             >
//               {loading ? (
//                 <ActivityIndicator color="white" />
//               ) : (
//                 <Text
//                   style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
//                 >
//                   Send Verification Code
//                 </Text>
//               )}
//             </TouchableOpacity>
//           ) : (
//             /* STEP 2: Input OTP and New Password */
//             <View>
//               <View style={{ marginBottom: 16 }}>
//                 <Text style={styles.label}>Verification Code (OTP)</Text>
//                 <TextInput
//                   placeholder="Enter 6-digit code"
//                   value={otp}
//                   onChangeText={setOtp}
//                   keyboardType="number-pad"
//                   style={styles.input}
//                 />
//               </View>

//               <View style={{ marginBottom: 16 }}>
//                 <Text style={styles.label}>New Password</Text>
//                 <TextInput
//                   placeholder="••••••••"
//                   secureTextEntry
//                   value={newPassword}
//                   onChangeText={setNewPassword}
//                   style={styles.input}
//                 />
//               </View>

//               <View style={{ marginBottom: 24 }}>
//                 <Text style={styles.label}>Confirm New Password</Text>
//                 <TextInput
//                   placeholder="••••••••"
//                   secureTextEntry
//                   value={confirmPassword}
//                   onChangeText={setConfirmPassword}
//                   style={styles.input}
//                 />
//               </View>

//               <TouchableOpacity
//                 onPress={handleUpdatePassword}
//                 disabled={loading}
//                 style={{
//                   backgroundColor: "#10b981", // Success Green color
//                   padding: 18,
//                   borderRadius: 16,
//                   alignItems: "center",
//                 }}
//               >
//                 {loading ? (
//                   <ActivityIndicator color="white" />
//                 ) : (
//                   <Text
//                     style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
//                   >
//                     Update Password Now
//                   </Text>
//                 )}
//               </TouchableOpacity>

//               <TouchableOpacity
//                 onPress={() => setStep(1)}
//                 style={{ marginTop: 20, alignItems: "center" }}
//               >
//                 <Text style={{ color: "#64748b" }}>
//                   Didn't get the code? Resend
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = {
//   label: {
//     color: "#64748b",
//     fontWeight: "bold" as "bold",
//     fontSize: 12,
//     marginBottom: 8,
//     textTransform: "uppercase" as "uppercase",
//   },
//   input: {
//     backgroundColor: "white",
//     padding: 16,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: "#e2e8f0",
//     fontSize: 16,
//     color: "#1e293b",
//   },
// };

// export default ChangePasswordScreen;

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// ── Theme colors (consistent with your ProfileScreen) ──
const COLORS = {
  background: "#0f172a", // slate-950
  surface: "#1e293b", // slate-800
  border: "#334155", // slate-700
  accent: "#10b981", // emerald-500
  accentDark: "#059669", // emerald-600
  textPrimary: "#f1f5f9", // slate-100
  textSecondary: "#94a3b8", // slate-400
  inputBg: "#1e293b",
  inputBorder: "#334155",
};

const API_URL = "http://192.168.43.254:5000/api/auth";

type NavigationProp = {
  goBack: () => void;
};

interface Props {
  navigation: NavigationProp;
}

const ChangePasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Resend OTP cooldown
  const [canResend, setCanResend] = useState(true);
  const [resendCountdown, setResendCountdown] = useState(0);
  const countdownTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loadUserEmail = async () => {
      try {
        const userJson = await AsyncStorage.getItem("user");
        if (userJson) {
          const user = JSON.parse(userJson);
          setEmail(user.email || "");
        }
      } catch (error) {
        console.error("Error loading user email:", error);
      }
    };
    loadUserEmail();
  }, []);

  // Countdown logic
  useEffect(() => {
    if (resendCountdown > 0) {
      countdownTimer.current = setTimeout(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => {
      if (countdownTimer.current) clearTimeout(countdownTimer.current);
    };
  }, [resendCountdown]);

  const startResendTimer = () => {
    setCanResend(false);
    setResendCountdown(60); // 60 seconds
  };

  const requestOTP = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Email not found. Please try logging in again.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API_URL}/forgot-password`, { email });
      Alert.alert("Success", "Verification code sent to your email.");
      setStep(2);
      startResendTimer();
    } catch (err: any) {
      const message =
        err.response?.data?.message || "Failed to send code. Please try again.";
      Alert.alert("Error", message);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      return Alert.alert("Error", "Please enter a valid 6-digit code.");
    }

    if (!newPassword || !confirmPassword) {
      return Alert.alert("Error", "Please fill in both password fields.");
    }

    if (newPassword !== confirmPassword) {
      return Alert.alert("Error", "Passwords do not match.");
    }

    if (newPassword.length < 6) {
      return Alert.alert(
        "Error",
        "Password must be at least 6 characters long.",
      );
    }

    setLoading(true);
    try {
      await axios.post(`${API_URL}/reset-password`, {
        email,
        otp,
        newPassword,
      });

      Alert.alert("Success", "Password updated successfully!", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        "Password reset failed. Please try again.";
      Alert.alert("Error", message);
    } finally {
      setLoading(false);
    }
  };

  // Reusable password input with visibility toggle
  const PasswordInput = ({
    value,
    onChangeText,
    placeholder = "••••••••",
    show,
    onToggle,
  }: {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    show: boolean;
    onToggle: () => void;
  }) => (
    <View style={{ position: "relative" }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        secureTextEntry={!show}
        style={{
          backgroundColor: COLORS.inputBg,
          color: COLORS.textPrimary,
          paddingVertical: 16,
          paddingHorizontal: 18,
          paddingRight: 52,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: COLORS.inputBorder,
          fontSize: 16,
        }}
      />
      <TouchableOpacity
        onPress={onToggle}
        style={{
          position: "absolute",
          right: 16,
          top: 18,
        }}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
      >
        {show ? (
          <EyeOff size={20} color={COLORS.textSecondary} />
        ) : (
          <Eye size={20} color={COLORS.textSecondary} />
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ padding: 24, paddingBottom: 60 }}
        >
          {/* Header / Back */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginBottom: 32 }}
            hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
          >
            <ArrowLeft color={COLORS.textPrimary} size={28} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              fontWeight: "800",
              color: COLORS.textPrimary,
              marginBottom: 8,
              letterSpacing: -0.4,
            }}
          >
            {step === 1 ? "Reset Password" : "Create New Password"}
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: COLORS.textSecondary,
              lineHeight: 22,
              marginBottom: 40,
            }}
          >
            {step === 1
              ? `We'll send a verification code to ${email || "your registered email"}`
              : "Enter the 6-digit code we sent and set a strong new password."}
          </Text>

          {step === 1 ? (
            // Step 1: Request OTP
            <TouchableOpacity
              onPress={requestOTP}
              disabled={loading || !email.trim()}
              activeOpacity={0.85}
              style={{
                backgroundColor: COLORS.accent,
                paddingVertical: 18,
                borderRadius: 20,
                alignItems: "center",
                shadowColor: COLORS.accent,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.35,
                shadowRadius: 10,
                elevation: 8,
              }}
            >
              {loading ? (
                <Loader2 size={24} color="white" />
              ) : (
                <Text
                  style={{ color: "white", fontSize: 17, fontWeight: "700" }}
                >
                  Send Verification Code
                </Text>
              )}
            </TouchableOpacity>
          ) : (
            // Step 2: OTP + Password form
            <View style={{ gap: 24 }}>
              {/* OTP Field */}
              <View>
                <Text
                  style={{
                    color: COLORS.textSecondary,
                    fontSize: 13,
                    fontWeight: "600",
                    marginBottom: 10,
                    textTransform: "uppercase",
                    letterSpacing: 0.6,
                  }}
                >
                  Verification Code
                </Text>
                <TextInput
                  value={otp}
                  onChangeText={(text) => {
                    const cleaned = text.replace(/[^0-9]/g, "").slice(0, 6);
                    setOtp(cleaned);
                  }}
                  keyboardType="number-pad"
                  maxLength={6}
                  placeholder="000000"
                  placeholderTextColor={COLORS.textSecondary}
                  textAlign="center"
                  style={{
                    backgroundColor: COLORS.inputBg,
                    color: COLORS.textPrimary,
                    paddingVertical: 20,
                    borderRadius: 16,
                    borderWidth: 1.5,
                    borderColor:
                      otp.length === 6 ? COLORS.accent : COLORS.inputBorder,
                    fontSize: 26,
                    fontWeight: "700",
                    letterSpacing: 10,
                  }}
                />
              </View>

              {/* New Password */}
              <View>
                <Text style={{ ...styles.label }}>New Password</Text>
                <PasswordInput
                  value={newPassword}
                  onChangeText={setNewPassword}
                  show={showNewPassword}
                  onToggle={() => setShowNewPassword((prev) => !prev)}
                />
              </View>

              {/* Confirm Password */}
              <View>
                <Text style={{ ...styles.label }}>Confirm Password</Text>
                <PasswordInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  show={showConfirmPassword}
                  onToggle={() => setShowConfirmPassword((prev) => !prev)}
                />
              </View>

              {/* Submit Button */}
              <TouchableOpacity
                onPress={resetPassword}
                disabled={loading}
                activeOpacity={0.85}
                style={{
                  backgroundColor: COLORS.accent,
                  paddingVertical: 18,
                  borderRadius: 20,
                  alignItems: "center",
                  marginTop: 12,
                  shadowColor: COLORS.accent,
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.35,
                  shadowRadius: 10,
                  elevation: 8,
                }}
              >
                {loading ? (
                  <Loader2 size={24} color="white" />
                ) : (
                  <Text
                    style={{ color: "white", fontSize: 17, fontWeight: "700" }}
                  >
                    Update Password
                  </Text>
                )}
              </TouchableOpacity>

              {/* Resend Link */}
              <TouchableOpacity
                onPress={() => canResend && requestOTP()}
                disabled={!canResend || loading}
                style={{ alignItems: "center", marginTop: 16 }}
              >
                <Text
                  style={{
                    color: canResend ? COLORS.accent : COLORS.textSecondary,
                    fontSize: 15,
                    fontWeight: canResend ? "600" : "500",
                  }}
                >
                  {canResend
                    ? "Resend Verification Code"
                    : `Resend available in ${resendCountdown}s`}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = {
  label: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  } as const,
};

export default ChangePasswordScreen;
