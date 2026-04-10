import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/theme-provider';
import SmoothScrolling from '@/components/ui/LenisScroll';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'WarpIt — Lightning-Fast URL Shortener',
	description: 'Shorten. Share. Track. Premium URL shortening with WarpIt.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SmoothScrolling>
			<html lang="en" suppressHydrationWarning>
				<body className={`${inter.variable} min-h-screen font-sans antialiased`}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</SmoothScrolling>
	);
}
