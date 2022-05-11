import React from 'react';
import { View, Text } from 'react-native';
import { Copyright } from '../Copyright/index.';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { styles } from './styles';

interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            key={key}
            image={value.image}
            title={value.title}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}