'use client';

import { LuMoon, LuSun } from '@paalstack/react-icons/lu';
import { Badge, Button, Separator, useNextTheme } from '@paalstack/react-ui';

export function Header() {
  const { isDark, setTheme } = useNextTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-foreground">paalstack/react-ui</span>
            <Separator orientation="vertical" className="h-4" />
            <Badge variant="secondary" className="text-xs">
              v1.1.0
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {isDark ? <LuSun className="h-4 w-4" /> : <LuMoon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
