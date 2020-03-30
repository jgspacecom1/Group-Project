import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Find Journey by Date!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 160,
        shadowOffset: { width:0, height:12},
        shadowColor: '#171717',
        shadowOpacity: .1
    },

    input: {
        backgroundColor: '#ffffc8',
        flex: 1,
        fontSize: 80,
        height: 160,
        color: '#006700'
    },

    addButton: {
        width: 350,
        backgroundColor: '#99cc00',
        alignItems: 'center',
        justifyContent: 'center'
    },

    addButtonText: {
        color: '#ffffc8',
        fontSize: 30,
        fontWeight: '2000'
    }
})

export default InputBar;