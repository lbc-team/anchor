import { type DocsLayoutProps } from "fumadocs-ui/layouts/notebook";
import { type HomeLayoutProps } from "fumadocs-ui/layouts/home";
import { docsSource } from "./source";
import StackExchangeIcon from "@/public/icons/stackexchange.svg";
import GithubIcon from "@/public/icons/github.svg";
import DiscordIcon from "@/public/icons/discord.svg";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2 pl-2">
        <Image src="/icons/anchor.png" alt="Logo" width={24} height={24} />
        <span>Anchor 中文文档</span>
      </div>
    ),
    url: "/docs/anchor",
  },
  links: [
    {
      icon: <GithubIcon />,
      text: "Github",
      url: "https://github.com/lbc-team/anchor",
      active: "none",
    },
    {
      icon: <DiscordIcon />,
      text: "集训营",
      url: "https://learnblockchain.cn/openspace/1",
      active: "none",
    },
    {
      icon: <StackExchangeIcon />,
      text: "Solana 文章",
      url: "https://learnblockchain.cn/categories/solana",
      active: "none",
    },
  ],
};

export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  sidebar: {
    defaultOpenLevel: 1,
  },
  tree: docsSource.pageTree,
};
