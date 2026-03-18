'use client';

import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) setUser(JSON.parse(userStr));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">{APP_NAME}</h1>
            <p className="text-xs text-gray-500">{APP_DESCRIPTION}</p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-gray-600">{user.email}</span>
              <button
                onClick={handleLogout}
                className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-primary-600 hover:underline">
                Iniciar sesión
              </Link>
              <Link href="/register" className="text-sm px-3 py-1 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
