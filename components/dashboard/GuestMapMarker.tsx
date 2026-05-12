import { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

import { dashboardStyles as styles } from '@/styles/dashboard.styles';

type GuestMapMarkerProps = {
  color: string;
  top: `${number}%`;
  left: `${number}%`;
  isDanger: boolean;
  isSelected: boolean;
  onSelect: () => void;
};

export function GuestMapMarker({
  color,
  top,
  left,
  isDanger,
  isSelected,
  onSelect,
}: GuestMapMarkerProps) {
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isDanger) {
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [isDanger, pulseAnim]);

  const pulseScale = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.8],
  });

  const pulseOpacity = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <TouchableOpacity
      style={[styles.marker, { top, left }]}
      onPress={onSelect}
      activeOpacity={0.8}>
      {isDanger && (
        <Animated.View
          style={[
            styles.pulseRing,
            {
              opacity: pulseOpacity,
              transform: [{ scale: pulseScale }],
            },
          ]}
        />
      )}
      <View
        style={[
          styles.markerCircle,
          {
            backgroundColor: color,
            elevation: isSelected ? 10 : 0,
            shadowColor: '#00CFFF',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: isSelected ? 0.8 : 0,
            shadowRadius: isSelected ? 10 : 0,
            transform: [{ scale: isSelected ? 1.12 : 1 }],
          },
        ]}
      />
    </TouchableOpacity>
  );
}
