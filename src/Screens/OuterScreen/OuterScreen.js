import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInputComponent,
  ImageBackground,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';
import {
  moderateScaleVertical,
  textScale,
  moderateScale,
} from '../../styles/responsiveSize';
import strings from '../../constants/lang/index';
import fontFamily from '../../styles/fontFamily';
import GradientButton from '../../Components/GradientButton';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import isJs from 'is_js';
import TextInputWithLabel from '../../Components/TextInputWithLabel';

export default class OuterScreen extends React.Component {
  _mobileVerification = () => {
    this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION);
  };
  render() {
    return (
      <WrapperContainer>
        <ImageBackground
          source={imagePath.rangoli}
          style={styles.rangoliImage}
          imageStyle={{opacity: 0.2}}>
          {/* <Image source={imagePath.rangoli} style={styles.rangoliImage} /> */}
        </ImageBackground>
        <View style={{marginTop: moderateScaleVertical(-50), flex: 1}}>
          <Text style={styles.header}>
            {strings.LOGIN_OR_CREATE_A_NEW_ACCOUNT}
          </Text>
          <View style={{marginHorizontal: moderateScale(22)}}>
            <Text style={styles.txtSmall}>
              {strings.PAY_USING_UPI_WALLET_BANK_ACCOUNTS_AND_CARDS}
            </Text>
            <View style={{marginTop: moderateScaleVertical(20)}}>
              <Text style={styles.txtSmall}>{strings.MOBILE_NUMBER}</Text>
            </View>
            <TextInputWithLabel />
            <ButtonWithLoader
              btnStyle={styles.guestBtn}
              btnTextStyle={{color: colors.white}}
              onPress={this._mobileVerification}
              btnText={strings.PROCEED_SECURELY}
            />

            <View style={{marginTop: moderateScaleVertical(20)}}>
              <View style={styles.socialRow}>
                <Text style={styles.orText}>
                  {strings.TERMS_AND_CONDITIONS}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}></View>
        </View>
      </WrapperContainer>
    );
  }
}
