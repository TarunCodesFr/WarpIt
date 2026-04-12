'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ShortenerTool } from '@/components/shortener/ShortenerTool';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, BarChart3, Globe } from 'lucide-react';

export function Hero() {
	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const toolRef = useRef<HTMLDivElement>(null);
	const trustRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

			tl.fromTo(titleRef.current,
				{ y: 60, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1.2, delay: 0.5 }
			)
				.fromTo(subtitleRef.current,
					{ y: 30, opacity: 0 },
					{ y: 0, opacity: 1, duration: 1 },
					"-=0.8"
				)
				.fromTo(toolRef.current,
					{ y: 40, opacity: 0, scale: 0.95 },
					{ y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.8)" },
					"-=0.6"
				)
				.fromTo(trustRef.current,
					{ opacity: 0 },
					{ opacity: 1, duration: 1.5 },
					"-=0.4"
				);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={containerRef} className="relative pt-32 pb-40 md:pt-48 md:pb-64 overflow-hidden bg-mesh">
			{/* Dynamic Background Elements */}
			<div className="absolute inset-0 -z-10 pointer-events-none">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,var(--color-primary)_/0.08,transparent_70%)]" />
				<div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
				<div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
			</div>

			<div className="container mx-auto px-4">
				<div className="text-center space-y-12">
					<div className="space-y-8 max-w-5xl mx-auto">
						<h1
							ref={titleRef}
							className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-[calc(var(--tracking-tighter)*1)] leading-[0.9] text-foreground"
						>
							Warp your <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500">
								digital reach.
							</span>
						</h1>
						<p
							ref={subtitleRef}
							className="text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed opacity-0"
						>
							Transform static links into dynamic marketing engine.
							Built for performance, engineered for reliability.
						</p>
					</div>

					<div ref={toolRef} className="opacity-0">
						<ShortenerTool />
					</div>

					<div
						ref={trustRef}
						className="flex flex-col items-center gap-6 pt-12 opacity-0"
					>
						<p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Trusted by modern teams</p>
						<div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
							<div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
								<Zap className="h-6 w-6 fill-current" /> LUMINA
							</div>
							<div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
								<Shield className="h-6 w-6" /> VERTEX
							</div>
							<div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
								<BarChart3 className="h-6 w-6" /> NEXUS
							</div>
							<div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
								<Globe className="h-6 w-6" /> AETHER
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
