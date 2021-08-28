import Head from "./Head";

export default {
  component: Head,
  title: "components/Head",
};
const Template = (args) => <Head {...args} />;

export const Default = Template.bind({});
Default.args = {};
