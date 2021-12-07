import Todo from './todo.vue';

export default {
  title: "Components/Todo",
  component: Todo,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Todo },
  template: '<Todo :todo="todo" />',
});

export const Default = Template.bind({});
export const Default2 = Template.bind({});
