/**
 * @Author: Artha Prihardana
 * @Date: 2019-09-10 22:30:35
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-09-11 00:01:29
 */
import React, {useState} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

export const TextComponent = props => {
  return (
    <Text style={[styles.fontFamily, styles.regularSize]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  fontFamily: {
    // fontFamily: 'Roboto',
    // fontFamily: 'Montserrat',
    fontFamily: 'OpenSans-Regular',
    // fontFamily: 'PlayfairDisplay-Regular',
  },
  regularSize: {
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      android: {
        fontSize: 14,
      },
    }),
  },
  secondarySize: {
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      android: {
        fontSize: 12,
      },
    }),
  },
  captionSize: {
    ...Platform.select({
      ios: {
        fontSize: 13,
      },
      android: {
        fontSize: 10,
      },
    }),
  },
  actionBarSize: {
    ...Platform.select({
      ios: {
        fontSize: 10,
      },
      android: {
        fontSize: 8,
      },
    }),
  },
  titleSize: {
    ...Platform.select({
      ios: {
        fontSize: 32,
      },
      android: {
        fontSize: 29,
      },
    }),
  },
  subTitleSize: {
    ...Platform.select({
      ios: {
        fontSize: 28,
      },
      android: {
        fontSize: 25,
      },
    }),
  },
});
