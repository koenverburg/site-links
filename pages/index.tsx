import Image from "next/image";
import { Layout } from "../components/Layout";
import Plausible from "plausible-tracker";
import { Separator } from "@/components/ui/separator"
import { sections } from "../data";

const useImagePrefix = () => {
  const isGithubActions = process.env.isGithubActions;
  const prefix = process.env.prefix;

  if (isGithubActions) {
    return prefix;
  }

  return "";
};

const { trackEvent } = Plausible();

const handleClick = (label: string, url: string) => () =>
  trackEvent(
    "click",
    {
      props: {
        label,
      },
    },
    {
      url,
    }
  );

const IndexPage = () => {
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
          Hi, I'm <strong>Conrad</strong>. A fulltime programmer at Adidas, I
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
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">
              {section.label}
            </h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <ul className="flex flex-col justify-center max-w-sm mx-auto">
            {section.links.map((link) => (
              <li key={link.label} className="mb-4">
                <span
                  className={`block mb-2 p-1 text-center rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500`}
                >
                  <a
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                    onClick={handleClick(link.label, link.href)}
                    className={`px-4 py-2 block text-black font-semibold rounded-full bg-white umami--click--${link.label.replaceAll(
                      " ",
                      "-"
                    )}`}
                  >
                    {link.label}
                  </a>
                </span>
                {!link.description ? null : (
                  <p className={`text-center text-gray-500`}>
                    {link.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <hr className="mb-4 mt-4" />
        </div>
      ))}
    </Layout>
  );
};

export default IndexPage;
