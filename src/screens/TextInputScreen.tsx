import React, { useState } from 'react'
import { TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/apptheme'
import { StyleSheet } from 'react-native'
import { useForm } from '../hooks/useForm'
import { CustomSwitch } from '../components/CustomSwitch'

export const TextInputScreen = () => {

  const {onChange, form, isSub} = useForm({
    name: '',
    email: '',
    phone: '',
    isSub: false
  })


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          
          <View style={styles.globalMargin}>
              <HeaderTitle title='TextInputs' />

              <TextInput
                style={styleScreen.textInputStyle}
                placeholder='Ingrese su nombre'
                autoCorrect={false}
                autoCapitalize='words'
                onChangeText={(value) => onChange(value, 'name')}
              />

              <TextInput
                style={styleScreen.textInputStyle}
                placeholder='Ingrese su email'
                autoCorrect={false}
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={(value) => onChange(value, 'email')}
              />
              <View style={styleScreen.subStyle}>
                <Text>Suscribirme</Text>
                <View style={{flex: 1}} />
                <CustomSwitch isOn={isSub} onChange={( value ) => { onChange(!isSub, 'isSub') }} />
              </View>

              <HeaderTitle title={JSON.stringify(form, null, 3)} />

              <HeaderTitle title={JSON.stringify(form, null, 3)} />
              <Text>Keyboar Avoiding View</Text>
              <TextInput
                style={styleScreen.textInputStyle}
                placeholder='Ingrese su teléfomo'
                autoCorrect={false}
                keyboardType='phone-pad'
                onChangeText={(value) => onChange(value, 'phone')}
              />

              

            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>

    </KeyboardAvoidingView>
  )
}


const styleScreen = StyleSheet.create({
    textInputStyle: {
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.4)',
      height: 50,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginVertical: 10
    },
    subStyle: {
      flexDirection: 'row'
    }
});