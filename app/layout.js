export const metadata = {
  title: "ALEO Power | Mobile Solar Power Container",
  description:
    "ALEO Power provides mobile solar power container and PV-storage microgrid solutions for off-grid, weak-grid, emergency, construction, mining, oil and gas, and infrastructure power applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
