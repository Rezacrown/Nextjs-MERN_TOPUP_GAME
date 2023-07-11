import type { Meta, StoryObj } from "@storybook/react";

import GameItems, {
  cardGameProps,
} from "../../../components/complex/Feature-game/card-game";

const meta: Meta = {
  title: "component/Atoms/GameItems",
  component: GameItems,
  tags: ["gameitems"],
};

export default meta;

const template = (args: cardGameProps) => (
  <GameItems
    src={args.src}
    link={args.link}
    title={args.title}
    subTitle={args.subTitle}
    {...args}
  />
);

type Story = StoryObj<typeof GameItems>;

export const test1: Story = {
  args: {
    src: "/assets/img/Thumbnail-1.png",
    link: "/detail",
    subTitle: "Mobile",
    title: "Title",
  },
};
