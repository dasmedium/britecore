<template>
  <div>
    <div class="transactions" v-if="isLoading">Loading Transactions...</div>
    <div v-else>
      <div v-if="transactions.length === 0" class="transactions">
        No transactions yet...
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <TransactionItem
            v-for="(transaction, index) in transactions"
            :transaction="transaction"
            :key="index"
          />
        </tbody>
      </table>
      <Pagination :pages="pages" :currentPage.sync="currentPage" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TransactionItem from "./Transaction";
import Pagination from "./Pagination";
import { GET_TRANSACTIONS } from "../store/actions.type";
export default {
  name: "TransactionList",
  components: {
    TransactionItem,
    Pagination
  },
  props: {
    itemsPerPage: {
      type: Number,
      required: false,
      default: 15
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    configList() {
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage
      };
      return {
        filters
      };
    },
    pages() {
      if (this.isLoading || this.transactionCount <= this.itemsPerPage) {
        return [];
      }
      return [
        ...Array(Math.ceil(this.transactionCount / this.itemsPerPage)).keys()
      ].map(e => e + 1);
    },
    ...mapGetters(["transactionCount", "isLoading", "transactions"])
  },
  watch: {
    currentPage(newPage) {
      this.configList.filters.offset = (newPage - 1) * this.itemsPerPage;
      this.getTransactions();
    }
  },
  mounted() {
    this.getTransactions();
  },
  methods: {
    getTransactions() {
      this.$store.dispatch(GET_TRANSACTIONS, this.configList);
    }
  }
};
</script>
