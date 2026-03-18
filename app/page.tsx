'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Card from '@/components/common/Card';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    
    if (!token) {
      router.push('/login');
      return;
    }
    
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, [router]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-56">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Bienvenido, {user.name}! 👋
            </h1>
            <p className="text-gray-600 mb-8">
              Plataforma avanzada de análisis empresarial con IA
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <p className="text-gray-500 text-sm">Empresas Registradas</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </Card>
              <Card>
                <p className="text-gray-500 text-sm">Análisis Realizados</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </Card>
              <Card>
                <p className="text-gray-500 text-sm">Margen Promedio</p>
                <p className="text-3xl font-bold text-gray-900">0%</p>
              </Card>
              <Card>
                <p className="text-gray-500 text-sm">Score Promedio</p>
                <p className="text-3xl font-bold text-gray-900">0/100</p>
              </Card>
            </div>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Listo para comenzar?
              </h2>
              <p className="text-gray-600 mb-6">
                Sube tu primer archivo o comienza a registrar tus empresas para obtener análisis detallados.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all">
                  Subir Archivo
                </button>
                <button className="px-6 py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-all">
                  Registrar Empresa
                </button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
