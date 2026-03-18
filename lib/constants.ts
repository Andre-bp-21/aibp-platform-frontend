export const APP_NAME = 'AIBP';
export const APP_DESCRIPTION = 'Adaptive Intelligence Business Platform';

export const INDUSTRY_BENCHMARKS: Record<string, any> = {
  retail: { margin: 0.2, growth_rate: 0.08, churn: 0.25 },
  saas: { margin: 0.7, growth_rate: 0.3, churn: 0.05 },
  ecommerce: { margin: 0.25, growth_rate: 0.15, churn: 0.2 },
  consulting: { margin: 0.35, growth_rate: 0.1, churn: 0.15 },
  restaurant: { margin: 0.1, growth_rate: 0.05, churn: 0.4 },
  manufacturing: { margin: 0.15, growth_rate: 0.05, churn: 0.1 },
  fintech: { margin: 0.45, growth_rate: 0.4, churn: 0.08 },
};

export const CHART_COLORS = {
  primary: '#0ea5e9',
  secondary: '#06b6d4',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
  gray: '#9ca3af',
};

export const NAVIGATION_LINKS = [
  { label: 'Dashboard', href: '/' },
  { label: 'Análisis', href: '/analytics' },
  { label: 'Subir Archivo', href: '/upload' },
  { label: 'Login', href: '/login' },
  { label: 'Registro', href: '/register' },
];
