import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Menu from '../screens/Menu';
import Api from '../apis/Api';
import Cart from '../screens/Cart';
import Document from '../screens/Document';
import Video from '../screens/Video';

const MusicRoute = () => <Menu options={{header: ()=> <CustomHeader />}}/>;

const AlbumsRoute = () => <Api/>;

const RecentsRoute = () => <Document/>;

const NotificationsRoute = () => <Cart/>;

const VideoRoute = () => <Video/>;

const ContactRoute = () => <Text></Text>;

const BottomBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Menu', focusedIcon: 'home-circle'},
    { key: 'albums', title: 'API', focusedIcon: 'api' },
    { key: 'recents', title: 'Imgpicker', focusedIcon: 'text-box-plus' },
    { key: 'notifications', title: 'Cart', focusedIcon: 'cart-variant' },
    { key: 'video', title: 'Video', focusedIcon: 'video' },
    { key: 'contact', title: 'Contact', focusedIcon: 'contacts' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
    video: VideoRoute,
    contact: ContactRoute,
    
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomBar;