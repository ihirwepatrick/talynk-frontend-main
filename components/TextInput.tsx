import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const CustomTextInput: React.FC<TextInputProps > = ({
    value,
    onChangeText,
    placeholder = 'Enter password'
}) => {

    return (
        <View style={styles.container} className='self-center mt-4'>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#666"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        width: '80%',
        // height: 35,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        // paLeft: 10,
        color: '#000',
    },
});

export default CustomTextInput;