import React from 'react';
import { FlatList, Text,  View, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import Topo from '../componentes/topo';

import sultaoBurguer from '../../assets/fotosHamburguer/sultaoBurguer.jpg';
import supremoBurguer from '../../assets/fotosHamburguer/supremoBurguer.jpg';
import master from '../../assets/fotosHamburguer/master.jpg';
import smashDuo from '../../assets/fotosHamburguer/smashDuo.jpg';
import smash from '../../assets/fotosHamburguer/smash.jpg';
import master2 from '../../assets/comboTrio/master.jpg';
import smash2 from '../../assets/comboTrio/smash.jpg';
import smashDuo2 from '../../assets/comboTrio/smashDuo.jpg';
import smashTrio2 from '../../assets/comboTrio/smashTrio.jpg';
import supremo2 from '../../assets/comboTrio/supremo.jpg';
import masterBurguer3 from '../../assets/fotosHamburguerOferta/masterBurguer.jpg';
import smashDuo3 from '../../assets/fotosHamburguerOferta/smashDuo.jpg'
import supremo3 from '../../assets/fotosHamburguerOferta/supremo.jpg';
import smash3 from '../../assets/fotosHamburguerOferta/smash.jpg';
import smashTrio3 from '../../assets/fotosHamburguerOferta/smashTrio.jpg';



export default function BURGUER() {
    const cardapio = {
        lista: [
        {
            titulo: 'Ofertas da semana',
            nome: "DOBRO MASTER BURGER",
            imagem: masterBurguer3,
            descricao: '2x MASTER BURGER',
            preco: 'R$ 45,00'
        },
        {
            nome: "DOBRO SMASH DUO",
            imagem: smashDuo3,
            descricao: '2X SMASH DUO',
            preco: 'R$ 35,00'
        },
        {
            nome: "DOBRO SUPREMO",
            imagem: supremo3,
            descricao: '2X SUPREMO BURGER',
            preco: 'R$ 60,00'
        },
        {
            nome: "DOBRO SMASH",
            imagem: smash3,
            descricao: '2X SMASH BURGER',
            preco: 'R$ 28,00'
        },
        {
            nome: "DOBRO SMASH TRIO",
            imagem: smashTrio3,
            descricao: '2X SMASH TRIO',
            preco: 'R$ 45,00'
        },     
        {   
            titulo: "Hamburgues da casa", 
            nome: "SULTÃO BURGUER",
            imagem: sultaoBurguer,
            descricao: 'Nosso novo lançamento, Burger de Picanha Nobre Pão Brioche, com um burger de 140g de Blend de cortes especiais e queijo Mussarela , acompanhado de cortes de picanha nobre aproximadamente 120g.',
            preco: 'R$ 39,00'
        },
        {
            nome: "SUPREMO BURGER",
            imagem: supremoBurguer,
            descricao: 'Pão Brioche, 2x 140g Carne Artesanal Blend de Cortes Especiais, 3 Aneis de Cebola, Mussarela , Bacon, Tomate, Alface, Cebola Caramelizada, Molho Especial',
            preco: 'R$ 32,00'
        },
        {
            nome: "MASTER BURGER",
            imagem: master,
            descricao: 'Pão Brioche, 140g Carne Artesanal Blend de Cortes Especiais, Mussarela , Bacon, Tomate, Alface, Cebola Caramelizada, Molho Especial',
            preco: 'R$ 25,00'
        },
        {
            nome: "SMASH DUO",
            imagem: smashDuo,
            descricao: 'Pão Brioche, 2x 80g Carne Artesanal Blend de Cortes Especiais, Smash,Mussarela , Cebola Caramelizada, Molho Especial',
            preco: 'R$ 20,00'
        },
        {
            nome: "SMASH",
            imagem: smash,
            descricao: 'Pão Brioche, 80g Carne Artesanal Smash Blend de Cortes Especiais, Mussarela , Cebola Caramelizada, Molho Especial',
            preco: 'R$ 45,00'
        },
        {    
            titulo: 'Combos da casa',
            nome: "TRIO MASTER BURGER",
            imagem: master2,
            descricao: 'Master Burger com 200g de Batata-Frita e Refrigerante Lata',
            preco: 'R$ 35,00'
        },
        {
            nome: "TRIO SMASH",
            imagem: smash2,
            descricao: 'Smash com 200g de batata-frita e refrigerante lata',
            preco: 'R$ 25,00'
        },
        {
            nome: "TRIO SMASH DUO",
            imagem: smashDuo2,
            descricao: 'Smash Duo com 200g de batata-frita e refrigerante lata',
            preco: 'R$ 30,00'
        },
        {
            nome: "TRIO SMASH TRIO ",
            imagem: smashTrio2,
            descricao: 'Smash Trio com 200g de batata-frita e refrigerante lata',
            preco: 'R$ 35,00'
        },
        {
            nome: "TRIO SUPREMO BURGER",
            imagem: supremo2,
            descricao: 'Supremo Burger com 200g de batata frita e refrigerante lata',
            preco: 'R$ 42,00'
        }
    ]}

    const renderItem = ({item: {titulo, nome, imagem, descricao, preco}}) => <>
        <TouchableOpacity>
        <Text style={estilos.titulo}>{titulo}</Text>
        <View style={estilos.fundo}>        
            <Image style={estilos.imagem} source={imagem}/>
            <View flexDirection={'column'} >
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>  
                <Text flexDirection style={estilos.preco}>{preco}</Text>  
            </View>    
        </View> 
        </TouchableOpacity>
        </>
    return <>
    <FlatList 
    ListHeaderComponent={Topo}
    data={cardapio.lista}
    renderItem={renderItem}
    keyExtractor={({nome}) => nome} />
    </>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#f6f6f6",
        flexDirection: "row",   
    },
    titulo: {
        marginTop: 20,
        marginLeft: 10,
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        backgroundColor: "#f6f6f6"
    },
    imagem: {
        width: 170,
        height: 170,
        marginHorizontal: 10,
        borderRadius: 5, 
        marginVertical: 10   

    },
    nome:{
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 200,

    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 10,
        marginRight: 200
        
    },
    preco: {
        color: "red",
        fontSize: 20,
        marginLeft: 10
    }
})