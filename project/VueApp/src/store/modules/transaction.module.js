import { TransactionService } from "../../common/api.service";
import { DESCRIPTION_EDIT } from "../actions.type";
import { SET_TRANSACTION } from "../mutations.type";

const initialState = {
  transactionItem: {
    id: "",
    tid: "",
    Name: "",
    Description: "",
    Date: "",
    Amount: ""
  }
};
export const state = { ...initialState };
export const actions = {
  async [DESCRIPTION_EDIT](context, payload) {
    const { data } = await TransactionService.post(payload);
    context.commit(SET_TRANSACTION, data);
  }
};

export const mutations = {
  [SET_TRANSACTION](state, transactionItem) {
    state.transactionItem = transactionItem;
  }
};

const getters = {
  transactionItem(state) {
    return state.transactionItem;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
