import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@spitz-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://spitzalemaospier.com/wp-content/uploads/2023/12/28-930x620.png',
    alt: 'Spitz Image',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
