import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal
} from 'react-native';

export default function CreateItemModal({
    visible,
    inputPlaceholder,
    createButtonValue,
    cancelButtonValue,
    onCreate,
    onCancel
}) {
    const [textInput, setTextInput] = useState('');

    const onChangeTextInput = (newTextInput) => {
        setTextInput(newTextInput);
    }

    const onPressCreateButton = () => {
        onCreate(textInput);
        setTextInput('');
    }

    const onPressCancelButton = () => {
        onCancel();
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={inputPlaceholder}
                    onChangeText={onChangeTextInput}
                    value={textInput} />

                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title={cancelButtonValue} color="red" onPress={onPressCancelButton} />
                    </View>
                    <View style={styles.button}>
                        <Button title={createButtonValue} onPress={onPressCreateButton} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#dfdfdf',
        padding: 10,
        marginBottom: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    button: {
        width: '45%'
    }
});