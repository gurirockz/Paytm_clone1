import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';

export default StyleSheet.create({
      buttonText: {
        color: colors.themeColor
      },
      buttonTouchable: {
        backgroundColor: colors.lightBlack,
        height: 32,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: -170
      },
      qrScan:{
          fontFamily: fontFamily.bold,
          fontSize: 16,
textAlign: 'center'
      },
      blackScreen:{flex: 1, backgroundColor: colors.transparent, width: '100%', justifyContent: 'center'},
})