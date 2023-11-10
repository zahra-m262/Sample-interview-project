import "@/src/styles/globals.css";
import localFont from "next/font/local";

const roboto = localFont({
  src: "../assets/Roboto-Medium.ttf",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hack The Box",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
