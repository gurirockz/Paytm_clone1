import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BorderTextInput from '../../Components/BorderTextInput';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import GradientButton from '../../Components/GradientButton';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import {SliderBox} from 'react-native-image-slider-box';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import styles from './styles';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import actions from '../../redux/actions/index';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        imagePath.banner1,
        imagePath.banner2,
        imagePath.banner3,
        imagePath.banner4,
      ],
    };
  }

  _onPress = () => {
    this.props.navigation.navigate('DrawerToggle');
  };

  _qrScanner = () => {
    this.props.navigation.navigate(navigationStrings.QR_SCANNER);
  }
  render() {
    console.log(this.props, 'THIS IS PROPS NAVIGATION');
    return (
      <WrapperContainer>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => this._onPress()}>
            <Image
              source={imagePath.dp}
              style={styles.dpImage}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
          <Image source={imagePath.search} style={styles.searchStyle} />
          <Image source={imagePath.mail} style={{tintColor: colors.sapphire}} />
        </View>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.blueBox}>
            <View style={{height: moderateScaleVertical(10)}} />
            <Image source={imagePath.logo} style={styles.logo} />
            <Text style={styles.header}>{strings.WALLET_KYC}</Text>
            <Text style={styles.header}>{strings.PAY_DIRECTLY}</Text>
            <View style={styles.blueBox1}>
              <Image source={imagePath.addedImage} style={styles.payLogo} />
              <Image source={imagePath.payLogo} style={styles.payLogo} />
              <Image source={imagePath.plusLogo} style={styles.payLogo} />
            </View>
            <View style={styles.blueBox2}>
              <Text style={styles.txtSmaller}>{strings.PAY}</Text>
              <Text style={styles.txtSmaller}>{strings.SEND_MONEY}</Text>
              <Text style={styles.txtSmaller}>{strings.RECHARGE_PAY_BILL}</Text>
            </View>
            <View style={{height: moderateScaleVertical(30)}} />
            <Image source={imagePath.card} style={styles.creditCardImage} />
            <Text style={styles.cashbackText}>{strings.CASHBACK}</Text>
            <View style={styles.creditCard}>
              <ButtonWithLoader btnText={strings.APPLY} />
            </View>
            <View style={{height: moderateScaleVertical(30)}} />
          </View>
          <View style={{padding: moderateScale(15)}}>
            <Text>{strings.MY_PAYTM}</Text>
            <View style={styles.myPaytmBox}>
              <Image source={imagePath.Balance} style={styles.payLogo} />
              <Image source={imagePath.Pat} style={styles.payLogo} />
              <Image source={imagePath.plusLogo} style={styles.payLogo} />
              <Image source={imagePath.addedImage} style={styles.payLogo} />
            </View>
            <View style={{marginTop: moderateScaleVertical(20)}} />
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={140}
              dotColor={colors.themeColor}
              inactiveDotColor={colors.aliceBlue}
              paginationBoxVerticalPadding={10}
              autoplay
              circleLoop
              resizeMethod={'resize'}
              resizeMode={'cover'}
              ImageComponentStyle={styles.imageStyle}
              imageLoadingColor={colors.themeColor}
            />
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity style={styles.scanButton} onPress={this._qrScanner}>
          <Image source={imagePath.qrCode} style={styles.qrScanner} />
          <Text style={styles.txtSmallWhite}>{strings.SCAN_QR}</Text>
        </TouchableOpacity>
      </WrapperContainer>
    );
  }
}
