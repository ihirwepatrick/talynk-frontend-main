import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";


interface PasswordInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    isDarkMode?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    value,
    onChangeText,
    placeholder = 'Enter password',
    isDarkMode = false
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={[
            styles.container, 
            isDarkMode ? styles.containerDark : styles.containerLight
        ]} className='self-center mt-4'>
            <Ionicons
                name="lock-closed" 
                size={20} 
                color={isDarkMode ? "#fff" : "#666"} 
                style={styles.leftIcon} 
            />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                placeholderTextColor={isDarkMode ? "#999" : "#666"}
                style={isDarkMode ? styles.inputDark : styles.inputLight}
                className='flex-1 justify-center p-1'
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.rightIcon}>
                <Ionicons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color={isDarkMode ? "#fff" : "#666"}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        width: '80%',
        height: 35,
        paddingHorizontal: 10,
    },
    containerLight: {
        backgroundColor: 'white',
    },
    containerDark: {
        backgroundColor: '#333',
    },
    leftIcon: {
        marginRight: 5,
    },
    rightIcon: {
        marginLeft: 5,
    },
    inputLight: {
        color: '#000',
    },
    inputDark: {
        color: '#fff',
    },
});

export default PasswordInput;