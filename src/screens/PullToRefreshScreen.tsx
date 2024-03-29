import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/apptheme'
import { Text } from 'react-native'

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            console.log('terminamos')
            setRefreshing(false)
            setData('Hola mundo') 
        }, 1500);
    }


  return (

    <ScrollView
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={ onRefresh }
                progressViewOffset={10}
            />
        }
    >
        <View style={styles.globalMargin}>
            <HeaderTitle title='Pull to refresh' />

            <Text>{data}</Text>


        </View>
    </ScrollView>
  )
}
