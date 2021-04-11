import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import commonStyles from '../../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import styles from './styles';
import PhoneNumberInput from '../../Components/PhoneNumberInput';
import BorderTextInput from '../../Components/BorderTextInput';
import GradientButton from '../../Components/GradientButton';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import navigationStrings from '../../constants/navigationStrings';

export default function Signup({navigation}) {
  const [state, setState] = useState({
    isLoading: false,
    callingCode: '1',
    cca2: 'US',
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  const updateState = (data) => setState((state) => ({...state, ...data}));

  const _onCountryChange = (data) => {
    updateState({cca2: data.cca2, callingCode: data.callingCode[0]});
    return;
  };

  const moveToNewScreen = (screenName, data) => () => {
    navigation.navigate(screenName, {});
  };

  const onSignup = () => {
    moveToNewScreen(navigationStrings.OTP_VERIFICATION, {
      data: {phoneNumber},
    })();
  };
  const _onChangeText = (key) => (val) => {
    updateState({[key]: val});
  };

  const {phoneNumber, callingCode, cca2, name, email, password} = state;
  return (
    <WrapperContainer>
      <View style={{flex: 1}}>
        <View style={{marginTop: moderateScaleVertical(100)}}>
          <Text style={styles.header}>{strings.CREATE_YOUR_ACCOUNT}</Text>
          <Text style={styles.txtSmall}>{strings.ENTER_DETAILS_BELOW}</Text>
        </View>

        <View
          style={{
            marginTop: moderateScaleVertical(50),
            marginHorizontal: moderateScale(24),
          }}>
          <BorderTextInput
            onChangeText={_onChangeText('name')}
            placeholder={strings.YOUR_NAME}
            value={name}
          />
          <BorderTextInput
            onChangeText={_onChangeText('email')}
            placeholder={strings.YOUR_EMAIL}
            value={email}
          />
          <PhoneNumberInput
            onCountryChange={_onCountryChange}
            onChangePhone={(phoneNumber) =>
              updateState({phoneNumber: phoneNumber.replace(/[^0-9]/g, '')})
            }
            cca2={cca2}
            phoneNumber={phoneNumber}
            callingCode={state.callingCode}
          />
          <View style={{height: moderateScaleVertical(20)}} />
          <BorderTextInput
            onChangeText={_onChangeText('password')}
            placeholder={strings.ENTER_PASSWORD}
            value={password}
          />
          <GradientButton
            onPress={onSignup}
            marginTop={moderateScaleVertical(10)}
            btnText={strings.SIGNUP_AN_ACCOUNT}
          />
          {/* <PhoneNumberInput /> */}
        </View>
        <View style={styles.bottomContainer}>
          <Text style={{...styles.txtSmall, color: colors.textGreyLight}}>
            {strings.ALREADY_HAVE_AN_ACCOUNT}
            <Text
              onPress={moveToNewScreen(navigationStrings.LOGIN)}
              style={{
                color: colors.themeColor,
                fontFamily: fontFamily.futuraBtHeavy,
              }}>
              {' '}
              {strings.LOGIN}
            </Text>
          </Text>
        </View>
      </View>
    </WrapperContainer>
  );
}
