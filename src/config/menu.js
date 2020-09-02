export default [
  {
    title: 'General',
    children: [
      {
        label: 'Dashboard',
        to: { name: 'Dashboard' },
        icon: {icon: 'tachometer-alt'}
      },
    ]
  },
  {
    title: 'Usuarios',
    children: [
      {
        label: 'Lista',
        to: { name: 'usuariosList' },
        icon: {icon: 'car'}
      },
      {
        label: 'Nuevo',
        to: { name: 'usuariosNew' },
        icon: {icon: 'plus'}
      },

    ]
  },
  {
    title: 'Showcase',
    children: [
      {
        label: 'Sign in',
        to: { name: 'Login' },
        icon: {icon: 'sign-in-alt'}
      },

    ]
  },
]
