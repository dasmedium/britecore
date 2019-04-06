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
      <form>
        <textarea
          :value="transaction.Description"
          :placeholder="transaction.Description"
          @input="updateDescription"
          :key="transaction.id"
          class="form-control"
          v-bind:class="{ 'is-invalid': hasError }"
        />
        <div v-if="this.hasError" class="invalid-feedback">{{ errors }}</div>
        <button v-on:click="isOpen = !isOpen">
          <icon-base icon-name="cancel"><icon-cancel /> </icon-base>
        </button>
        <button v-on:click="submit">
          <icon-base icon-name="done"><icon-done /> </icon-base>
        </button>
      </form>
    </td>
    <td>{{ transaction.Date }}</td>
    <td>{{ transaction.Amount }}</td>
  </tr>
</template>
<script>
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
      errors: {},
      hasError: false
    };
  },
  methods: {
    updateDescription(e) {
      this.transaction.Description = e.target.value;
    },
    submit() {
      this.$store
        .dispatch(DESCRIPTION_EDIT, this.transaction)
        .then(() => {
          this.errors = {};
          this.isOpen = !this.isOpen;
        })
        .catch(({ response }) => {
          this.errors = response.data.Description;
          this.hasError = !this.hasError;
        });
    }
  }
};
</script>
