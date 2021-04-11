/** Firebase Cloud Messaging Methods */
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

const getToken = async () => {
  try {
    const token = await firebase.messaging().getToken();
    //console.log(token , "This is Token") ;
    if (token) return token;
  } catch (error) {
    console.log(error);
  }
};

const getFCMToken = async () => {
  try {
    const authorized = await firebase.messaging().hasPermission();
    const fcmToken = await getToken();

    if (authorized) return fcmToken;

    await firebase.messaging().requestPermission();
    return fcmToken;
  } catch (error) {
    console.log(error);
  }
};

export { getFCMToken };