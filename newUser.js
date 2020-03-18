import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function newUser() {
    return (
        <View style={styles.container}>
            <Text>newUser Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     padding: 24
    }
});
