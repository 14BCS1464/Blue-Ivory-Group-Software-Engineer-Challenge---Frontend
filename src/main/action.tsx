import actionType from "../actionType";


//this mehod is use to start new game or suffel card
export const startNewGame = () => {
    //declear card count varible to  first update
    var cardCount = 0;

    return function (dispatch: Function, getState: Function) {
        //get all the card array
        let tempData = getState().CardReducer.cardDataSource

        //suffle the array which we get 
        let suffeledArray = suffulCard(tempData)

        //upate latest array to the store 
        dispatch({
            type: actionType.CARD_DATA,
            cardDataSource: Array.from(suffeledArray)
        })

        //create temp variable [] for give card to dealer first time
        let playerCard = []

        //create temp variable [] for give card to palyer first time
        let dealerCard = []

        //Beacause inital we show only two cards [1,3]card to the plaryer and [2,4,]card to the dealer 
        for (let i = 0; i < 2; i++) {
            playerCard.push(suffeledArray[cardCount]);
            cardCount++

            dealerCard.push(suffeledArray[cardCount]);
            cardCount++
        }


        //update  Score accoring to the card they have 
        dispatch({
            type: actionType.PLAYER_POINT,
            playerPoint: managePlayerPoints(playerCard)
        })

        //Update  Dealer Score accoding to  card 
        dispatch({
            type: actionType.DEALER_POINT,
            dealerPoint: managePlayerPoints(dealerCard)
        })

        //Update  player Score accoding to  card 
        dispatch({
            type: actionType.PLAYER_CARD,
            playerCard: Array.from(playerCard)
        })

        //Update  Dealer   card 
        dispatch({
            type: actionType.DEALER_CARD,
            dealerCard: Array.from(dealerCard)
        })

        //make game over false 
        dispatch({
            type: actionType.IS_GAMEOVER,
            isGameOver: false
        })

        //update  card dount 
        dispatch({
            type: actionType.CARD_COUNT,
            cardCount: cardCount
        })

    }
}

//uffel the hole arry using basic algo
const suffulCard = (cardArray: Array<any>) => {
    for (let i = cardArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
    }
    return cardArray;
}

//this method is use o amnge the playe and dealer score 
const managePlayerPoints = (getArray: Array<any>) => {
    //this vriable hnadle the  is Ace card come again
    let isAceCome = false,

        //calculate point and store in this variable
        points = 0;

    //itrate the hole array and  mange score , if"Ace card come first time it added 10 into tyou score other whish -10
    getArray.map((card, _index) => {
        if (card.type == 'Ace' && !isAceCome) {
            isAceCome = true;
            points = points + 10;
        }
        points = points + card.value;
    });

    //if Ace card come again and score is more the 21 then -10
    if (isAceCome && points > 21) {
        points = points - 10;
    }

    return points;
}


//This method for hit request  (if player want to add more card )
export const addNewCard = (callBack: Function) => {
    return function (dispatch: Function, getState: Function) {
        //for car mamage (it is for which card is given to the player or dealer)
        let cardCount = getState().ParentScreenReducer.cardCount + 1;

        //get all the card array data 
        let tempData = getState().CardReducer.cardDataSource

        //these are those card which are in player hand(get it for update )
        let playerCard = getState().ParentScreenReducer.playerCard;

        //give the card to the player from main Array data Source
        playerCard.push(tempData[cardCount])

        //Updating card count
        dispatch({
            type: actionType.CARD_COUNT,
            cardCount: cardCount
        })

        //upadting player hand card
        dispatch({
            type: actionType.PLAYER_CARD,
            playerCard: Array.from(playerCard)
        })

        //maneging the score of the player on the base of card they have by using "managePlayerPoints" method and
        //Store it to the  state
        dispatch({
            type: actionType.PLAYER_POINT,
            playerPoint: managePlayerPoints(playerCard)
        })

        //if player taking card from  dealer and its score become  more then 21
        if (managePlayerPoints(playerCard) > 21) {
            //send the info to the component that you lose the game
            callBack("you lose")

            //make game Over boolean true
            dispatch({
                type: actionType.IS_GAMEOVER,
                isGameOver: true
            })

        }
    }
}



// it is then call when dealer play his turn
export const dealerTurn = (callBack: Function) => {
    return function (dispatch: Function, getState: Function) {
        //for card mamage (it is for which card is given to the player or dealer)
        let cardCount = getState().ParentScreenReducer.cardCount + 1;

        console.warn(cardCount)

        //get all the carda array data 
        let tempData = getState().CardReducer.cardDataSource

        //get the dealer Scrore from global store
        let dealerPoint = getState().ParentScreenReducer.dealerPoint;

        //get the card those dealer have 
        let dealerCard = getState().ParentScreenReducer.dealerCard;

        //these are those card which are in player hand(get it for update )
        let playerCard = getState().ParentScreenReducer.playerCard;

        //get the player  point (score ) from global state
        let playerPoint = getState().ParentScreenReducer.playerPoint;

        //dealer can pick the card while his score is less the 17
        while (dealerPoint < 17) {
            dealerCard.push(tempData[cardCount]);
            cardCount++

            // counting the score 
            dealerPoint = managePlayerPoints(dealerCard)

        }

        //upadting the card count 
        dispatch({
            type: actionType.CARD_COUNT,
            cardCount: cardCount
        })

        //upadting the  deeler card 
        dispatch({
            type: actionType.DEALER_CARD,
            dealerCard: Array.from(dealerCard)
        })

        //managing th score according to the card
        dispatch({
            type: actionType.DEALER_POINT,
            dealerPoint: managePlayerPoints(dealerCard)
        })

        //this method handle all the use case  for the  game 
        usecase(playerPoint, dealerPoint, playerCard, (data: any) => {
            callBack(data)
        })

        //Upading the game over boolean
        dispatch({
            type: actionType.IS_GAMEOVER,
            isGameOver: true
        })

    }

}

// for handling all the use case for the game
const usecase = (playerPoint: number, dealerPoint: number, playerCard: Array<any>, callBack: Function) => {
    //if the player have two card and score is euals to 21 
    if (playerPoint == 21 && playerCard.length == 2) {
        callBack("Player BackJack")
    }
    if ((playerPoint < 22 && dealerPoint < playerPoint) || (dealerPoint > 21 && playerPoint < 22)) {
        callBack("You win")
    }

    //when dealer score is greter then 21 and  plaer score is >=21
    else if (dealerPoint > 21 && playerPoint < 22) {
        callBack(" you win")
    }

    //when player score is greter then 21 and  dealer score is <=21
    else if (playerPoint > 21 && dealerPoint <= 21) {
        callBack("Bust ......!")
    }

    //when both have same score 
    else if (playerPoint == dealerPoint) {
        callBack("game push")
    }

}