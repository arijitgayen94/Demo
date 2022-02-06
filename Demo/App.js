/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  Dimensions,
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
import Svg, { Circle, Line } from 'react-native-svg';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const array = [
    {
      "timestamp": "322",
      "x-coordinate": 21.266832577421894,
      "y-coordinate": -1.698919658814816,
      "z-coordinate": -2.328790240050602
    },
    {
      "timestamp": "323",
      "x-coordinate": 19.744741796911395,
      "y-coordinate": -1.7546725841684885,
      "z-coordinate": -1.3149661623354854
    },
    {
      "timestamp": "324",
      "x-coordinate": 18.163113002329805,
      "y-coordinate": -1.8181315713803832,
      "z-coordinate": -0.3726406002332424
    },
    {
      "timestamp": "325",
      "x-coordinate": 16.915619718779418,
      "y-coordinate": -1.862530157033399,
      "z-coordinate": 0.3835348845275711
    },
    {
      "timestamp": "326",
      "x-coordinate": 15.20037213100631,
      "y-coordinate": -1.9429072430715015,
      "z-coordinate": 1.3956963104036524
    },
    {
      "timestamp": "327",
      "x-coordinate": 13.85119821269433,
      "y-coordinate": -2.014279284076214,
      "z-coordinate": 2.084124775615443
    },
    {
      "timestamp": "328",
      "x-coordinate": 12.296925403950393,
      "y-coordinate": -2.0848934077227144,
      "z-coordinate": 3.002125496768708
    },
    {
      "timestamp": "329",
      "x-coordinate": 10.596762964417975,
      "y-coordinate": -2.144978563141154,
      "z-coordinate": 3.9854391961105424
    },
    {
      "timestamp": "330",
      "x-coordinate": 9.036151468427795,
      "y-coordinate": -2.2139005827019003,
      "z-coordinate": 4.809615391795533
    },
    {
      "timestamp": "331",
      "x-coordinate": 7.501265898113952,
      "y-coordinate": -2.2343056898435525,
      "z-coordinate": 5.5862814469680036
    },
    {
      "timestamp": "332",
      "x-coordinate": 5.832871586047817,
      "y-coordinate": -2.288771976826293,
      "z-coordinate": 6.52388744451737
    },
    {
      "timestamp": "333",
      "x-coordinate": 4.544282231100583,
      "y-coordinate": -2.3516045299032617,
      "z-coordinate": 7.093216964758319
    },
    {
      "timestamp": "334",
      "x-coordinate": 3.054858477708966,
      "y-coordinate": -2.3089188220338643,
      "z-coordinate": 7.747678608542945
    },
    {
      "timestamp": "335",
      "x-coordinate": 1.682549014768629,
      "y-coordinate": -2.3181758951823843,
      "z-coordinate": 8.328889911339012
    },
    {
      "timestamp": "336",
      "x-coordinate": -0.05046667787178777,
      "y-coordinate": -2.390801584323639,
      "z-coordinate": 9.271199520767249
    },
    {
      "timestamp": "337",
      "x-coordinate": -1.4353285041036858,
      "y-coordinate": -2.421066541823864,
      "z-coordinate": 10.060396524431843
    },
    {
      "timestamp": "338",
      "x-coordinate": -3.0121983507937737,
      "y-coordinate": -2.4209961295006637,
      "z-coordinate": 10.807533772937736
    },
    {
      "timestamp": "339",
      "x-coordinate": -4.59197650125572,
      "y-coordinate": -2.4705408392032653,
      "z-coordinate": 11.743506277581478
    },
    {
      "timestamp": "340",
      "x-coordinate": -5.977314735189168,
      "y-coordinate": -2.43326152798433,
      "z-coordinate": 12.344368657862992
    },
    {
      "timestamp": "341",
      "x-coordinate": -6.774567931476065,
      "y-coordinate": -2.437360281731236,
      "z-coordinate": 12.430819226855204
    },
    {
      "timestamp": "342",
      "x-coordinate": -6.812849075177201,
      "y-coordinate": -2.368266061130305,
      "z-coordinate": 11.787660059058462
    },
    {
      "timestamp": "343",
      "x-coordinate": -6.819764750787808,
      "y-coordinate": -2.3666133637255293,
      "z-coordinate": 11.198892295550186
    },
    {
      "timestamp": "344",
      "x-coordinate": -6.6888194243268595,
      "y-coordinate": -2.347248721508375,
      "z-coordinate": 10.409395437536842
    },
    {
      "timestamp": "345",
      "x-coordinate": -6.226181884542983,
      "y-coordinate": -2.323863537326364,
      "z-coordinate": 9.158921932188223
    },
    {
      "timestamp": "346",
      "x-coordinate": -6.626138389695026,
      "y-coordinate": -2.4013575515908796,
      "z-coordinate": 9.098642640540435
    },
    {
      "timestamp": "347",
      "x-coordinate": -7.128428566585037,
      "y-coordinate": -2.4376102915814006,
      "z-coordinate": 9.139772564217175
    }
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').width }}>
          <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').width, borderRadius: Dimensions.get('screen').width / 2, backgroundColor: "#4CB050", overflow: 'hidden' }}>
            <Svg width={Dimensions.get('screen').width / 2} height={Dimensions.get('screen').width / 2} >
              {array.map((item) => (
                <Line x1={Dimensions.get('screen').width / 2} y1={Dimensions.get('screen').width / 2} x2={item['x-coordinate']} y2={item['y-coordinate']} stroke="red" strokeWidth="2" />
              ))}
            </Svg>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
