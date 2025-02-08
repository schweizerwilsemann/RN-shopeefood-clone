import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { APP_COLOR } from '@/utils/constant';

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        gap: 3
    },
    location: {
        flexDirection: "row",
        gap: 5,
        marginHorizontal: 5
    }
})
const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={{ marginHorizontal: 5, fontWeight: "600" }}>
                Giao đến:
            </Text>
            <View style={styles.location}>
                <Entypo name="location" size={20} color={APP_COLOR.ORANGE} />
                <Text>Đường 448 Lê Văn Việt, Tp Thủ Đức, TpHCM </Text>
            </View>
        </View>
    )
}

export default HomeHeader