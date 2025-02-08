import CustomFlatList from "@/components/CustomFlatList/CustomFlatList";
import HomeCollecttion from "@/components/home/collection.home";
import HomeHeader from "@/components/home/header.home";
import SearchHomePage from "@/components/home/search.home";
import TopListHome from "@/components/home/top.list.home";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


const data = [
    { key: 1, name: "Top Quán Rating 5* tuần này", ref: "" },
    { key: 2, name: "Quán Mới Lên Sàn", ref: "" },
    { key: 3, name: "Ăn Thỏa Thích, Freeship 0Đ", ref: "" },
]



const HomeTab = () => {
    return (

        <CustomFlatList
            data={data}
            style={styles.list}
            renderItem={({ item }) => <HomeCollecttion name={item.name} />}
            HeaderComponent={<HomeHeader />}
            StickyElementComponent={<SearchHomePage />}
            // TopListElementComponent={<View style={styles.topList} />}
            TopListElementComponent={<TopListHome />}
        />

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ecf0f1",
        flex: 1,
        justifyContent: "center",
        overflow: "hidden",
        padding: 8
    },
    header: {
        borderColor: "red",
        borderWidth: 5,
        height: 100,
        marginBottom: 6,
        width: "100%"
    },
    item: {
        borderColor: "green",
        borderWidth: 1,
        height: 250,
        marginBottom: 10,
        width: "100%"
    },
    list: {
        overflow: "hidden"
    },
    sticky: {
        backgroundColor: "#2555FF50",
        borderColor: "blue",
        borderWidth: 5,
        height: 100,
        marginBottom: 6,
        width: "100%"
    },

});


export default HomeTab;