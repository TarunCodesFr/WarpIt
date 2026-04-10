import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/theme-provider';
import SmoothScrolling from '@/components/ui/LenisScroll';
import {GoogleOAuthProvider} from '@react-oauth/google';
import {Toaster} from 'sonner';

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
					<GoogleOAuthProvider clientId="764723305460-5j9h4f6mbv6a70vje7gapmlj79f9un3b.apps.googleusercontent.com">
						<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
							{children}
							<Toaster position="top-right" richColors />
						</ThemeProvider>
					</GoogleOAuthProvider>

				</body>
			</html>
		</SmoothScrolling>
	);
}
