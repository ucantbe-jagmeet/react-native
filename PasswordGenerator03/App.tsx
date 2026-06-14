import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as Yup from 'yup';
import { Formik } from 'formik';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .typeError('Password length must be a number')
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }

    if (lowerCase) {
      characterList += lowerCaseChars;
    }

    if (numbers) {
      characterList += digitChars;
    }

    if (symbols) {
      characterList += specialChars;
    }

    if (characterList.length === 0) {
      setPassword('Please select at least one option');
      setIsPassGenerated(true);
      return;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }

    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              generatePasswordString(Number(values.passwordLength));
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>

                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>

                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>

                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#29AB87"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase Letters</Text>

                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#FED85D"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>

                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>

                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={[styles.primaryBtn, !isValid && styles.disabledBtn]}
                    onPress={() => handleSubmit()}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>

        {isPassGenerated && (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long press to copy</Text>

            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f4f4f5',
    paddingTop: 20,
  },

  formContainer: {
    margin: 12,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
    color: '#111827',
    textAlign: 'center',
  },

  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
    color: '#111827',
  },

  description: {
    color: '#758283',
    marginBottom: 8,
  },

  heading: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '500',
  },

  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  inputColumn: {
    flexDirection: 'column',
  },

  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#16213e',
    color: '#000',
  },

  errorText: {
    fontSize: 12,
    color: '#ff0d10',
    marginTop: 4,
  },

  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },

  primaryBtn: {
    width: 130,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },

  disabledBtn: {
    opacity: 0.5,
  },

  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },

  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },

  secondaryBtnTxt: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#111827',
  },

  card: {
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 30,
  },

  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
    fontWeight: '700',
    letterSpacing: 1,
  },
});
