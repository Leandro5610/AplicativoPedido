import React from 'react';
import { Button,Avatar, IconButton, Card, Title, Paragraph} from 'react-native-paper';
 
import {
 
  AppRegistry,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
 
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ProductView from './app/ui/views/ProductsView/ProductsView';
/*const LeftContent = props => <Avatar.Icon {...props} icon="folder" />*/
 
const App=() => {
  
 
  return (
    
  <>
    <ProductView/>
  </>
   
    
    
  );
};
 
export default App;