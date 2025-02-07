import ShareButton from '@/components/button/share.button'
import SocialButton from '@/components/button/social.button'
import ShareInput from '@/components/input/share.input'
import { registerAPI } from '@/utils/api'
import { APP_COLOR } from '@/utils/constant'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-root-toast'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SignUpSchema } from "@/utils/validate.schema"
import { Formik } from "formik"


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
    const handleSignUp = async (email: string, password: string, name: string) => {

        try {
            const res = await registerAPI(name, email, password);
            console.log(">>>> check response: ", res);
            if (res.data) {
                router.replace({
                    pathname: "/(auth)/verify",
                    params: { email: email }
                })
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
            <Formik
                validationSchema={SignUpSchema}
                initialValues={{ email: '', password: '', name: '' }}
                onSubmit={values => handleSignUp(values.email, values.password, values.name)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={styles.container}>
                        <View>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 600,
                                marginVertical: 30
                            }}>Đăng ký tài khoản</Text>
                        </View>
                        <ShareInput
                            title="Họ tên"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            error={errors.name}
                        />
                        <ShareInput
                            title="Email"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                        />
                        <ShareInput
                            title="Password"
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            error={errors.password}
                        />
                        <View style={{ marginVertical: 10 }}></View>
                        <ShareButton
                            title="Đăng Ký"
                            onPress={handleSubmit}
                            textStyle={{
                                textTransform: "uppercase",
                                color: "#fff",
                                paddingVertical: 5
                            }}
                            btnStyle={{
                                justifyContent: "center",
                                borderRadius: 30,
                                marginHorizontal: 50,
                                paddingVertical: 10,
                                backgroundColor: APP_COLOR.ORANGE,
                            }}
                            pressStyle={{ alignSelf: "stretch" }}
                        />
                        <View style={{
                            marginVertical: 15,
                            flexDirection: "row",
                            gap: 10,
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                color: "black",
                            }}>
                                Đã có tài khoản?
                            </Text>
                            <Link href={"/(auth)/login"}>
                                <Text style={{ color: "black", textDecorationLine: 'underline' }}>
                                    Đăng nhập.
                                </Text>
                            </Link>
                        </View>
                        <SocialButton
                            title="Đăng ký với"
                        />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default SignUpPage