import actionType from "../actionType";

const initialState = {

    playerCard: [],
    dealerCard: [],
    isGameOver: false,
    cardCount: 0,
    playerPoint: 0,
    dealerPoint: 0



};
const ParentScreenReducer = (state = initialState, action: any) => {
    switch (action.type) {
 


        case actionType.PLAYER_CARD:
            return Object.assign({}, state, { playerCard: action.playerCard });

        case actionType.DEALER_CARD:
            return Object.assign({}, state, { dealerCard: action.dealerCard });

        case actionType.IS_GAMEOVER:
            return Object.assign({}, state, { isGameOver: action.isGameOver });

        case actionType.CARD_COUNT:
            return Object.assign({}, state, { cardCount: action.cardCount });

        case actionType.PLAYER_POINT:
            return Object.assign({}, state, { playerPoint: action.playerPoint });

        case actionType.DEALER_POINT:
            return Object.assign({}, state, { dealerPoint: action.dealerPoint });

        default:
            return state;
    }
};
export default ParentScreenReducer;