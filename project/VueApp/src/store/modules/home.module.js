import { TransactionService } from "../../common/api.service";
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../mutations.type";
import { GET_TRANSACTIONS, DESCRIPTION_EDIT } from "../actions.type";
// import moment from "moment";

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
    // let transactionArray = state.transactions;
    // for (var i = 0; i <= transactionArray.length; i++) {
    //   let dateFormat = moment(transactionArray[i].Date, moment.ISO_8601).format(
    //     "MMM Do YY"
    //   );
    //   transactionArray[i].Date = dateFormat;

    // return transactionArray;
    // }
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
  [GET_TRANSACTIONS]({ commit }, params) {
    commit(GET_DATA);
    return TransactionService.query(params.filters)
      .then(({ data }) => {
        commit(GET_DATA_SUCCESS, data);
      })
      .catch(error => {
        commit(GET_DATA_ERROR, error);
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
    // const transactionObject = transactions.map(transaction => {
    //    moment(transaction.Date, moment.ISO_8601).format("MMM Do YY");
    //   return transactions;
    // });

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
