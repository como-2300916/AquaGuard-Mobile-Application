import { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import {Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { auth } from '../config/firebase';
import { LOGIN_TEXT } from '../constants/login';
import { loginStyles as styles } from '../styles/login.styles';

const ALLOWED_EMAIL = 'lifeguard@aquaguard.com';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    const enteredEmail = email.trim().toLowerCase();
    const enteredPassword = password.trim();

    if (!enteredEmail || !enteredPassword) {
      Alert.alert('Missing Information', 'Please enter your email and password.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        enteredEmail,
        enteredPassword
      );

      const loggedInEmail = userCredential.user.email?.toLowerCase();

      if (loggedInEmail !== ALLOWED_EMAIL) {
        await signOut(auth);

        Alert.alert(
          'Access Denied',
          'Only authorized lifeguard personnel can access the dashboard.'
        );
        return;
      }

      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert(
        'Login Failed',
        'Invalid email or password. Please try again.'
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <ImageBackground
          source={require('../assets/images/resort.png')}
          resizeMode="cover"
          blurRadius={0.80}
          style={styles.background}
        >
          <LinearGradient
            colors={[
              'rgba(0, 8, 14, 0.70)',
              'rgba(0, 28, 42, 0.50)',
              'rgba(0, 8, 14, 0.80)',
            ]}
            style={styles.overlay}
          >
            <SafeAreaView style={styles.safeArea}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
              >
                <View style={styles.brandContainer}>
                  <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                  />

                  <Text style={styles.brand}>{LOGIN_TEXT.appName}</Text>

                  <Text style={styles.brandSubtitle}>
                    {LOGIN_TEXT.subtitle}
                  </Text>
                </View>

                <BlurView intensity={42} tint="dark" style={styles.glassCard}>
                  <View style={styles.cardOverlay}>
                    <View style={styles.form}>
                      <View style={styles.fieldGroup}>
                        <Text style={styles.label}>
                          {LOGIN_TEXT.emailLabel}
                        </Text>

                        <TextInput
                          value={email}
                          onChangeText={setEmail}
                          placeholder={LOGIN_TEXT.emailPlaceholder}
                          placeholderTextColor="rgba(255,255,255,0.36)"
                          keyboardType="email-address"
                          autoCapitalize="none"
                          autoCorrect={false}
                          style={styles.input}
                        />
                      </View>

                      <View style={styles.fieldGroup}>
                        <Text style={styles.label}>
                          {LOGIN_TEXT.passwordLabel}
                        </Text>

                        <View style={styles.passwordInputWrapper}>
                          <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder={LOGIN_TEXT.passwordPlaceholder}
                            placeholderTextColor="rgba(255,255,255,0.36)"
                          secureTextEntry={!showPassword}
                          style={styles.passwordInput}
                        />
                            <Pressable
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeButton}

                            >
                                <Ionicons
                                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                    size={20}
                                    color="rgba(255,255,255,0.65)"
                                    />
                            </Pressable>
                        </View>
                        </View>

                      <TouchableOpacity
                        activeOpacity={0.88}
                        onPress={handleLogin}
                        style={styles.loginButtonShadow}
                      >
                        <LinearGradient
                          colors={['#12D8D8', '#008CFF']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={styles.loginButton}
                        >
                          <Text style={styles.loginText}>
                            {LOGIN_TEXT.loginButton}
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.authorizedText}>
                      {LOGIN_TEXT.authorizedOnly}
                    </Text>
                  </View>
                </BlurView>
              </KeyboardAvoidingView>
            </SafeAreaView>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}