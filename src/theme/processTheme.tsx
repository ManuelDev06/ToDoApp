import { StyleSheet } from "react-native";

export const stylesProcess = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: "100%",
        height: 80,
        borderWidth: 3,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    content:{
        width:"82%",
        height: "100%",
    },
    title:{
        fontWeight: '800',
        color: 'black'
    },
    description:{
        fontSize: 12
    },
    button:{
        backgroundColor: '#ADADAD',
        width: 60,
        marginLeft: 5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonTitle:{
        color: 'white',
        fontWeight: '800'
    }
});