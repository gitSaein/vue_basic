import {
    AppDispatcher
} from "../dispatchers/AppDispatcher.js"
import {
    Account
} from "../utils/constants/index.js"

let BankActions = {

    // 1. 빈 값으로 계좌를 개설한다.
    createAccount() {
        AppDispatcher.dispatch({
            type: Account.CREATED_ACCOUNT,
            amount: 0
        })
    },

    // 2. 입금
    depositIntoAccount(amount) {
        AppDispatcher.dispatch({
            type: Account.DEPOSITED_INTO_ACCOUNT,
            amount: amount
        })
    },

    // 3. 출금
    withdrawFromAccount(amount) {
        AppDispatcher.dispatch({
            type: Account.WITHDREW_FROM_ACCOUNT,
            amount: amount
        })
    }

}

export default BankActions