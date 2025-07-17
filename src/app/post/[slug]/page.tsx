import { Suspense } from "react";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/post.type";
import { Metadata, ResolvingMetadata } from "next";
import { Content } from "./components/content/content";
import LoadingPost from "./components/loading/loading";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  try {
    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "DevMotors - Sua oficina especializada",
        description: "Oficina de carros especializada brasileira",
      };
    });

    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      keywords: ["devmotors", "troca de oleo", `${objects[0].title}`],
      openGraph: {
        title: `DevMotors - ${objects[0].title}`,
        images: [objects[0].metadata.banner.url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    return {
      title: "DevMotors - Sua oficina especializada",
      description: "Oficina de carros especializada brasileira",
    };
  }
}

export default async function Page({ params }: Props) {
  const { slug } = params;

  return (
    <>
      <Suspense fallback={<LoadingPost />}>
        <Content slug={slug} />
      </Suspense>
    </>
  );
}
