import { Entypo, FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React, { useState } from 'react';

export default function RootLayout() {
  const [firstValue, setFirstValue] = useState('');
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState('');

  const handleNumberPress = (num: string) => {
    if (displayValue === '0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  }

  const handleOperatorPress = (op: string) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue(' ');
  }

  const handleEqualsPress = (eq: string) => {
    const first = parseFloat(firstValue);
    const second = parseFloat(displayValue);

    let result = 0;

    switch (operator) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case 'x':
        result = first * second;
        break;
      case '/':
        result = first / second;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setFirstValue('');
    setOperator('');
  }

  const handleClearPress = (clear: string) => {
    setDisplayValue('0');
    setFirstValue('');
    setOperator('');
  }

  const handleDeletePress = (del: string) => {
    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  }

  const handlePercentPress = (percent: string) => {
    const value = parseFloat(displayValue);
    setDisplayValue((value / 100).toString());
  }
   
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={{fontSize: 30, fontWeight: '400'}}>{firstValue + operator}</Text>
        <Text style={{fontSize: 70, fontWeight: '400'}}>{displayValue}</Text>
      </View>

      <View style={styles.teclado}>
          <View style={styles.linha}>
            <TouchableOpacity style={styles.botaoEspecial} onPress={() => {handleDeletePress('DEL')}}>
              <FontAwesome6 name="delete-left" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoEspecial} onPress={() => handleClearPress('C')}>
              <FontAwesome6 name="c" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoEspecial} onPress={() => handlePercentPress('%')}>
              <FontAwesome6 name="percent" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoOperador} onPress={() => handleOperatorPress('/')}>
              <FontAwesome6 name="divide" size={30} color="black" />
            </TouchableOpacity> 
          </View>

          <View style={styles.linha}>
            <TouchableOpacity style={styles.botaoNumerico} onPress={() => handleNumberPress('7')}>
              <FontAwesome6 name="7" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => handleNumberPress('8')}>
              <FontAwesome6 name="8" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => handleNumberPress('9')}>
              <FontAwesome6 name="9" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoOperador} onPress={() => handleOperatorPress('x')}>
              <FontAwesome6 name="x" size={30} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
            <TouchableOpacity style={styles.botaoNumerico} onPress={() => handleNumberPress('4')}>
              <FontAwesome6 name="4" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => handleNumberPress('5')}>
              <FontAwesome6 name="5" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => handleNumberPress('6')}>
              <FontAwesome6 name="6" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoOperador} onPress={() => handleOperatorPress('-')}>
              <FontAwesome6 name="minus" size={30} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
            <TouchableOpacity style={styles.botaoNumerico} onPress={() => handleNumberPress('1')}>
              <FontAwesome6 name="1" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => handleNumberPress('2')}>
              <FontAwesome6 name="2" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => handleNumberPress('3')}>
              <FontAwesome6 name="3" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoOperador} onPress={() => handleOperatorPress('+')}>
              <FontAwesome6 name="plus" size={30} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
            <TouchableOpacity style={styles.botaoEspecial} onPress={() => {}}>
              <FontAwesome6 name="clock-rotate-left" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoNumerico} onPress={() => handleNumberPress('0')}>
              <FontAwesome6 name="0" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoEspecial} onPress={() => {}}>
              <Entypo name="dot-single" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoOperador} onPress={() => handleEqualsPress('=')}>
              <FontAwesome6 name="equals" size={30} color="black" />
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  display: {
    flex: 1,
    backgroundColor: '#cccccc',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 40,
    marginBottom: 1
  },

  teclado: {
    flex: 2,
    padding: 10,
    gap: 10,
    justifyContent: 'center',
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 10
  },

  botaoEspecial: {
    flex: 1,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#b6d7a8',
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoOperador: {
    flex: 1,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#d5a6bd',
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoNumerico: {
    flex: 1,  
    height: 70,
    borderRadius: 10,
    backgroundColor: '#93c47d',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
