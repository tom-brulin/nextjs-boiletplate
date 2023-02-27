import "@/styles/globals.css";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "BRAKE.GG | Simracing Telemetry Analyzer and Datapack Marketplace",
  description:
    "Analyze your simracing telemetry and improve your pace, compare yourself to other drivers and find the best datapacks and setups with BRAKE.GG services.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
