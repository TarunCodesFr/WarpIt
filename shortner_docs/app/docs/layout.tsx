import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { LayoutDashboard, ExternalLink } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      nav={{ title: 'WarpIt Docs' }}
      sidebar={{
        banner: (
          <div className="flex flex-col gap-2 p-4">
             <a 
               href="https://warpit.link/dashboard" 
               className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
             >
               <LayoutDashboard className="h-4 w-4" />
               Dashboard
             </a>
             <a 
               href="https://github.com/TarunCodesFr/WarpIt" 
               className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
             >
              <ExternalLink className="h-4 w-4" />
               Source Code
             </a>
          </div>
        )
      }}
    >
      {children}
    </DocsLayout>
  );
}
