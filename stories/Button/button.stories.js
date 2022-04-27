import { Button } from "./Button";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Buttons",
  component: Button,
  argTypes: {
   
    label: {
      control: "text",
    },
    state: {
      options: ["default", "primary", "secondary"],
      control: { type: "select" },
    },
  },
};
const Template = args_ => <Button {...args_} />;

export const Github = Template.bind({});
Github.args = {
  login_type: "github",

};
export const Google = Template.bind({});
Google.args = {
  login_type: "google",
};
export const Guest = Template.bind({});
Guest.args = {
  login_type: "guest",
};
