import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Feather } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/5.jpg') },
  { id: 8, imgSource: require('./assets/6.jpg') },
  { id: 9, imgSource: require('./assets/5.jpg') },
  { id: 10, imgSource: require('./assets/6.jpg') },
];

export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
        <Image
            style={styles.avatar}
            source = {require('./assets/1.jpg')}
          />
        </View>

        <View style={styles.user}>
          <Text style={styles.text}>Nhẫn Trần</Text>
          <Text style={styles.text1}>Dev</Text>
          <View style={styles.btnWrapper}>
            <TouchableOpacity>
              <View style={[styles.btn,styles.btnFollow]}>
                <Text style={styles.btnText}>Follow</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.btn,styles.btnSend]}>
                <Feather name="send"/>
              </View>
            </TouchableOpacity>
          </View>
          
        </View>

      </View>

      <View style={styles.count}>
        <View>
          <Text style={styles.countText}>210</Text>
          <Text style={styles.countTextLable}>Photos</Text>
        </View>
        <View>
          <Text style={styles.countText}>15k</Text>
          <Text style={styles.countTextLable}>Followers</Text>
        </View>
        <View>
          <Text style={styles.countText}>605</Text>
          <Text style={styles.countTextLable}>Following</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.imageA}>
  
        <View>
          {imgData.slice(0,centerImgData).map(item => {
            return <Image style={styles.image} source={item.imgSource} key={item.id}/>
          })}
        </View>

        <View style={styles.padding}>
          {imgData.slice(centerImgData).map(item => {
            return <Image style={styles.image} source={item.imgSource} key={item.id}/>
          })}
        </View>
  
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  text1: {
    fontSize: 15,
    color: 'gray',
  },

  header: {
    flex: 0.25,
    flexDirection: 'row',
  },

  padding: {
    marginLeft: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    marginTop:20,
    borderRadius:50
  },

  user: {
    flex: 0.6,
    justifyContent: 'center',
  },

  btn: {
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  btnText: {
    color: 'white',
  },

  btnWrapper: {
    flexDirection: 'row',
    marginTop: 10, 
  },

  btnFollow: {
    width: 100,
    backgroundColor: FOLLOW_COLOR,
  },

  btnSend: {
    width: 40,
    backgroundColor: SEND_MESSAGE_COLOR,
    marginLeft: 10,
  },

  avatarWrapper: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  count:{
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
   
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  countTextLable: {
    fontSize: 15,
    fontWeight: '200',
  },

  imageA:{
    flex: 1, 
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image:{
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 15,
  }
});

