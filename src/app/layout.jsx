import "./globals.css";
import Cover from "@/components/Cover";
import SidebarLaptop from "@/components/SidebarLaptop";
import SidebarMobile from "@/components/SidebarMobile";
import Footer from "@/components/Footer";

export const metadata = {
    title: "PPI & Metabolic Networks Repository for Diabetic",
    description: "PPI & Metabolic Networks Repository for Diabetic",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`antialiased`}
        >
            <header></header>
            <main className="flex">
                <Cover />
                <div className="xl:hidden h-screen xl:overflow-hidden w-fit xl:w-1/6 z-10">
                    <div className="fixed xl:hidden w-screen h-0 overflow-visible">
                        <SidebarMobile />
                    </div>
                </div>
                <div className="hidden xl:block w-1/6 xl:fixed">
                    <SidebarLaptop />
                </div>
                <div className="hidden xl:block w-1/6">
                </div>
                <div className="w-full xl:w-5/6 min-h-screen flex flex-col overflow-auto bg-yellow-50">
                    <div className="h-full">
                        {children}
                    </div>
                    <Footer />
                </div>
            </main>
        </body>
        </html>
    );
}
