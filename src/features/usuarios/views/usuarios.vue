<template>
  <div>
    <p class="title">{{ title | translate }}</p>
    <hr/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'usuarios',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    updateTitle(val) {
      const { name, params: { id } } = val;
      if (name === 'usuariosEdit') {
        if (parseInt(id, 10) === 0) {
          this.title = 'usuarios.titles.new';
          return;
        }
        this.title = 'usuarios.titles.edit';
        return;
      }
      this.title = 'usuarios.titles.list';
    },
  },
  watch: {
    ['$route']: {
      handler: 'updateTitle',
      immediate: true,
    },
  },
};
</script>

<style scoped>
</style>
