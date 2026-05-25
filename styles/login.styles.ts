import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#001018',
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    transform: [
        { scale: 1.08 },
        { translateX: -45 },
    ],
},
  overlay: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 22,
    justifyContent: 'center',
  },

  brandContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 1.5,
    textShadowColor: 'rgba(0, 210, 255, 0.38)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 18,
  },
  brandSubtitle: {
    color: 'rgba(214, 236, 255, 0.78)',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginTop: 8,
  },

  glassCard: {
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1.2,
    borderColor: 'rgba(51, 181, 255, 0.55)',
    backgroundColor: 'rgba(3, 31, 46, 0.45)',
    shadowColor: '#00BFFF',
    shadowOpacity: 0.28,
    shadowRadius: 28,
    shadowOffset: { width: 0, height: 12 },
    elevation: 12,
  },
  cardOverlay: {
    paddingHorizontal: 22,
    paddingVertical: 24,
    backgroundColor: 'rgba(1, 20, 32, 0.38)',
  },

  form: {
    gap: 18,
  },
  fieldGroup: {
    gap: 9,
  },
  label: {
    color: '#A9DFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  input: {
    height: 58,
    borderRadius: 14,
    paddingHorizontal: 18,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: 'rgba(0, 20, 33, 0.62)',
    borderWidth: 1.2,
    borderColor: 'rgba(58, 170, 232, 0.5)',
  },

  forgotWrapper: {
    alignSelf: 'flex-end',
    marginTop: -3,
  },
  forgotText: {
    color: '#1DDCFF',
    fontSize: 14,
    fontWeight: '700',
  },
  forgotTextDisabled: {
    color: 'rgba(220, 240, 255, 0.48)',
  },
  logo: {
    width: 78,
    height: 78,
    marginBottom: 12,
  },
  loginButtonShadow: {
    marginTop: 8,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#00D8FF',
    shadowOpacity: 0.45,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 9,
  },
  loginButton: {
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 2,
  },

  divider: {
    height: 1,
    backgroundColor: 'rgba(166, 220, 255, 0.28)',
    marginTop: 24,
    marginBottom: 18,
  },
  authorizedText: {
    color: 'rgba(220, 240, 255, 0.68)',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },

  bottomText: {
    color: '#74DFFF',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 3,
    marginTop: 20,
  },
  passwordInputWrapper: {
    height: 58,
    borderRadius: 14,
    paddingLeft: 18,
    paddingRight: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 20, 33, 0.62)',
    borderWidth: 1.2,
    borderColor: 'rgba(58, 170, 232, 0.5)',
  },
  passwordInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    paddingVertical: 0,
  },
  eyeButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
