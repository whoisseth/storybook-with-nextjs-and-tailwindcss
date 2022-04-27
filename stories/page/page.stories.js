import Home from "./../../pages/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "page",
  component: Home,
};
const Template = args_ => <Home {...args_} />;

export const Page = Template.bind({});
//
