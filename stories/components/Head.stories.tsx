import Head from '../../components/Head'

export default {
  component: Head,
  title: 'components/Head',
}
const Template = (args) => <Head {...args} />

export const Default = Template.bind({})
Default.args = {}
