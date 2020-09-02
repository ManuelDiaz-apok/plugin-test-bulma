export default {
  path: 'usuarios',
  component: () => import(/* webpackChunkName: "usuarios" */ './views/usuarios.vue'),
  children: [
    {
      path: '/',
      redirect: { name: 'usuariosList' }
    },
    {
      path: 'list',
      name: 'usuariosList',
      props: true,
      component: () => import(/* webpackChunkName: "usuarios_list" */ './views/usuariosList.vue')
    },
    {
      path: 'edit/:id',
      name: 'usuariosEdit',
      props: true,
      component: () => import(/* webpackChunkName: "usuarios_edit" */ './views/usuariosEdit.vue')
    },
    {
      path: 'edit/0',
      name: 'usuariosNew',
      redirect: {
        name: 'usuariosEdit',
        params: { id: '0' },
      },
    },
  ],
}
