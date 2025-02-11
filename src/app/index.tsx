
import { Link, Redirect, router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";
import { getAccountAPI } from "@/utils/api";
import { useCurrentApp } from "@/context/app.context";
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();


const RootPage = () => {
    const { setAppState } = useCurrentApp();

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                const res = await getAccountAPI();

                if (res.data) {
                    //success
                    setAppState({
                        user: res.data.user,
                        access_token: await AsyncStorage.getItem("access_token")
                    })
                    router.replace("/(tabs)")
                } else {
                    //error
                    router.replace("/(auth)/welcome")
                }

            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);
    // if (true) {
    //     return (
    //         <Redirect href={"/(tabs)"} />
    //     )
    // }
    return (
        <>

        </>
    )
}

export default RootPage;