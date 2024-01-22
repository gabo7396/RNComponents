import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native'

export const useAnimation = () => {
  
    const opacity = useRef(new Animated.Value(0)).current
    const position = useRef(new Animated.Value(-200)).current

    const fadeIn = (duration: number = 600, callback?: () => void) => {
        Animated.timing(
        opacity,
        {
            toValue: 1,
            duration,
            useNativeDriver: true
        }
        ).start(callback);

        Animated.timing(
            position,
            {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.bounce
            }
        ).start()


    }

    const fadeOut = () => {

        Animated.timing(
        opacity,
        {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }
        ).start();

        Animated.timing(
            position,
        {
            toValue: -200,
            duration: 1000,
            useNativeDriver: true
        }
        ).start()
    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut
    }
}
