import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Easing,
  Alert,
  Animated,
  Image,
  Modal,
  Text, TouchableOpacity
} from 'react-native';

import { CardDeck } from '../components';
import { startNewGame, addNewCard,  dealerTurn } from './action'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from "react-redux";


interface State {

}
interface Props {
  startNewGame: Function,
  addNewCard: Function,
  dealerTurn: Function,
  cardDataSource: Array<any>,
  playerCard: Array<any>,
  dealerCard: Array<any>,
  playerPoint: number,
  dealerPoint: number,
  isGameOver: number
}


class ParentClass extends Component<State, Props> {
  constructor(props) {
    super(props)
    this.state = {

      isModalOpne: true
    }

  }

  componentDidMount() {
    //this method is call to start and reStart game
    this.props.startNewGame();

  }

  //this method ntells the user to is he/she win/lose the game 
  createTwoButtonAlert = (msg: String) =>
    Alert.alert(
      "",
      msg,
      [
        {
          text: "OK", onPress: () => setTimeout(() => {
            this.props.startNewGame()
          }, 1000)
        }
      ],

    );


  //this method bind the user to game started with player nto dealer
  onDealerTurnPress = () => {
    if (this.props.playerCard.length <= 2) {

      return;
    } else {

      this.props.dealerTurn((msg: any) => {
        this.createTwoButtonAlert(msg)
      })
    }
  }

  //this method is resposible for ap intro
showModal=()=>{
  return(
    <Modal
    animationType="slide"
    transparent={false}
    visible={this.state.isModalOpne}
    onRequestClose={() => {
      this.setState({
        isModalOpne: false
      })
    }}
  >
    <View style={styles.modalParent} >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{"Blackjack the numeral cards 2 to 10 have their face values, Jacks, Queens and Kings are valued at 10, and Aces can have a value of either 1 or 11. The Ace is always valued at 11 unless that would result in the hand going over 21, in which case it is valued as 1Any hand with an Ace valued as 11 is called a ‘soft’ hand. All other hands are ‘hard’ hands.A starting hand of a 10 valued card and an Ace is called a Blackjack or natural and beats all hands other than another Blackjack. If both the player and dealer have Blackjack, the result is a push (tie): neither the player nor the bank wins and the bet is returned to the player."}</Text>
      </View>
      <TouchableOpacity onPress={() => this.setState({
        isModalOpne: false
      })} style={[styles.suffleButtonStyle, { marginTop: hp('5%') }]}>
        <Text>
          {"hide "}
        </Text>
      </TouchableOpacity>
    </View>
  </Modal>

  );
}


  render() {

    return (
      <View style={{ flex: 1, backgroundColor: '#2E86C1' }}>
        <View style={styles.center}>
          <Text style={styles.score} >{`Dealer Point  ${this.props.dealerPoint}`}</Text>
          <CardDeck
            cards={this.props.dealerCard}
            isDealer={true}
            gameover={this.props.isGameOver}
          />
        </View>



        <View style={styles.center}>
          <Text style={styles.score}>{`Player Point  ${this.props.playerPoint}`}</Text>
          <CardDeck
            cards={this.props.playerCard}
          />
        </View>
        <View style={styles.containerStyle}>
          {this.props.playerCard.length <= 2 ? <TouchableOpacity
            onPress={() => this.props.startNewGame()}
            style={styles.suffleButtonStyle}>
            <Text>
              {"Suffle Card"}
            </Text>
          </TouchableOpacity> : null}

          <TouchableOpacity onPress={() => this.props.addNewCard((result: any) => {
            this.createTwoButtonAlert(result)

          })} style={styles.suffleButtonStyle}>
            <Text>
              {"Hit card"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onDealerTurnPress()}
            style={styles.suffleButtonStyle}>
            <Text>
              {"Dealer Turn"}
            </Text>
          </TouchableOpacity>
        </View>

     {this.showModal()}


      </View>
    )
  }

}
const styles = StyleSheet.create({

  center: {
    alignItems: "center"
  },
  suffleButtonStyle: {
    height: hp('6%'),
    width: wp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: hp('6%'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  containerStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp('10%')

  }, score: {
    fontSize: wp('5%'),
    margin: hp('4%'),
    color: "white",
    fontWeight: 'bold'
  },
  imageStyle: {

    width: wp('26%'),
    height: hp('26%'),
    elevation: 5


  }, modalText: {
    fontSize: wp('5%'),
    color: "white",
    marginTop: hp('5%'),
    lineHeight: wp('7%')
  },modalParent:{
     flex: 1, alignItems: 'center', backgroundColor: '#2E86C1', padding: wp('5%') 
  }
});

const mapStateToProps = (state: any) => {
  return {
    cardDataSource: state.CardReducer.cardDataSource,
    playerCard: state.ParentScreenReducer.playerCard,
    dealerCard: state.ParentScreenReducer.dealerCard,
    totalBet: state.ParentScreenReducer.totalBet,
    amount: state.ParentScreenReducer.amount,
    playerPoint: state.ParentScreenReducer.playerPoint,
    dealerPoint: state.ParentScreenReducer.dealerPoint,
    isGameOver: state.ParentScreenReducer.isGameOver,


  }
};

const mapDispatchToProps = {
  startNewGame: startNewGame,
  addNewCard: addNewCard,

  dealerTurn: dealerTurn
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentClass);
