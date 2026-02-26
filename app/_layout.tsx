import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>

      </View>

      <View style={styles.teclado}>
          <View style={styles.boxOne}>
            <TouchableOpacity style={styles.botaoEspecial} onPress={() => {}}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoOperador} onPress={() => {}}>
              
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => {}}>
              
            </TouchableOpacity>
          </View>

          <View style={styles.boxOne}>
            <TouchableOpacity style={styles.botaoEspecial} onPress={() => {}}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoOperador} onPress={() => {}}>
              
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => {}}>
              
            </TouchableOpacity>
          </View>

          <View style={styles.boxOne}>
            <TouchableOpacity style={styles.botaoEspecial} onPress={() => {}}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoOperador} onPress={() => {}}>
              
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => {}}>
              
            </TouchableOpacity>
          </View>

          <View style={styles.boxOne}>
            <TouchableOpacity style={styles.botaoEspecial} onPress={() => {}}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoOperador} onPress={() => {}}>
              
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => {}}>
              
            </TouchableOpacity>
          </View>

          <View style={styles.boxOne}>
            <TouchableOpacity style={styles.botaoEspecial} onPress={() => {}}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoOperador} onPress={() => {}}>
              
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => {}}>
              
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

  display: {
    backgroundColor: 'purple',
    width: 400,
    height: 100,
    margin: 2
  },

  teclado: {
    flex: 1,
  },

  boxOne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },

  botaoEspecial: {
    width: 50,
    height: 50,
    backgroundColor: 'green'
  },

  botaoOperador: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },

  botaoNumerico: {
    width: 50,
    height: 50,
    backgroundColor: 'pink'
  }
})
