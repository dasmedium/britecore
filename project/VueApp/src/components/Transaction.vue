<template>
  <tr>
    <td>{{ transaction.tid }}</td>
    <td>{{ transaction.Name }}</td>
    <td>{{ transaction.Description }}</td>
    <td>{{ transaction.Date }}</td>
    <td>{{ transaction.Amount }}</td>
  </tr>
</template>
<script>
export default {
  name: "TransactionItem",
  props: {
    transaction: {
      type: Object,
      required: true
    }
  },
  computed: {}
};
</script>
