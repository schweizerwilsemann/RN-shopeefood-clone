import ShareButton from '@/components/button/share.button'
import SocialButton from '@/components/button/social.button'
import ShareInput from '@/components/input/share.input'
import { registerAPI } from '@/utils/api'
import { APP_COLOR } from '@/utils/constant'
import axios from 'axios'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-root-toast'
import { SafeAreaView } from 'react-native-safe-area-context'


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
        borderColor: "#d0d0d0",
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 5
    },
})
const SignUpPage = () => {
    const URL_BACKEND = process.env.EXPO_PUBLIC_API_URL;

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");

    const handleSignup = async () => {

        try {
            const res = await registerAPI(email, password, name);
            if (res.data) {
                router.navigate("/(auth)/verify")
            }
            else {
                Toast.show(Array.isArray(res.message) ? res.message[0] : res.message, {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                })
            }
            console.log(">>> check response: ", res.data);
        } catch (error) {
            console.log(">>> check error: ", error);
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View>
                    <Text style={{
                        fontWeight: "600",
                        fontSize: 25,
                        marginVertical: 30
                    }}
                    >
                        Đăng kí tài khoản
                    </Text>
                </View>
                <ShareInput
                    title='Họ tên'
                    value={name}
                    setValue={setName}
                />
                <ShareInput
                    title='email'
                    keyboardType='email-address'
                    value={email}
                    setValue={setEmail}
                />
                <ShareInput
                    title='Password'
                    secureTextEntry={true}
                    value={password}
                    setValue={setPassword}
                />
                <View style={{ marginVertical: 10 }}></View>
                <ShareButton
                    title="Đăng Ký"
                    onPress={() => { handleSignup() }}
                    textStyle={{ color: "#fff", paddingVertical: 5 }}
                    btnStyle={{
                        textTransform: "uppercase",
                        justifyContent: "center",
                        borderRadius: 30,
                        marginHorizontal: 50,
                        paddingVertical: 10,
                        backgroundColor: APP_COLOR.ORANGE,
                        borderColor: "#505050",
                        borderWidth: 1
                    }}
                    pressStyle={{ alignSelf: "stretch" }}
                />
                <View style={{
                    marginVertical: 15,
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "center"
                }}>
                    <Text
                        style={{ color: "black" }}
                    >
                        Đã có tài khoản?
                    </Text>
                    <Link href={"/(auth)/signup"}>
                        <Text
                            style={{ color: "black", textDecorationColor: "underline" }}
                        >
                            Đăng nhập.
                        </Text>
                    </Link>
                </View>
                <SocialButton />
            </View>
        </SafeAreaView>
    )
}

export default SignUpPage