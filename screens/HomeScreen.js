import React from 'react';

import {Button, View, ScrollView, Text, ImageBackground} from 'react-native';

export function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
      }}>
      <ImageBackground
        source={require('../assets/images/SpecieFi-bg.png')}
        style={{width: '100%', height: '100%', flex: 1}}>
        <Text
          style={{
            color: '#5C7269',
            fontFamily: 'PlayfairDisplay',
            fontSize: 70,
            width: '100%',
            textAlign: 'center',
            marginTop: '40%',
            marginBottom: '10%',
          }}>
          SpecieFi
        </Text>
        <View
          style={{
            paddingHorizontal: '30%',
            paddingVertical: 10,
            width: '100%',
          }}>
          <Button
            title="Asiatic Lions"
            color="#5C7269"
            onPress={() => navigation.navigate('Lion')}
          />
        </View>
        <View
          style={{
            paddingHorizontal: '30%',
            paddingVertical: 10,
            width: '100%',
          }}>
          <Button
            title="Bengal Tigers"
            color="#5C7269"
            onPress={() => navigation.navigate('Tiger')}
          />
        </View>
        <View
          style={{
            paddingHorizontal: '30%',
            paddingVertical: 10,
            width: '100%',
          }}>
          <Button
            title="Asian Elephants"
            color="#5C7269"
            onPress={() => navigation.navigate('Elephant')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
