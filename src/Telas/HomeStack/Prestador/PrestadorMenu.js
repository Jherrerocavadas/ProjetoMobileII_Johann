import { StyleSheet, Text, View } from "react-native";

export function PrestadorMenu({route}) {
    return(
        <View style={ styles.container }>
            <Text>
                Menu de Prestadores
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