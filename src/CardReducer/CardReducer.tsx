import actionType from '../actionType'

const initialState = {
    cardDataSource:[
        {
            type : 'Ace',
            deck : 'spades',
            value : 1,
            image : require('../assets/cards/spades/A.png')
        },
        {
            type : 'J',
            deck : 'spades',
            value : 10,
            image : require('../assets/cards/spades/J.png')
        },
        {
            type : 'Q',
            deck : 'spades',
            value : 10,
            image : require('../assets/cards/spades/Q.png')
        },
        {
            type : 'K',
            deck : 'spades',
            value : 10,
            image : require('../assets/cards/spades/K.png')
        },
        {
            type : '2',
            deck : 'spades',
            value : 2,
            image : require('../assets/cards/spades/2.png')
        },
        {
            type : '3',
            deck : 'spades',
            value : 3,
            image : require('../assets/cards/spades/3.png')
        },
        {
            type : '4',
            deck : 'spades',
            value : 4,
            image : require('../assets/cards/spades/4.png')
        },
        {
            type : '5',
            deck : 'spades',
            value : 5,
            image : require('../assets/cards/spades/5.png')
        },
        {
            type : '6',
            deck : 'spades',
            value : 6,
            image : require('../assets/cards/spades/6.png')
        },
        {
            type : '7',
            deck : 'spades',
            value : 7,
            image : require('../assets/cards/spades/7.png')
        },
        {
            type : '8',
            deck : 'spades',
            value : 8,
            image : require('../assets/cards/spades/8.png')
        },
        {
            type : '9',
            deck : 'spades',
            value : 9,
            image : require('../assets/cards/spades/9.png')
        },
        {
            type : '10',
            deck : 'spades',
            value : 10,
            image : require('../assets/cards/spades/10.png')
        },
        {
            type : 'Ace',
            deck : 'hearts',
            value : 1,
            image : require('../assets/cards/hearts/A.png')
        },
        {
            type : 'J',
            deck : 'hearts',
            value : 10,
            image : require('../assets/cards/hearts/J.png')
        },
        {
            type : 'Q',
            deck : 'hearts',
            value : 10,
            image : require('../assets/cards/hearts/Q.png')
        },
        {
            type : 'K',
            deck : 'hearts',
            value : 10,
            image : require('../assets/cards/hearts/K.png')
        },
        {
            type : '2',
            deck : 'hearts',
            value : 2,
            image : require('../assets/cards/hearts/2.png')
        },
        {
            type : '3',
            deck : 'hearts',
            value : 3,
            image : require('../assets/cards/hearts/3.png')
        },
        {
            type : '4',
            deck : 'hearts',
            value : 4,
            image : require('../assets/cards/hearts/4.png')
        },
        {
            type : '5',
            deck : 'hearts',
            value : 5,
            image : require('../assets/cards/hearts/5.png')
        },
        {
            type : '6',
            deck : 'hearts',
            value : 6,
            image : require('../assets/cards/hearts/6.png')
        },
        {
            type : '7',
            deck : 'hearts',
            value : 7,
            image : require('../assets/cards/hearts/7.png')
        },
        {
            type : '8',
            deck : 'hearts',
            value : 8,
            image : require('../assets/cards/hearts/8.png')
        },
        {
            type : '9',
            deck : 'hearts',
            value : 9,
            image : require('../assets/cards/hearts/9.png')
        },
        {
            type : '10',
            deck : 'hearts',
            value : 10,
            image : require('../assets/cards/hearts/10.png')
        },
        {
            type : 'Ace',
            deck : 'clubs',
            value : 1,
            image : require('../assets/cards/clubs/A.png')
        },
        {
            type : 'J',
            deck : 'clubs',
            value : 10,
            image : require('../assets/cards/clubs/J.png')
        },
        {
            type : 'Q',
            deck : 'clubs',
            value : 10,
            image : require('../assets/cards/clubs/Q.png')
        },
        {
            type : 'K',
            deck : 'clubs',
            value : 10,
            image : require('../assets/cards/clubs/K.png')
        },
        {
            type : '2',
            deck : 'clubs',
            value : 2,
            image : require('../assets/cards/clubs/2.png')
        },
        {
            type : '3',
            deck : 'clubs',
            value : 3,
            image : require('../assets/cards/clubs/3.png')
        },
        {
            type : '4',
            deck : 'clubs',
            value : 4,
            image : require('../assets/cards/clubs/4.png')
        },
        {
            type : '5',
            deck : 'clubs',
            value : 5,
            image : require('../assets/cards/clubs/5.png')
        },
        {
            type : '6',
            deck : 'clubs',
            value : 6,
            image : require('../assets/cards/clubs/6.png')
        },
        {
            type : '7',
            deck : 'clubs',
            value : 7,
            image : require('../assets/cards/clubs/7.png')
        },
        {
            type : '8',
            deck : 'clubs',
            value : 8,
            image : require('../assets/cards/clubs/8.png')
        },
        {
            type : '9',
            deck : 'clubs',
            value : 9,
            image : require('../assets/cards/clubs/9.png')
        },
        {
            type : '10',
            deck : 'clubs',
            value : 10,
            image : require('../assets/cards/clubs/10.png')
        },
        {
            type : 'Ace',
            deck : 'diamonds',
            value : 1,
            image : require('../assets/cards/diamonds/A.png')
        },
        {
            type : 'J',
            deck : 'diamonds',
            value : 10,
            image : require('../assets/cards/diamonds/J.png')
        },
        {
            type : 'Q',
            deck : 'diamonds',
            value : 10,
            image : require('../assets/cards/diamonds/Q.png')
        },
        {
            type : 'K',
            deck : 'diamonds',
            value : 10,
            image : require('../assets/cards/diamonds/K.png')
        },
        {
            type : '2',
            deck : 'diamonds',
            value : 2,
            image : require('../assets/cards/diamonds/2.png')
        },
        {
            type : '3',
            deck : 'diamonds',
            value : 3,
            image : require('../assets/cards/diamonds/3.png')
        },
        {
            type : '4',
            deck : 'diamonds',
            value : 4,
            image : require('../assets/cards/diamonds/4.png')
        },
        {
            type : '5',
            deck : 'diamonds',
            value : 5,
            image : require('../assets/cards/diamonds/5.png')
        },
        {
            type : '6',
            deck : 'diamonds',
            value : 6,
            image : require('../assets/cards/diamonds/6.png')
        },
        {
            type : '7',
            deck : 'diamonds',
            value : 7,
            image : require('../assets/cards/diamonds/7.png')
        },
        {
            type : '8',
            deck : 'diamonds',
            value : 8,
            image : require('../assets/cards/diamonds/8.png')
        },
        {
            type : '9',
            deck : 'diamonds',
            value : 9,
            image : require('../assets/cards/diamonds/9.png')
        },
        {
            type : '10',
            deck : 'diamonds',
            value : 10,
            image : require('../assets/cards/diamonds/10.png')
        }
    ]
};
const CardReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case actionType.CARD_DATA:
            return Object.assign({}, state, { cardDataSource: action.cardDataSource });

        default:
            return state;
    }
};
export default CardReducer;