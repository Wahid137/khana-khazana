import connectMongo from "@/dbConnect/connectMongo";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import AuthProvider from "./providers/AuthProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana Khazana",
  description: "A Food Recipe Website",
};

export default async function RootLayout({ children }) {
  await connectMongo()
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
