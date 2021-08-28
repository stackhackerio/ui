import Home from '../../pages/index'

export default {
  title: 'pages/Home',
  component: Home,
}

const Template = (props: { name: string }) => <Home {...props} />

export const Default = Template.bind({})
Default.args = {
  name: 'World',
}
