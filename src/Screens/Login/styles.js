import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';

export default StyleSheet.create({
  header: {
    color: colors.black,
    fontSize: moderateScale(20),
    fontFamily: fontFamily.futuraBtHeavy,
    textAlign: 'center',
  },
  txtSmall: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    marginTop: moderateScaleVertical(15),
  },
  txtSmallWhite: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    marginTop: moderateScaleVertical(15),
    color: colors.white,
  },
  txtSmaller: {
    ...commonStyles.mediumFont12,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    marginTop: moderateScaleVertical(1),
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialRowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScaleVertical(40),
  },
  hyphen: {
    width: 20,
    height: 1,
    backgroundColor: colors.textGrey,
    opacity: 0.6,
  },
  bottomContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    marginBottom: moderateScaleVertical(30),
  },
  guestBtn: {
    marginTop: moderateScaleVertical(20),
    backgroundColor: colors.lightSky,
    borderWidth: 0,
  },
  orText: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    opacity: 0.6,
    marginTop: 0,
    marginHorizontal: moderateScale(16),
  },
  dpImage: {
    height: 45,
    width: 45,
    borderRadius: 45,
  },
  topBar: {
    height: moderateScaleVertical(80),
    borderBottomColor: colors.transparent,
    paddingHorizontal: moderateScale(24),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
  },
  searchStyle: {tintColor: colors.sapphire, marginLeft: moderateScale(200)},
  blueBox: {
    backgroundColor: colors.aliceBlue2,
  },
  logo: {height: 50, width: '25%', alignSelf: 'center'},
  blueBox1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(45),
    paddingRight: moderateScale(45),
    marginTop: moderateScaleVertical(20),
  },
  myPaytmBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScaleVertical(20),
  },
  payLogo: {
    height: 60,
    width: 60,
  },
  blueBox2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(65),
    paddingRight: moderateScale(60),
  },
  cashbackText: {
    textAlign: 'center',
    fontFamily: fontFamily.bold,
    paddingLeft: moderateScale(120),
    paddingRight: moderateScale(120),
    marginTop: moderateScaleVertical(10),
  },
  creditCard: {
    marginLeft: moderateScale(60),
    marginRight: moderateScale(60),
  },
  creditCardImage: {height: 100, width: 150, alignSelf: 'center'},
  scanButton: {
    width: 160,
    height: 55,
    backgroundColor: colors.sapphire,
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  qrScanner: {tintColor: colors.white, alignSelf: 'center'},
  imageStyle: {
    borderRadius: 15,
    width: '90%',
    marginTop: 5,
    marginLeft: -25,
  },
});
