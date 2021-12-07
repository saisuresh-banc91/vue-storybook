import MyInput from './Input.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: MyInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyInput },
  template: '<my-Input @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: "Input",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Input",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Input",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Input",
};
