import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ShareButton from './share.button'
import TextBetweenLine from './text.between.line'
import FacebookLogo from '@/assets/auth/facebook.png'
import GoogleLogo from '@/assets/auth/google.png'

const styles = StyleSheet.create({
    welcomeBtn: {
        flex: 0.4,
        gap: 30
    },
})
const SocialButton = () => {
    return (
        <View style={styles.welcomeBtn}>
            <TextBetweenLine title="Đăng nhập với" />

            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 30
            }}>
                <ShareButton
                    title="faceBook"
                    onPress={() => { alert("me") }}
                    textStyle={{ textTransform: "uppercase" }}
                    btnStyle={{
                        justifyContent: "center",
                        borderRadius: 30,
                        backgroundColor: "#fff"
                    }}
                    icons={
                        <Image source={FacebookLogo} />
                    }
                />

                <ShareButton
                    title="google"
                    onPress={() => { alert("me") }}
                    textStyle={{ textTransform: "uppercase" }}
                    btnStyle={{
                        justifyContent: "center",
                        borderRadius: 30,
                        paddingHorizontal: 20,
                        backgroundColor: "#fff"
                    }}
                    icons={
                        <Image source={GoogleLogo} />
                    }
                />

            </View>
        </View>
    )
}

export default SocialButton