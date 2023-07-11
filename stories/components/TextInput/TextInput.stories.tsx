import type { Meta, StoryObj } from "@storybook/react";

import TextInputimport, { TextInputProps } from "../../../components/atoms/TextInput";

const meta: Meta = {
  title: "component/Atoms/TextInput",
  component: TextInputimport,
  tags: ["textInput"],
};

export default meta

const template = (args: TextInputProps) => <TextInputimport type={args.type} handleChange={args.handleChange} name={args.name} label={args.label} placeHolder={args.placeHolder} />;

type Story = StoryObj<typeof TextInputimport>;


export const Primary: Story = {
    args: {
        type: 'text',
        label: 'label',
        placeHolder: 'placeHolder',
        name: 'textInput',
    }, 
}