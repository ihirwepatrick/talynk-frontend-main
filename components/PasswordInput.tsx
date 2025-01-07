import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PasswordInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    value,
    onChangeText,
    placeholder = 'Enter password'
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container} className='self-center mt-4'>
            <Ionicons name="lock-closed" size={20} color="#666" style={styles.leftIcon} />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                placeholderTextColor="#666"

                className='flex-1   justify-center p-1'
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.rightIcon}>
                <Ionicons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color="#666"
                />
            </TouchableOpacity>
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
        height: 35,
        paddingHorizontal: 10,
    },
    leftIcon: {
        marginRight: 5,
    },
    rightIcon: {
        marginLeft: 5,
    },
});

export default PasswordInput;