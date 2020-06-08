const bank = (state = {}, action) => {
    switch (action.type) {
        case 'CREATED_ACCOUNT':
            return {
                ...state,
                user_code: action.user_code,
                    type: action.type,
                    balance: 0
            };
        case 'WITHDREW_FROM_ACCOUNT':
            return {
                ...state,
                user_code: action.user_code,
                    type: action.type,
                    balance: state.balance - action.balance
            };
        case 'DEPOSITED_INTO_ACCOUNT':
            return {
                ...state,
                user_code: action.user_code,
                    type: action.type,
                    balance: state.balance + action.balance
            };
        default:
            return state;
    }
}

export default bank