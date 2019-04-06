import { TransactionService } from "../../common/api.service";
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../mutations.type";
import { GET_TRANSACTIONS, DESCRIPTION_EDIT } from "../actions.type";
import moment from "moment";

const state = {
  transactions: [],
  isLoading: true,
  transactionCount: 0,
  errors: {}
};

const getters = {
  transactionCount(state) {
    return state.transactionCount;
  },
  transactions(state) {
    return state.transactions;
  },
  isLoading(state) {
    return state.isLoading;
  },
  errors(state) {
    return state.errors;
  }
};

const actions = {
  [GET_TRANSACTIONS](context, params) {
    context.commit(GET_DATA);
    return TransactionService.query(params.filters)
      .then(({ data }) => {
        context.commit(GET_DATA_SUCCESS, data);
      })
      .catch(error => {
        context.commit(GET_DATA_ERROR, error);
      });
  },
  async [DESCRIPTION_EDIT](context, payload) {
    await TransactionService.post(payload);
  }
};

const mutations = {
  [GET_DATA](state) {
    state.isLoading = true;
  },
  [GET_DATA_SUCCESS](state, { transactions, transactionCount }) {
    const transactionArray = transactions.map(transaction => {
      transaction = {
        ...transaction,
        Date: moment(transaction.Date, moment.ISO_8601).format("MMM Do YY")
      };
      return transaction;
    });
    transactions = transactionArray;
    state.transactions = transactions;
    state.transactionCount = transactionCount;
    state.isLoading = false;
  },
  [GET_DATA_ERROR](state, { errors }) {
    state.errors = errors;
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
