
import './globals.css';
import AppLayout from '../components/AppLayout';

export const metadata = {
  title: "Rellax Admin Panel",
  description: "A modern admin panel template",
  icons: {
    icon: "/images/rellax-logo.png",
  },
};

export default function RootLayout({ children }) {
  return <AppLayout>{children}</AppLayout>;
}
