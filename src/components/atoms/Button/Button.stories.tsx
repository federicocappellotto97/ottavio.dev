import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { ComponentProps } from "react";

type CustomButtonProps = ComponentProps<typeof Button> & { label: string };

const meta: Meta<CustomButtonProps> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    label: "Button",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<CustomButtonProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => <Button {...args}>{args.label}</Button>,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => <Button {...args}>{args.label}</Button>,
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
  render: (args) => <Button {...args}>{args.label}</Button>,
};
