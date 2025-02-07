import { APP_COLOR } from '@/utils/constant'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OTPTextView from 'react-native-otp-textinput'


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
const verify = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Xác thực tài khoản</Text>
            <Text style={{ marginVertical: 10 }}>Vui lòng nhập mã xác nhận đã gửi đến địa chỉ Email: </Text>
            <View style={{ marginVertical: 20 }}>
                <OTPTextView
                    // ref={input}
                    // containerStyle={styles.textInputContainer}
                    // handleTextChange={setOtpInput}
                    // handleCellTextChange={handleCellTextChange}
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
                <Text style={{ textDecorationLine: "underline", fontWeight: "600" }}> Gửi lại</Text>
            </View>
        </View>
    )
}

export default verify