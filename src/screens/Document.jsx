import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import Video from 'react-native-video';

const requestDocumentPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'cool practice app storage permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      return true;
    } else {
      console.log('Camera permission denied');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

const Document = () => {
  React.useEffect(() => {
    if (requestDocumentPermission()) {
      console.log('you have the permission');
    }
  }, []);
  const [file, setFile] = useState([]);
  let player = React.useRef(null);

  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          {file.map(
            item =>
              (item?.type == 'video/mp4' && (
                <Video source={item} style={styles.backgroundVideo} />
              )) || (
                <Image
                  source={item}
                  style={{width: '100%', height: 500, objectFit: 'contain'}}
                />
              ),
          )}
        </View>
        <View style={{width:'50%',alignSelf:'center',marginTop:'80%'}}>
          <Button
            title={'pick document'}
            style={{
              backgroundColor: '#000',
              marginVertical: 20,
              marginHorizontal: 20,
            }}
            onPress={async () => {
              const res = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                allowMultiSelection: true,
              });
              console.log(res);
              setFile(res);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Document;

const styles = StyleSheet.create({});
