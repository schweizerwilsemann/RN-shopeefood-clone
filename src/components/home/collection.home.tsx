import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        borderColor: "green",
        borderWidth: 1,
        height: 250,
        marginBottom: 10,
        width: "100%"
    },
})

interface IProps {
    name: string;

}
const HomeCollecttion = (props: IProps) => {
    const { name } = props;
    return (
        <View style={styles.container}>
            <Text>
                {name}
            </Text>
        </View>
    )
}

export default HomeCollecttion