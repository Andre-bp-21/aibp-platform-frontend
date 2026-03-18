'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 w-56 h-screen bg-white border-r border-gray-200 p-6 flex flex-col z-40">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <div>
            <h2 className="font-bold text-gray-900">AIBP</h2>
            <p className="text-xs text-gray-500">v1.0</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {NAVIGATION_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'px-4 py-2.5 rounded-lg font-medium transition-all duration-200',
              pathname === link.href
                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                : 'text-gray-700 hover:bg-gray-50'
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <p className="text-xs text-gray-500 text-center">© 2025 AIBP</p>
      </div>
    </aside>
  );
}
