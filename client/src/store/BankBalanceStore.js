import {
    EventEmitter
} from "fbemitter"
import AppDispatcher from "../dispatchers/AppDispatcher"
import {
    Account
} from "../utils/constants/index"

const CHANGE_EVENT = "change"
let _emitter = new EventEmitter()
let balance = 0

let BankBalanceStore = {
    getState() {
        return balance
    },

    addListener(callback) {
        return _emitter.addListener(CHANGE_EVENT, callback)
    }
}

BankBalanceStore.dispatchToken = AppDispatcher.register((action) => {

    switch (action.type) {
        case Account.CREATED_ACCOUNT:
            balance = 0
            _emitter.emit(CHANGE_EVENT)
            break;
        case Account.DEPOSITED_INTO_ACCOUNT:
            balance = balance + action.amount
            _emitter.emit(CHANGE_EVENT)
            break;
        case Account.WITHDREW_FROM_ACCOUNT:
            balance = balance - action.amount
            _emitter.emit(CHANGE_EVENT)
            break;
        default:
            break;
    }


})

export default BankBalanceStore;