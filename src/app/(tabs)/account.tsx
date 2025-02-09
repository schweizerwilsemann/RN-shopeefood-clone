import ShareInput from "@/components/input/share.input";
import { useCurrentApp } from "@/context/app.context";
import { Image, Platform, StyleSheet, Text, View } from "react-native"


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 50
    }
})
const AccountTab = () => {
    const { theme, appState } = useCurrentApp();
    const backend = Platform.OS === "android"
        ? process.env.EXPO_PUBLIC_ANDROID_API_URL
        : process.env.EXPO_PUBLIC_IOS_API_URL;
    const baseImage = `${backend}/images/avatar`;
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center", gap: 5 }}>
                <Image
                    style={{ height: 150, width: 150 }}
                    source={{ uri: `${baseImage}/${appState?.user.avatar}` }}
                />
            </View>
            <Text> {appState?.user.name}</Text>
            <View>
                <ShareInput
                    title="Họ Tên"
                    // onChangeText={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    // value={ }
                    value={appState?.user.name}
                />
                <ShareInput
                    title="Email"
                    keyboardType="email-address"
                    value={appState?.user.email}
                />
                <ShareInput
                    title="Số điện thoại"
                    keyboardType="numeric"
                    value={appState?.user.phone}
                />
            </View>
        </View>
    )
}

export default AccountTab;