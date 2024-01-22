import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigaton = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigaton.navigate(menuItem.component as never)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color='gray'
                    size={30}
                />

                <Text style={styles.itemText}>
                    {menuItem.name}
                </Text>

                <Icon
                style={{
                    position: 'absolute',
                    right: 0
                }}
                    name='chevron-forward-outline'
                    color='gray'
                    size={30}
                />
            </View>
        </TouchableOpacity>
      )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
});