import React from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {

  const {fadeIn, fadeOut, opacity, position} = useAnimation()



  return (
    <View style={styles.container}>

        <Animated.View style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [{
            translateY: position
          }]
          }} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => fadeIn(600)}
          >
            <Text style={styles.buttonText} >FadeIn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={fadeOut}
          >
            <Text style={styles.buttonText} >FadeOut</Text>
          </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
      backgroundColor: '#5856D6',
      width: 150,
      height: 150
  },
  button: {
    marginBottom: 30,
        alignSelf: 'center',
        backgroundColor: '#9f9ff4',
        width: 200,
        paddingVertical: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 7,

        elevation: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.8
  }
});