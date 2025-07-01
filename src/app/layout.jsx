import { Open_Sans } from "next/font/google"
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const OpenSans = Open_Sans({
    variable: "--font-sans",
})

export const metadata = {
    title: "PPI & Metabolic Networks Repository for Diabetic",
    description: "PPI & Metabolic Networks Repository for Diabetic",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${OpenSans.className} antialiased`}
        >
            <header></header>
            <main className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="w-5/6 h-screen overflow-auto">
                    {children}
                </div>
            </main>
            <footer></footer>
        </body>
        </html>
    );
}
