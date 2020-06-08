import {
  Account
} from "../utils/constants/index.js";

// 1. 빈 값으로 계좌를 개설한다.
export const createAccount = () => {
  return {
    type: Account.CREATED_ACCOUNT,
    balance: 0,
  };
};

// 2. 입금
export const depositIntoAccount = (balance) => {
  return {
    type: Account.DEPOSITED_INTO_ACCOUNT,
    balance: balance,
  };
};

// 3. 출금
export const withdrawFromAccount = (balance) => {
  return {
    type: Account.WITHDREW_FROM_ACCOUNT,
    balance: balance,
  };
};