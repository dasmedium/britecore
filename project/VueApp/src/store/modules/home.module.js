import { TransactionService } from "../../common/api.service";
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../mutations.type";
import { GET_TRANSACTIONS } from "../actions.type";

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
  }
};

const actions = {
  [GET_TRANSACTIONS]({ commit }, params) {
    commit(GET_DATA);
    return TransactionService.query(params.filters)
      .then(({ data }) => {
        commit(GET_DATA_SUCCESS, data);
      })
      .catch(error => {
        commit(GET_DATA_ERROR, error);
      });
  }
};

const mutations = {
  [GET_DATA](state) {
    state.isLoading = true;
  },
  [GET_DATA_SUCCESS](state, { transactions, transactionCount }) {
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
