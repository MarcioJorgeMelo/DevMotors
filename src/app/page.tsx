import { HomeProps } from "@/utils/home.type";
import { Submenu } from "./components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";


export default async function Home() {
  const data: HomeProps = await getDataHome();

  return (
    <main>
      <Submenu />
    </main>
  );
}
