import React, {useState} from 'react';

import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

export function ElephantScreen() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#f7f7f7',
        }}>
        <Image
          source={require('../assets/images/ele/ele_bg.png')}
          style={{width: '100%', height: 200, resizeMode: 'cover'}}
        />

        <View
          style={{
            paddingHorizontal: '10%',
            paddingVertical: 10,
            width: '100%',
          }}>
          <Text style={styles.title}>
            Asian Elephants{'\n'} (Elephas Maximus)
          </Text>
          <Text style={styles.heading1}> Description </Text>
          <Text style={styles.body}>
            Elephant populations, once widespread throughout Africa and Asia,
            have significantly decreased over the past century. Asian elephant
            populations are primarily at risk from habitat degradation and
            subsequent human-elephant conflict, whereas poaching for the illegal
            ivory trade is the biggest threat to African elephant numbers. In
            India, the Asian elephant used to be found all over the nation,
            particularly in states like Gujarat and Punjab. They can currently
            be found in four dispersed populations in India's southern,
            northern, central, and northeastern regions. The habitat of
            elephants includes semi-arid thorn and scrub forests as well as wet
            tropical evergreen forests. However, tropical deciduous woods are
            home to the most significant concentrations of elephants. There are
            30 notified Elephant Reserves in the country spread over 15 states.
            Odisha and Chhattisgarh reserves are others that are yet to be
            notified by the state governments. The biggest elephant reserve in
            India is the Mysore Elephant Reserve.
          </Text>
          <Text style={styles.heading1}>
            Trends in Populations and Reserves{' '}
          </Text>
          <Text style={styles.body}>
            While specific populations of African elephants, primarily those in
            southern Africa, are stable and expanding, others continue to lose
            animals, particularly those in central and some parts of east
            Africa. There are still an estimated 415,000 elephants on the
            continent, leaving the species vulnerable despite some populations
            being heavily poached. African elephant habitat has declined by over
            50% since 1979, while Asian elephants are now restricted to just 15%
            of their original range.In 1930, as many as 10 million wild
            elephants roamed vast swaths of the African continent. In 2016,
            experts estimated that Africa’s elephant population had dropped by
            111,000 in a decade. In East Africa, elephant populations have
            nearly halved in a decade. Southern Africa remains a stronghold for
            293,000, or 70%, of the estimated remaining African elephants.
          </Text>
          <Text style={styles.heading2}>Population Trends</Text>
          <Text style={styles.body}></Text>
          <Image
            source={require('../assets/images/ele/population.png')}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              marginVertical: 10,
            }}
          />
          <Image
            source={require('../assets/images/ele/population_table.png')}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              marginVertical: 10,
            }}
          />
          <Text style={styles.heading2}>Reserves Trends</Text>
          <Text style={styles.body}>
            The Indian elephant is mainly found in the parts of India, the
            central and southern Western Ghats, eastern India, northeast India
            and northern India and some parts of south peninsular India. There
            are a total of 31 elephant reserves in India. According to recent
            statistics, the elephant population in India is showing a consistent
            trend across elephant reserves. The elephant population was 31,368
            in 2012, but it declined to 27312 in 2017.
          </Text>
          <Image
            source={require('../assets/images/ele/reserves.png')}
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
            Recognising their social, cultural, and ecological importance, the
            government of India declared elephants as India’s National Heritage
            animal. Over 500 people are killed yearly, and lakhs of property are
            destroyed when elephants enter human habitats. Humans are not the
            only casualties, and elephants are victims too. In areas where the
            forests are fragmented and wildlife corridors are thin, elephants
            sometimes move out of unprotected regions as they try to cross over
            into neighbouring patches of forest. In these cases, the department
            adopts different strategies to keep elephants inside of the
            boundaries of protected areas, simultaneously working on
            strengthening corridors. Project elephant was launched in February
            1992 as a centrally sponsored scheme to assist states having
            free-ranging populations of wild elephants and to ensure the
            long-term survival of identified viable people of elephants in their
            natural habitat. The MIKE programme is entirely dependent on donor
            support. The European Union has been the most important donor for
            the MIKE programme and has funded implementation in Africa since its
            inception in 2001 and Asia since 2017. Funding has also been
            provided by the US Fish and Wildlife Service and the Governments of
            Japan, the United Kingdom and China.
          </Text>
          <Text style={styles.heading2}>Geographical Component Analysis</Text>
          <Text style={styles.body}>
            The distribution of species and ecological systems are significantly
            impacted by habitat change, caused mainly by land cover changes.
            India is home to the largest remaining population of the Asian
            elephant (Elephas maximus L.) in South and Southeast Asia. The
            primary threat to the long-term survival of Asian elephants is
            forest loss and fragmentation. Asian elephants are even more
            endangered than their African cousins. That’s because the biggest
            threat to their survival isn’t poaching but habitat loss. As
            urbanisation, industrial development, and agricultural expansion
            increase in India and Indonesia, Asian elephants’ habitats are
            shrinking rapidly, leading to increasingly isolated populations and
            a rising number of deadly human-elephant conflicts.
          </Text>

          <Text style={styles.heading2}>Biological Component Analysis</Text>
          <Text style={styles.body}>
            An elephant spends 16 to 18 hours daily feeding nearly 80% of its
            day. Grass, tiny plants, bushes, fruit, twigs, tree bark, and roots
            are all consumed by elephants. Roughage and calcium are present in
            tree bark, which helps with digestion. Strips of bark can be torn
            off the tree trunk and carved into tusks. Elephants will dig up the
            dirt to get salt and minerals to augment their diet. Asian elephants
            (Elephas maximus) in the wild feed on a diverse spectrum of food
            plants along with seasonal shifts in diet selection. One of the most
            deadly infections that affect elephants is anthrax. Contaminated
            water or soil can propagate this disease. Elephants are susceptible
            to various diseases, including elephant pox and trunk paralysis.
            Elephants can catch various illnesses that humans can get, like
            intestinal colic, nettle rash, and even the common cold conveyed by
            mosquitoes. The bacterium that causes tuberculosis affects the lungs
            and is a sickness. Elephants and humans can both contract the
            disease through microscopic airborne droplets The elephants are
            seated at the top of the food chain and play a vital role in the
            ecosystem. They provide passageways for other animals in densely
            forested terrain. A micro-ecosystem that can support tadpoles and
            other species when submerged in water can also be created by the
            elephant footprint: rampant poaching, human-elephant conflict and
            shrinking habitats need to be addressed urgently.
          </Text>
          <Image
            source={require('../assets/images/ele/vegetation.png')}
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
