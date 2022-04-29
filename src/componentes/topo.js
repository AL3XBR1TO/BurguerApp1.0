import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Topo() {
    return<>
    <View style={estilos.fundo}>
    <Text style={estilos.entrega}>65min</Text>
    <Text style={estilos.TempoEntrega}>Preço minimo = R$ 25,00</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: "#a9a9a9" ,
        marginTop: 50,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000000",
        marginHorizontal: 10

    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        lineHeight: 50,
        fontWeight: 'bold',
        fontFamily: "serif"
    },
    entrega: {
        fontSize: 20,
        textAlign: 'right',
        marginRight: 10
    },
    TempoEntrega: {
        fontSize: 15,
        textAlign: 'right',
        marginRight: 10,
    }
})