import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/apptheme'

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Modal Screen' />
        <TouchableOpacity
            onPress={() => {setIsVisible(true)}}
            style={modalScreenStyles.btnModal}
        >
            <Text style={modalScreenStyles.buttonText}>Abrir Modal</Text>
        </TouchableOpacity>



        <Modal
            animationType='fade'
            visible={isVisible}
            transparent
        >
            {/* Background */}
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.3)',
                justifyContent: 'center',
                alignItems: 'center'
            }} >

                {/* Contenido del modal */}
                <View
                    style={{
                        backgroundColor: 'white',
                        width: 350,
                        height: 220,
                        paddingVertical: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 15
                    }}
                >
                    <HeaderTitle title='Modal' />
                    <Text style={{ fontSize: 15, marginBottom: 15}}>Cuerpo del modal</Text>
                    <TouchableOpacity
                        onPress={() => {setIsVisible(false)}}
                        style={modalScreenStyles.btnModal}
                    >
                        <Text style={modalScreenStyles.buttonText}>Cerrar Modal</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>


    </View>
  )
}

const modalScreenStyles = StyleSheet.create({
    btnModal: {
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