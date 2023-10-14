import Image from 'next/image'
import Navbar from '@/components/navbar';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import app from "@/firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "@/firebase/firebaseApp";

const navItems = [
  { label: 'Home', link: '/', icon: faCode },
  { label: 'Trending', link: '/trending', icon: faCode },
  { label: 'Subscriptions', link: '/subscriptions', icon: faCode },
  { label: 'Library', link: '/library', icon: faCode },
];

export default function Home() {
  app;
  return (
    <main>
      <Navbar navItems={navItems} />
    </main>
  )
}
