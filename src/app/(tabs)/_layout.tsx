import { APP_COLOR } from "@/utils/constant";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabLayout = () => {

    const getIcons = (routeName: string, focused: boolean, size: number) => {
        if (routeName === "index") {
            return (
                <MaterialCommunityIcons
                    name="food-fork-drink"
                    size={size}
                    color={focused ? APP_COLOR.ORANGE : APP_COLOR.GRAY}
                />)
        }
        if (routeName === "order") {
            return (
                <MaterialIcons
                    name="list-alt"
                    size={size}
                    color={focused ? APP_COLOR.ORANGE : APP_COLOR.GRAY}
                />)
        }
        if (routeName === "favourite") {
            return (focused ?
                <AntDesign
                    name="heart"
                    size={size}
                    color={APP_COLOR.ORANGE}
                />
                :
                <AntDesign
                    name="heart"
                    size={size}
                    color={APP_COLOR.GRAY}
                />)
        }
        if (routeName === "notification") {
            return (
                focused ?
                    <Octicons name="bell-fill"
                        size={size}
                        color={APP_COLOR.ORANGE}
                    />
                    :
                    <Octicons name="bell"
                        size={size}
                        color={APP_COLOR.GRAY}
                    />
            )
        }
        if (routeName === "account") {
            return (
                focused ?
                    <MaterialCommunityIcons name="account" size={size} color={APP_COLOR.ORANGE} />
                    :
                    <MaterialCommunityIcons name="account-outline" size={size} color={APP_COLOR.GRAY} />
            )
        }
        return (<>
        </>)
    }
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return getIcons(route.name, focused, size);
                },
                headerShown: false,
                tabBarLabelStyle: { paddingBottom: 3 },
                tabBarActiveTintColor: APP_COLOR.ORANGE
            })}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Trang Chủ"
                }}
            />
            <Tabs.Screen
                name="order"
                options={{
                    title: "Đơn hàng"
                }}
            />
            <Tabs.Screen
                name="favourite"
                options={{
                    title: "Đã Thích"
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    title: "Thông Báo"
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: "Tôi"
                }}
            />
        </Tabs>
    )
}

export default TabLayout;