//import type { Metadata } from "next";
import { redirect } from 'next/navigation';

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "My Porfolio App",
// };
export default function Home() {
  redirect('/about');
}
