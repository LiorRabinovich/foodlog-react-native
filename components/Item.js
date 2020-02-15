import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default function Meal({ meal, onDelete }) {
    const { key, title } = meal;

    const onPressMeal = () => {
        onDelete(key);
    }

    return (
        <TouchableOpacity onPress={onPressMeal}>
            <View style={styles.meal}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    meal: {
        backgroundColor: '#dfdfdf',
        padding: 10,
        marginTop: 10
    }
});