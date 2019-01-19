<template>
  <tr>
    <td>{{ transaction.tid }}</td>
    <td>{{ transaction.Name }}</td>
    <td v-if="!isOpen">
      <button v-on:click="isOpen = !isOpen">
        <icon-base icon-name="write"><icon-write /> </icon-base>
      </button>

      {{ transaction.Description }}
    </td>
    <td v-else>
      <form action="">
        <textarea
          :value="transaction.Description"
          :placeholder="transaction.Description"
          @input="updateDescription"
        />
        <button v-on:click="isOpen = !isOpen">
          <icon-base icon-name="cancel"><icon-cancel /> </icon-base>
        </button>
        <button v-on:click="submit(transaction)">
          <icon-base icon-name="done"><icon-done /> </icon-base>
        </button>
      </form>
    </td>
    <td>{{ transaction.Date }}</td>
    <td>{{ transaction.Amount }}</td>
  </tr>
</template>
<script>
import moment from "moment";
import { DESCRIPTION_EDIT } from "../store/actions.type";
import IconBase from "./icons/IconBase.vue";
import IconWrite from "./icons/IconWrite.vue";
import IconDone from "./icons/IconDone.vue";
import IconCancel from "./icons/IconCancel.vue";
export default {
  name: "TransactionItem",
  props: {
    transaction: {
      type: Object,
      required: true
    }
  },
  components: {
    IconBase,
    IconWrite,
    IconDone,
    IconCancel
  },
  data: function() {
    return {
      isOpen: false,
      transactionItem: Object
    };
  },
  methods: {
    dateFormat(date) {
      const dateFormated = moment(date, moment.ISO_8601).format("MMM Do YY");
      return dateFormated;
    },
    updateDescription(e) {
      this.transactionItem.Description = e.target.value;
    },
    submit(transaction) {
      this.$store.dispatch(DESCRIPTION_EDIT, transaction);
      this.isOpen = !this.isOpen;
      this.transaction.Description = this.transactionItem.Description;
    }
  },
  mounted() {
    this.dateFormat(this.transaction.Date);
  }
};
</script>
