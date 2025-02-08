import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { APP_COLOR } from '@/utils/constant';

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 5,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: APP_COLOR.GRAY,
        borderRadius: 3,
        backgroundColor: APP_COLOR.GRAY
    }
})
const SearchHomePage = () => {
    return (
        <View style={styles.container}>
            <EvilIcons name="search" size={20} color="black" />
            <Text style={{ color: "#707070" }}>
                Deal Hot Hôm Nay Từ 0đ
            </Text>
        </View>
    )
}

export default SearchHomePage