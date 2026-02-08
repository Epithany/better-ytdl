import "@/styles/global.css";
import Navbar from './../components/Navbar';
import Footer from "@/components/Footer";

export const metadata = {
  title: 'YT-DL | Download YouTube Videos in 4K Quality',
  description: 'Fast, secure, and free YouTube video downloader. Download videos in stunning 4K quality with zero tracking or ads.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FAFAFA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="light-content" />
        <script src="//code.tidio.co/qhhancpt76pkxaxn1jz28irsb5lcuszf.js" async></script>
      </head>
      <body className="bg-white">
          <Navbar />
          <div>
            {children}
          </div>
          <Footer />
      </body>
    </html>
  );
}
