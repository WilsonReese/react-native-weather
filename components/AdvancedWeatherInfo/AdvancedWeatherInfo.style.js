import { StyleSheet, View, registerCallableModule } from "react-native";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        // paddingHorizontal: 16,
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,.5)',
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 15,
    },
    label: {
        fontSize: 18,
    },
    value: {
        fontSize: 14
    },
});

export function StyledContainer({children}) {
    return <View style={{alignItems:"center"}}>{children}</View>
}

