import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import backCard from '../assets/cards/back.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//this is for create the  speration beweet the card when they lie on each othe
const CARD_SEPARATION = 50;

interface Props {
    cards: Array<any>,
    gameover: boolean,
    isDealer: boolean

}
interface State {

}

class CardDeck extends Component<State, Props> {
    render() {
        const { cards, isDealer, gameover } = this.propsgititi
        return (
            <View style={styles.container}>
                <View
                    style={[
                        { marginLeft: -(cards.length * CARD_SEPARATION) / 1.8 }
                        , styles.row]}>
                    {cards.map((card: any, i: number) => {
                        return (
                            <View
                                key={i}
                                style={[
                                    i > 0 ? {
                                        position: "absolute",
                                        zindex: (i * 10),
                                        left: (i * CARD_SEPARATION),
                                    } : {},

                                    styles.extarStyle

                                ]}
                            ><Image
                                    source={(isDealer && i == 0 && !gameover) ? backCard : cards[i].image}
                                    style={styles.imageStyle}
                                    resizeMode={"stretch"}
                                /></View>)
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center"
    },
    row: {

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }, extarStyle: {
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 1
    }, imageStyle: {

        width: wp('26%'),
        height: hp('26%'),
        elevation: 5


    }
});

export default CardDeck;