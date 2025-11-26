// src/lib/i18n/config.ts
export const locales = ['ar', 'en'] as const;
export const defaultLocale = 'ar' as const;
export type Locale = (typeof locales)[number];