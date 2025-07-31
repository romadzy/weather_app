import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import theme from "@/theme";
import { Providers } from "@/services/redux/providers";

import Header from "@/components/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Providers>
              <Header />
              <main>
                {children}
              </main>
              <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                  style: {
                    fontFamily: "var(--font-geist-sans)",
                  },
                }}
              />
            </Providers>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
