import { APP_COLOR } from '@/utils/constant';
import React, { useState } from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10
    },
    inputGroup: {
        padding: 5,
        gap: 10
    },
    text: {
        fontSize: 18
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10
    },
    eye: {
        position: "absolute",
        right: 10,
        top: 13
    }
})

interface Iprops {
    title?: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    value: any;
    setValue?: (v: any) => void;
    onChangeText?: any;
    onBlur?: any;
    error?: any;
}
const ShareInput = (props: Iprops) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const { title, keyboardType, secureTextEntry = false, value, setValue, onChangeText, onBlur, error } = props;
    return (
        <View style={styles.inputGroup}>
            {
                title &&
                <Text style={styles.text}>
                    {title}
                </Text>
            }
            <View>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={() => { setIsFocus(true) }}
                    onBlur={(e) => {
                        setIsFocus(false);
                        if (onBlur) onBlur(e);
                    }}
                    style={[
                        styles.input,
                        { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GRAY }
                    ]}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry && !isShowPassword}
                />
                {
                    error && <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>
                }
                {
                    secureTextEntry &&
                    <FontAwesome5
                        style={styles.eye}
                        name={isShowPassword ? "eye" : "eye-slash"}
                        size={24}
                        color="black"
                        onPress={() => setIsShowPassword(!isShowPassword)}
                    />
                }
            </View>
        </View>
    )
}

export default ShareInput