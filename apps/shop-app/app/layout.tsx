"use client";

import "@ui/styles/globals.css";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ProgressBar
          height="4px"
          color="#000000"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
