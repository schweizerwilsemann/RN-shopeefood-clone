import LoadingOverlay from '@/components/loading/overlay'
import { resendCodeAPI, verifyCodeAPI } from '@/utils/api'
import { APP_COLOR } from '@/utils/constant'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { Easing, Keyboard, StyleSheet, Text, View } from 'react-native'
import OTPTextView from 'react-native-otp-textinput'
import Toast from 'react-native-root-toast'


const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 20
    }
})
const VerifyPage = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [code, setCode] = useState<string>("");
    const otpRef = useRef<OTPTextView>(null);

    const { email, isLogin } = useLocalSearchParams()

    const verifyCode = async () => {
        setIsSubmit(true);
        const res = await verifyCodeAPI(email as string, code);
        setIsSubmit(false);

        if (res.data) {
            //clear input
            otpRef.current?.clear();
            Toast.show("Đăng ký thành công!", {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: APP_COLOR.ORANGE,
                opacity: 1
            });

            if (isLogin) {
                router.replace('/(tabs)')
            }
            else
                router.replace("/(auth)/login")
        }
        else {
            Toast.show(res.message as string, {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: APP_COLOR.ORANGE,
                opacity: 1
            })
        }
        Keyboard.dismiss();
    }
    useEffect(() => {
        if (code && code.length === 6) {
            // call api
            verifyCode();
        }
    }, [code]);

    const handleResendCode = async () => {
        otpRef.current?.clear();
        const res = await resendCodeAPI(email as string);
        const message = res.data ? "Resend code thành công" : res.message;
        if (res.data) {
            Toast.show(message as string, {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: "green",
                opacity: 1
            })
        }
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Xác thực tài khoản</Text>
                <Text style={{ marginVertical: 10 }}>Vui lòng nhập mã xác nhận đã gửi đến địa chỉ Email: </Text>
                <View style={{ marginVertical: 20 }}>
                    <OTPTextView
                        ref={otpRef}
                        handleTextChange={setCode}
                        autoFocus
                        inputCount={6}
                        keyboardType="numeric"
                        tintColor={APP_COLOR.ORANGE}
                        textInputStyle={{
                            borderWidth: 1,
                            borderColor: APP_COLOR.GRAY,
                            borderBottomWidth: 1,
                            borderRadius: 5,
                            // @ts-ignore:next-line
                            color: APP_COLOR.ORANGE
                        }}
                    />
                </View>
                <View>
                    <Text>Không nhận được mã xác nhận?</Text>
                    <Text
                        onPress={() => { handleResendCode() }}
                        style={{ textDecorationLine: "underline", fontWeight: "600" }}
                    >
                        Gửi lại
                    </Text>
                </View>
            </View>
            {
                isSubmit && <LoadingOverlay />
            }
        </>
    )
}

export default VerifyPage;