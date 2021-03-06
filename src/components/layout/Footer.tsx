import { MailIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { FC } from "react";
import { RiGithubLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";

const socialMedias = [
  {
    href: "https://www.instagram.com/_erenblc_/",
    icon: <RiInstagramLine />,
  },
  {
    href: "https://twitter.com/eren_balci_",
    icon: <RiTwitterLine />,
  },
  {
    href: "https://github.com/balcieren",
    icon: <RiGithubLine />,
  },
];

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col-reverse items-center justify-between gap-y-4 border-t border-zinc-200 pt-8 pb-12 dark:border-zinc-600 sm:flex-row sm:gap-y-0">
      <ul className="flex gap-6 text-zinc-600 dark:text-zinc-200">
        {socialMedias.map(({ href, icon }, index) => (
          <li key={index} className="cursor-pointer">
            <Link href={href}>
              <a target={"_blank"}>{icon}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <div className="flex rounded-full border border-zinc-600 p-1.5">
          <MailIcon className="h-5 w-5 text-zinc-900 dark:text-white" />
        </div>
        <h3 className="text-sm font-bold dark:text-white">
          erenbalci3939@gmail.com
        </h3>
      </div>
    </footer>
  );
};
