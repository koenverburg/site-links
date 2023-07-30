import Image from "next/image";
import { Layout } from "../components/Layout";
import { Separator } from "@/components/ui/separator";
import { sections } from "../data";
import { Button } from "@/components/ui/button";
import { handleClick } from "@/lib/utils";
import { Item } from "../components/Item";
import { Platform } from "@/lib/types";

const useImagePrefix = () => {
  const isGithubActions = process.env.isGithubActions;
  const prefix = process.env.prefix;

  if (isGithubActions) {
    return prefix;
  }

  return "";
};

export default function IndexPage() {
  const prefix = useImagePrefix();
  return (
    <Layout title="Conrad The Programmer">
      <div className="text-center mb-4">
        <Image
          width="460"
          height="460"
          alt="Avatar"
          src={`${prefix}/assets/new-avatar.jpg`}
          className="rounded-full w-32 mb-4 mx-auto"
        />
        <h5 className="text-xl font-bold leading-tight mb-2">
          Conrad The Programmer
        </h5>
        <p className="text-gray-500">
          Hi, I'm <strong className="text-orange-500">Conrad</strong>. A fulltime programmer at Adidas, I
          also stream, blog and create YouTube videos about my live as a
          software engineer and topics that I'm interested in.
          <br />
          <br />
          In my spare time I write SaaS applications, check out the project
          section below to see where I'm working on.
        </p>
      </div>

      {sections.map((section) => (
        <div>

          <div className="space-y-1 mb-3">
            <h4 className="text-sm font-medium leading-none">
              {section.label}
            </h4>
            {section.description &&
              <p className="text-sm text-muted-foreground">
                An open-source UI component library.
              </p>
            }
          </div>

          <ul
            className="flex flex-col justify-center xmax-w-sm mx-auto"
            key={section.label}
          >
            {section.links.map((link: Platform) => <Item platform={link} />)}
          </ul>
          <hr className="mb-4 mt-4" />
        </div>
      ))}
    </Layout>
  );
};

      //<Separator className="my-4" />
