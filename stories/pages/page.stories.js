import Home from "./../../pages/index";

export default {
  title: "page/index",
  component: Home,
};

const Template = args => <Home {...args} />;

export const page = Template.blind({});
