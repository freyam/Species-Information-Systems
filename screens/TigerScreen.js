import React, {useState} from 'react';

import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

export function TigerScreen() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#f7f7f7',
        }}>
        <Image
          source={require('../assets/images/tiger/tiger_bg.png')}
          style={{width: '100%', height: 200, resizeMode: 'cover'}}
        />

        <View
          style={{
            paddingHorizontal: '10%',
            paddingVertical: 10,
            width: '100%',
          }}>
          <Text style={styles.title}>
            Bengal Tigers{'\n'}(Panthera Tigris Tigris)
          </Text>
          <Text style={styles.heading1}> Description </Text>
          <Text style={styles.body}>
            The plight of the tiger (Panthera tigris), the largest cat species,
            has been a persistent one throughout the last several decades.
            Tigers are classified as "Endangered" by the IUCN (International
            Union of Conservation of Nature). Three of the nine tiger subspecies
            were lost to extinction in the twentieth century alone. Since then,
            alarm bells have been ringing for the world's surviving tiger
            population, which was thought to number just around 4000 at the turn
            of the century. This includes more than half of the Bengal Tiger
            (Panthera tigris tigris), which is native to the Asian nations of
            India, Nepal, Bhutan, and Bangladesh.
          </Text>
          <Text style={styles.heading1}>
            Trends in Populations and Reserves{' '}
          </Text>
          <Text style={styles.body}>
            Based on a rough estimate in 2022, the current lion population in
            India is around 760 lions. However, this was not always the case.
            The lions in Gir National Park were hunted to extinction, with only
            about 12 remaining in the early 1900s. Around the same time, the Gir
            national park was established to protect the lion population in this
            area. Here are some graphs depicting the Asiatic lion's trends.
          </Text>
          <Text style={styles.heading2}>Population Trends</Text>
          <Text style={styles.body}>
            Tigers live in a wide range of habitats in India, including tall
            grasslands, mangrove swamps, high mountains, dry and wet deciduous
            forests, and evergreen forest systems. Our data and analyses show
            that tigers in India fall into four genetic groups, which correspond
            to different tiger landscapes and are made up of nearby protected
            areas. We make an effort to display a trend line for each state
            grouped by the corresponding cluster during a 12-year period, from
            2006 to 2018. We create a stacked line graph to show the change in
            tiger population over time using state-specific data collected
            throughout the years.
          </Text>
          <Image
            source={require('../assets/images/tiger/population.png')}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              marginVertical: 10,
            }}
          />
          <Text style={styles.heading2}>Reserves Trends</Text>
          <Text style={styles.body}>
            The conservation effort significantly increased the tiger population
            to twice its strength during its 2006-2018 run. There were 1,411
            Complete 2006; by 2010, there were 1,706; by 2014, there were 2,226;
            and by 2018, there were 2967. According to the World Wildlife Fund
            and Global Tiger Forum, the number of wild tigers worldwide
            increased from 3,159 in 2010 to 3,890 in 2016. This growth was
            largely attributed to India.
          </Text>
          <Image
            source={require('../assets/images/tiger/reserves_india.png')}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              marginVertical: 10,
            }}
          />
          <Image
            source={require('../assets/images/tiger/map.png')}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              marginVertical: 10,
            }}
          />
          <Text style={styles.heading1}>Component Analysis </Text>
          <Text style={styles.heading2}>Political Component Analysis</Text>
          <Text style={styles.body}>
            For decades, the tiger has been a symbol of the worldwide
            conservation effort. The Global Environment Fund (GEF) has sponsored
            eco-development programmes in protected areas, including tiger
            reserves, since 1996, and the World Wide Fund for Nature (WWF) has
            assisted the Indian government finance Project Tiger since 1973. The
            Tiger Summit, held in Russia in 2011, collected 33 million British
            pounds towards worldwide tiger conservation thanks to the World
            Bank's Global Tiger Initiative. The number of tiger reserves and
            individual tigers has increased because of this backing and
            investment.
          </Text>
          <Text style={styles.heading2}>Geographical Component Analysis</Text>
          <Text style={styles.body}>
            Former Indian Prime Minister Indira Gandhi banned the export of
            tiger and leopard skins and safari shooting during a 1969 session of
            the International Union for the Conservation of Nature (IUCN) held
            in New Delhi. A complete conservation strategy was beginning to take
            shape. In 1972, Congress passed the Wildlife Conservation Act (WCA).
            The Forest Department, with help from the Indian Forest Service, was
            tasked with creating national parks and animal sanctuaries around
            the country.
          </Text>

          <Text style={styles.heading2}>Biological Component Analysis</Text>
          <Text style={styles.body}>
            Reduced availability of suitable prey is the second most important
            factor in the plight of the tiger. According to the most important
            conclusions from decades of research on tiger populations, the
            reduction in tiger numbers in many areas is attributable to the
            depletion of prey rather than direct human killing. Around 50
            deer-sized animals, or around 6,600 pounds of live prey per year, is
            the minimum annual need for a healthy tiger. Therefore, tiger
            populations flourish provided there is sufficient prey and proper
            protective measures are in place.
          </Text>
          <Image
            source={require('../assets/images/tiger/bio.png')}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              marginVertical: 10,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#5C7269',
    fontFamily: 'PlayfairDisplay',
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
    marginVertical: 30,
  },
  heading1: {
    color: '#5C7269',
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
  },
  heading2: {
    color: '#5C7269',
    fontSize: 15,
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
  },
  body: {
    color: '#5C7269',
    fontSize: 10,
    width: '100%',
    textAlign: 'center',
  },
});
