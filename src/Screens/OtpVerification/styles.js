import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

export default StyleSheet.create({
  root: {padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 45,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.aliceBlue,
    borderBottomWidth: 1,
  },
  cellText: {
    color: colors.black,
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: colors.themeColor,
    borderBottomWidth: 2,
  },
  guestBtn: {
    marginTop: moderateScaleVertical(20),
    backgroundColor: colors.themeColor,
    borderWidth: 0,
    marginLeft: 20,
    marginRight: 20,
  },
  bottomContainer: {
    marginTop: moderateScaleVertical(20),
    alignItems: 'flex-end',
  },
  orText: {
    ...commonStyles.mediumFont14,
    lineHeight: 18,
    fontFamily: fontFamily.medium,
    opacity: 0.6,
    marginTop: 0,
    marginHorizontal: moderateScale(0),
  },
  header: {
    color: colors.black,
    fontSize: moderateScale(20),
    fontFamily: fontFamily.futuraBtHeavy,
    marginBottom: moderateScaleVertical(15),
  },
  otpTimerCounter: {
    color: colors.themeColor,
    fontFamily: fontFamily.futuraBtHeavy,
  },
  mainView: {
    flex: 1,
    marginTop: moderateScaleVertical(-50),
    marginHorizontal: moderateScale(24),
  },
  resendOtp: {
    color: colors.themeColor,
    fontFamily: fontFamily.futuraBtHeavy,
  },
  backContainer: {
    height: moderateScaleVertical(80),
    borderBottomColor: colors.transparent,
    borderBottomWidth: 2,
    paddingHorizontal: moderateScale(24),
    justifyContent: 'center',
  },
  rangoliImage: {
    height: 220,
    width: '100%',
    tintColor: colors.aliceBlue,
  },
});
