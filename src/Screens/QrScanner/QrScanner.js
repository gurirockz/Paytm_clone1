import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInputComponent,
  ImageBackground,
  Linking,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';
import {
  moderateScaleVertical,
  textScale,
  moderateScale,
} from '../../styles/responsiveSize';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import strings from '../../constants/lang/index';
import fontFamily from '../../styles/fontFamily';
import GradientButton from '../../Components/GradientButton';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import isJs from 'is_js';
import TextInputWithLabel from '../../Components/TextInputWithLabel';

export default class QrScanner extends React.Component{
    onSuccess = e => {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err)
      );
    };
  
    render() {
      return (
        <QRCodeScanner
          onRead={this.onSuccess}
          reactivate={true}
          permissionDialogMessage="Need permission to access camera"
          reactivateTimeout={10}
          showMarker={true}
          markerStyle={{
            borderColor: colors.themeColor,
            borderTopRightRadius: 20,
            borderRadius: 20,
            borderWidth: 5,
          }}
         topContent={
         <View style={styles.blackScreen}>
         <Text style={styles.qrScan}>
             {strings.SCAN_QR} 
         </Text>
         </View>
         }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>{strings.SHOW_QR}</Text>
            </TouchableOpacity>
          }
        />
      );
    }
  }
  