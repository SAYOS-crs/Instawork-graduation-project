import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {

  const { cookies } = await import('next/headers');
  const locale = (await cookies()).get('NEXT_LOCALE')?.value || 'ar';

  return {
    locale,
    messages: (await import(`../src/locales/${locale}.json`)).default,
  };
});