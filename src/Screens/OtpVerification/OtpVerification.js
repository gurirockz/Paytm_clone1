import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import BorderTextInput from '../../Components/BorderTextInput';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import GradientButton from '../../Components/GradientButton';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import styles from './styles';
import {otpTimerCounter} from '../../utils/helperFunctions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
const CELL_COUNT = 6;
export default function OtpVerification({navigation}) {
  const [state, setState] = useState({
    timer: 30,
    otp: '',
  });

  const updateState = data => setState(state => ({...state, ...data}));
  //TO SHOW THE TIMER SO THAT USER HAS TO WAIT FOR A WHILE BEFORE REQUSTING A NEW OTP AND HE DON'T KEEP ON REQUESTING OTP AGAIN AND AGAIN
  useEffect(() => {
    let timerId;
    if (timer > 0) {
      timerId = setTimeout(() => {
        updateState({timer: timer - 1});
      }, 1000);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [state.timer]);

  //RESTING THE TIMER AND REQUEST FOR NEW OTP
  const _onResend = () => {
    updateState({timer: 30});
  };

  const onChangeOtp = otp => {
    updateState({otp});
  };
  //THIS ARE DEFAULT METHOD REQUIRED BY OTP MODULE TO WORK PROPERLY INCASE MOVE FROM ON BOX TO ANOTHER OR INCASE OF BLUR
  const ref = useBlurOnFulfill({otp: state.otp, cellCount: CELL_COUNT});
  const [propsOtp = props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: state.otp,
    setValue: onChangeOtp,
  });

  const onVerifyOtp = () => {
    const {otp} = state;
    navigation.navigate(navigationStrings.LOGIN);
  };

  const {timer} = state;
  return (
    <WrapperContainer>
      <ImageBackground
        source={imagePath.rangoli}
        style={styles.rangoliImage}
        imageStyle={{opacity: 0.2}}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack(null)}
            style={{alignSelf: 'flex-start'}}>
            <Image source={imagePath.back} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.mainView}>
        <Text style={styles.header}>{strings.ENTER_OTP}</Text>
        <Text style={styles.orText}>{strings.ENTER_OTP_SENT}</Text>
        <View style={{height: moderateScaleVertical(50)}} />

        <CodeField
          ref={ref}
          {...propsOtp}
          value={state.otp}
          onChangeText={onChangeOtp}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text
                style={styles.cellText}
                key={index}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        {timer > 0 ? (
          <View style={styles.bottomContainer}>
            <Text style={{...styles.txtSmall, color: colors.textGreyLight}}>
              {strings.RESEND_OTP_IN}
              <Text style={styles.otpTimerCounter}>
                {`${otpTimerCounter(timer)} seconds`}
              </Text>
            </Text>
          </View>
        ) : (
          <View style={styles.bottomContainer}>
            <Text style={{...styles.txtSmall, color: colors.textGreyLight}}>
              <Text onPress={_onResend} style={styles.resendOtp}>
                {' '}
                {strings.RESEND_OTP}
              </Text>
            </Text>
          </View>
        )}
        <ButtonWithLoader
          onPress={onVerifyOtp}
          btnText={strings.PROCEED_SECURELY}
        />
      </View>
    </WrapperContainer>
  );
}
