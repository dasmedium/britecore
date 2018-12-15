import { ApiService } from "../../common/api.service";
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../mutations.type";
import { GET_TRANSACTIONS } from "../actions.type";

const state = {
  transactions: [],
  isLoading: true,
  transactionCount: 0,
  errors: {}
};

const getters = {
  articlesCount(state) {
    return state.articlesCount;
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
    return ApiService.query(params.type, params.filters)
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
