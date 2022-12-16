import React, {useState} from 'react';

import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

export function LionScreen() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#f7f7f7',
        }}>
        <Image
          source={require('../assets/images/lion/lion_bg.png')}
          style={{width: '100%', height: 200, resizeMode: 'cover'}}
        />

        <View
          style={{
            paddingHorizontal: '10%',
            paddingVertical: 10,
            width: '100%',
          }}>
          <Text style={styles.title}>
            Asiatic Lions{'\n'}(Panthera Leo Persica)
          </Text>
          <Text style={styles.heading1}> Description </Text>
          <Text style={styles.body}>
            {' '}
            The lion, also known as Panthera leo, is one of the five species of
            Panthera. This genus comprises large cats. Lions are primarily found
            in Africa, but a small population exists in the Gir National Park in
            India. The lions in India share similar features as the lions of
            western and northern Africa.{' '}
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
            The Nawab of Junagadh conducted the first census in 1936 after
            establishing the Gir national park. This shows a significant
            increase in the lion population compared to the previous
            measurement. We also see discrepancies in the data due to changes in
            methodology between 1950 and 1968. The 2020 census has been
            postponed indefinitely due to various factors, most notably
            COVID-19. However, the local administration had already established
            a method for estimating the number of lions known as "Poonam
            Avlokan." Using this method, 1400 forest officers and a few experts
            count the number of lions in their respective blocks over 24 hours
            during the moon night. While not wholly accurate, this method is a
            good substitute for the census method that has been used for over 50
            years.
          </Text>
          <Image
            source={require('../assets/images/lion/population.png')}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              marginVertical: 10,
            }}
          />
          <Image
            source={require('../assets/images/lion/population_plot.png')}
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
            Since the 1960s, the lion population in India has been steadily
            increasing, which can be attributed to increased awareness and
            coexistence between lions and humans, as well as initiatives taken
            by local governments and the forest department. Apart from the
            African continent, Gir National Park in India is the only place on
            the planet where lions can be found. As a result, the Indian
            government established World Lion Day on August 10th, 2014. This day
            is intended to raise public awareness about the importance of lions
            while also undertaking activities such as locating potential lion
            habitats other than Gir, developing new methods for estimating their
            population, and so on.
          </Text>
          <Text style={styles.heading2}>Geographical Component Analysis</Text>
          <Text style={styles.body}>
            Lions have historically been found all over Africa, as well as in
            Asia and the Indian subcontinent. However, as humans spread and
            hunting became more common, lion populations worldwide declined. The
            lion population has been reduced by 84\% in the last century alone.
            This resulted in lions being scattered mostly across Africa but in a
            much smaller area, with one part of the Asiatic lion population
            surviving in Gir, India. Gir National Park provides optimal
            conditions for lions to thrive. It has a dry climate and deciduous
            trees, making it ideal for lions.
          </Text>

          <Image
            source={require('../assets/images/lion/africa.png')}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              marginVertical: 10,
            }}
          />
          <Text style={styles.heading2}>Biological Component Analysis</Text>
          <Text style={styles.body}>
            In their respective territories, lions are the apex predators. They
            are carnivores that eat animals at the bottom of the food chain,
            such as zebras and wildebeests in Africa and deer and antelopes in
            India. They hunt in pairs, groups, or alone. Males protect the pride
            from attacks by other mature male lions, while females do 95\% of
            the hunting. They use vegetation and terrain for cover while
            scouting prey and planning their attack. Then they launch a
            coordinated attack, with some lions cutting off escape routes while
            others pursue the game directly behind it, ensuring a meal.
          </Text>
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
