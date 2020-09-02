<template>
  <form-renderer
    :loading="loading"
    :fields="fields"
    :form-var="varVuex"
    :readonly="readonly"
    @submit="doSubmit"
    @cancel="goBack"
  />
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import ValidationError from '@apok/admin/vue/plugins/network/ValidationError'

  import fields from '../form';

  export default {
    name: 'usuariosEdit',
    data() {
      return {
        fields,
        varVuex: {},
      };
    },
    props: {
      readonly: {
        type: Boolean,
        default: false,
      },
      id: String,
    },
    computed: {
      ...mapState('usuarios', ['loading', 'currentItem']),
    },
    watch: {
      currentItem: {
        handler: 'updateCurrentItem',
        immediate: true
      },
    },
    methods: {
      ...mapActions('usuarios', ['getItem', 'resetItem', 'saveItem']),
      ...mapActions('messages', ['setFields','resetFields']),
      updateCurrentItem(newVal){
        this.varVuex = { ...newVal };
      },
      goBack() {
        this.resetFields();
        this.resetItem();
        this.$router.push({ name: 'usuariosList' });
      },
      doSubmit() {
        this.resetFields();
        this.saveItem(this.varVuex)
          .then(this.goBack)
          .catch((e) => {
            if (e instanceof ValidationError) {
              this.setFields(e.fields)
            }
          });
      },
    },
    mounted() {
      if (parseInt(this.id, 10) !== 0 && !this.currentItem.id) {
        this.getItem(this.id);
      }
      if (this.currentItem.id && this.currentItem.id !== this.varVuex.id) {
        this.updateCurrentItem(this.currentItem);
      }
    },
  };
</script>

<style scoped>

</style>
