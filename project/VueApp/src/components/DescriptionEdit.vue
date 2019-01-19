<template>
  <div>
    <FormErrors :errors="errors"></FormErrors>
    <form v-on:submit.prevent="onSubmit(id, description)">
      <div>
        <textarea
          v-for=""
          class="form-control"
          v-model="description"
          rows="3"
          v-text=""
        ></textarea>
      </div>
    </form>
  </div>
</template>
<script>
import FormErrors from "@components/FormErrors";
import { DESCRIPTION_EDIT } from "@store/actions.type";
export default {
  name: "DescriptionEdit",
  components: {
    FormErrors
  },
  props: {
    transaction: {
      type: Object,
      required: true
    }

  },
  data() {
    return {
      description: this.transaction.Description || null,
      errors: {}
    };
  },
  computed: {
    ...mapGetters(["errors"])
  },
  data(){
return {

}
  },
  methods: {
    onSubmit(id, description) {
      this.$store.dispatch(DESCRIPTION_EDIT, { id, description })
      .then(() => {
        this.description = null;
        this.errors: {};
      })
      .catch(({response}) => {
        this.errors = response.data.errors;
      });
    }
  }
};
</script>
