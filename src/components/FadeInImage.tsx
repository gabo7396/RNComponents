import React, { useState } from 'react'
import { useAnimation } from '../hooks/useAnimation';
import { ActivityIndicator, Animated, View } from 'react-native';

interface Props {
    uri: string;
}

export const FadeInImage = ({ uri }: Props) => {

    const { opacity, fadeIn } = useAnimation()
    const [isLoading, setIsLoading] = useState(true)

  return (
    <View
        style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        {
            isLoading && <ActivityIndicator style={{position: 'absolute'}} size={30} color='rgba(0,0,0,0.2)' />

        }
        <Animated.Image
            source={{ uri }}
            onLoad={() => fadeIn(600, () => setIsLoading(false))}
            style={{
                width: '100%',
                height: 400,
                opacity
            }}
        />
    </View>
  )
}
