import * as React from 'react';
import { Button, ButtonProps } from './Button';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;

interface StoryButtonProps extends ButtonProps {
	label?: React.ReactNode;
}
const Template: Story<StoryButtonProps> = (args) => <Button {...args}>{args.label} </Button>;

export const Default = Template.bind({});
Default.args = {
	label: 'Default',
	onClick: action('button-click'),
};

export const Primary = Template.bind({});
Primary.args = {
	label: 'Primary',
	type: 'primary',
	onClick: action('button-click'),
};