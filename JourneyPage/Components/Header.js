import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ props.title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#006700',
        height: 250, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#ffffc8',
        fontSize: 130,
        fontWeight: '900000000', 

    }
});

export default Header;