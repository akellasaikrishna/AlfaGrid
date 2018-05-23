import React, { Component } from 'react';
import {
 View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  PixelRatio,
  AsyncStorage
} from 'react-native';

const Game = () => {
var ResponsiveImage = require('react-native-responsive-image');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var MyScore = require('./MyScores');
var EndGame = require('./EndGame');
var TimerMixin = require('react-timer-mixin');
//var Words = require('./Word');
var GLOBAL = require('./Globals');
var dismissKeyboard = require('dismissKeyboard');
var  getCorrectFontSizeForScreen = require('./multiResolution');
var DeviceInfo = require('react-native-device-info');
var SQLite = require('react-native-sqlite-storage');
import { AdMobInterstitial, AdMobBanner } from 'react-native-admob';
var Modal   = require('react-native-modalbox');
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
let tracker = new GoogleAnalyticsTracker('UA-86654723-1');
tracker.trackScreenView('Play Now');
var height = windowSize.width/1.3
var SIZE = 4; // four-by-four grid
var Cell = windowSize.width * .2
var CELL_SIZE = windowSize.width/4; // 20% of the screen width
var CELL_PADDING = 0 // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 2;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
var LETTER_SIZE = Math.floor(TILE_SIZE * .75);
var rows =[0,1,2]
var columns = [0,1,2,3]
var id = [0,1,2,3,4,5,6,7,8,9,10,11]
var dupValue = []
var dupValue1 = []
var FONT   = 16;
var Margin = 8;
var timer;
var db = SQLite.openDatabase({name : "testDB5",createFromLocation : 1});
}

var Play = React.createClass({
  mixins: [TimerMixin],
   getInitialState() {
    return {
      <View style={styles.container}>
      timeElapsed: 0,
      timeDisplay: '',
      correctWords:[],
      incorrectWords: [],
      unusedLetters : [],
      usedLetters : [],
      array:[],
      Consonants:['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Z'],
      Vowels:['A','E','I','O','U','Y'],
      currentSpeed: 0,
      currentFont: GLOBAL.BASE.startFont,
      currentSeconds: 0,
      currentMinutes: 0,
      currentLetters: 0,
      msInterval : null,
      sInterval : null,
      sTimeout : null,
      lettersInterval : null,
      lettersTimeout : null,
      sTimestamp: 0,
      lettersTimestamp : this.currentSpeed - 1,
      maxWords: ''
      </View>
    }
  }
});


var styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    backgroundColor:'#D3D3D3'
  },
  letter:{
    fontSize:60
  },
  header: {
    flex:.06
  },
  body:{
    flex:.52,
  },
  bodyIphone5:{
    flex:.44
  },
  bodyAndroid:{
    flex:.46
  },
  bodyIphone6plus:{
    flex:.55
  },
  footerIphone5:{
    flex:.5,
    width: windowSize.width,
    height: windowSize.height
  },
  footerAndroid:{
    flex:.48,
    width: windowSize.width,
    height: windowSize.height
  },
  footerIphone6plus:{
    flex:.4,
    width: windowSize.width,
    height: windowSize.height
  },
  footer:{
    flex:.42,
    width: windowSize.width,
    height: windowSize.height
  },
  thumbnail: {
    height: 250
  },
  subContainer:{
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    marginTop: 8,
  },
  year: {
    marginTop: 12,
    marginLeft: 8,
  },
  row:{
    flex:1.5,
    flexDirection:'row'
  },
  subRow:{
    marginLeft: 2.5,
    marginRight: 2,
    flex:1.5,
    height: 40,
    padding: 5,
    borderRadius:2,
    flex:0.5,
    backgroundColor:'#495159'
  },
  subRow1:{
    marginLeft: 2.5,
    flex:1.5,
    height: 40,
    padding: 5,
    borderRadius:2,
    flex:0.5,
    backgroundColor:'#27ae61'
  },
  Text:{
    textAlign:'center',
    marginTop: 30,
    fontSize:17,
    fontWeight:'bold',
    color:'white'
  },
  textHeader:{
    paddingTop:20,
    paddingLeft:20,
    fontSize:20,
    fontWeight:'bold',
  },
  textBody:{
    paddingTop:5,
    paddingLeft:20,
    fontSize:17
  },
  textfooter:{
    paddingTop:5,
    paddingLeft:20,
    fontSize:17
  },
  Correct:{
    flex:.20,
    fontSize:FONT,
    fontWeight:'bold',
    marginTop:10,
    paddingLeft:8
  },
  Level:{
    flex:.40,
    fontSize:FONT,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10
  },
  Time:{
    flex:.40,
    fontSize:FONT,
    fontWeight:'bold',
    marginTop:10
  },
  headerRow:{
    paddingTop:5,
    flexDirection:'row'
  },
  subBody:{
    flex:.38,
    borderBottomColor: 'black',
  },
  subBodyIphone5:{
    flex:.30,
    borderBottomColor: 'black',
  },
  subBodyAndroid:{
    flex:.36,
    borderBottomColor: 'black',
  },
  subBodyIphone6plus:{
    flex:.45
  },
  subBodyText:{
    flex:.10
  },
  subBodyTextIphone5:{
    flex:.08
  },
  subBodyTextAndroid:{
    flex:.10
  },
  subBodyTextIphone6plus:{
    flex:.10
  },
  Input:{
    marginTop: 5,
    flexDirection: 'row',
    height: 40,
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  InputIphone5:{
    marginTop: 2,
    flexDirection: 'row',
    height: 33,
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  InputAndroid:{
    marginTop: 3,
    flexDirection: 'row',
    height: 45,
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  TextInput:{
    padding: 5,
    flex:.15,
    fontSize: 30,
    justifyContent:'center',
    color: 'black'
  },
  TextInputIphone5:{
    padding: 4,
    flex:.1,
    fontSize: 20,
    justifyContent:'center',
    color: 'black'
  },
  TextInputAndroid:{
    padding: 4,
    flex:.1,
    fontSize: 20,
    justifyContent:'center',
    color: 'black'
  },
  tile: {
    position: 'absolute',
    width:windowSize.width/4+2,
    height:height/3,
    borderRadius: 2,
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C8B9B6',
  },
  modal3: {
    height: 150,
    width: windowSize.width-50
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}
);
export default Game;
