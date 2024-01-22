import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/apptheme'
import { ItemSeparator } from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Superboy", "Lex Luthor", "Perry White", "Power Girl", "Acero",
             "Giganta", "Dark Angel", "Max Mercury", "Doctor Polaris", "Arrowette", "Nightwing", "Terra", "Hector Hall",
             "Chameleon Boy", "Lightning Lass", "Simon Stagg", "Grant Wilson", "Mento", "Shazam", "Mister Atom", "Henry Heywood",
             "Zatanna", "Nebiros", "Star Hawkins", "Pig-Iron", "Fastback", "Digger O'Doom" ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman", "Avengers", "Black Panther", "Deadpool", "Jessica Jones", "Captain Marvel", "Barracuda",
             "Bruce Banner", "Mauler", "Nemesis", "Patch", "Reavers" ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Gon Freecss", "Levi Ackerman", "Ichigo Kurosaki", "Nico Robin", "Edward Elrinc",
             "Satoru Gojo", "Megumin", "Asuna", "Roy Mustang", "Naruto" ]
    }
];

export const CustomSectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
        {/*  */}
        <SectionList 
            sections={ casas }
            keyExtractor={(item, index) => item + index}

            ListHeaderComponent={() => <HeaderTitle title='Section List' />}
            ListFooterComponent={() => (
                <View style={{marginBottom: 30}}>
                    <HeaderTitle title={`Total de casas: ${casas.length}`} />
                </View>
            )}

            renderItem={({ item }) =><Text style={{ marginVertical: 2, fontSize: 15 }}>{item}</Text>}
            stickySectionHeadersEnabled

            renderSectionHeader={({ section }) => (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={{...styles.title, marginVertical: 5 }}>{section.casa}</Text>
                </View>
            )}
            renderSectionFooter={({ section }) => (
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>{`Total de elementos: ${section.data.length}`}</Text>
            )}

            // SectionSeparatorComponent={() => <ItemSeparator/>}
            ItemSeparatorComponent={() => <ItemSeparator/>}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}
