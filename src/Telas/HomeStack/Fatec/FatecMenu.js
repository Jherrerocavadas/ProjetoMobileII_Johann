import { StyleSheet, Text, View } from "react-native";

export function FatecMenu({route}) {
    return(
        <View style={ styles.container }>
            <Text>
                Menu de Fatecs
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:20
    },
  });