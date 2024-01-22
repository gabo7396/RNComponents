import React from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/apptheme'

export const AlertScreen = () => {

  const showAlert = () =>{
    Alert.alert(
      'Título',
      'Este es el mensaje de la alerta.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK')},
      ]
    );
  }


  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Alerts' />
        <Button
          title='Mostrar Alerta'
          onPress={showAlert}
        />
    </View>
  )
}
