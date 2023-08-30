// YourComponent.stories.ts

import type { Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../lib/button/button.component';
import { ButtonModule } from '../lib/button/button.module';

//👇 This default export determines where your story goes in the story list
const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ButtonModule]
    })
  ],
  render: (args: ButtonComponent) => ({
    props: {
      label: 'Button',
      ...args
    }
  })
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Button'
  }
};

export const Emphasize: Story = {
  args: {
    color: 'emphasize',
    label: 'Button'
  }
};

export const Critical: Story = {
  args: {
    color: 'critical',
    label: 'Button'
  }
};

export const PrimaryOutline: Story = {
  args: {
    color: 'primary',
    outline: true,
    label: 'Button'
  }
};

export const EmphasizeOutline: Story = {
  args: {
    color: 'emphasize',
    outline: true,
    label: 'Button'
  }
};

export const CriticalOutline: Story = {
  args: {
    color: 'critical',
    outline: true,
    label: 'Button'
  }
};
