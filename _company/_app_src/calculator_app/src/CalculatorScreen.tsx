import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Calculator = () => {
    const [inputValue, setInputValue] = useState('0');
    const [previousResult, setPreviousResult] = useState('');

    const handleDigitPress = (digit: string) => {
        if (inputValue === '0') {
            setInputValue(digit);
        } else {
            setInputValue(inputValue + digit);
        }
    };

    const clearInput = () => {
        setInputValue('0');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.result}>{previousResult}</Text>
            <Text style={styles.input}>{inputValue}</Text>

            <Button title="C" onPress={clearInput} />
            {/* 추가 버튼과 이벤트 핸들러를 여기에 넣으세요 */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    result: {
        fontSize: 24,
        marginTop: 50
    },
    input: {
        fontSize: 72,
        textAlign: 'right'
    }
});

export default Calculator;