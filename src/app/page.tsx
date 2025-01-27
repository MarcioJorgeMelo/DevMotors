import { HomeProps } from "@/utils/home.type";
import { Submenu } from "./components/home/submenu";
import { getDataHome, getDataSubmenu } from "@/utils/actions/get-data";
import { Hero } from "./components/hero";
import { Phone } from "lucide-react";
import { Services } from "./components/home/services";
import { Container } from "./components/container";
import { Footer } from "./components/home/footer";
import { MenuProps } from "@/utils/menu.type";


export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getDataSubmenu();

  return (
    <main>
      { menu.objects.length > 0 && <Submenu menu={menu} /> }

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <Services object={object} />

        <Footer object={object} />
      </Container>
    </main>
  );
}