import {NextIntlClientProvider, hasLocale} from "next-intl"
import {notFound} from "next/navigation"
import {routing} from "@/i18n/routing"

export async function generateMetadata({params}) {
    const {locale} = await params;

    const baseUrl = 'https://tvoosai.dev'

    const metadataByLocale = {
        ka: {
            title: 'Vako Janikashvili Portfolio',
            description: 'ვაკო ჯანიკაშვილის პორტფოლიო, .NET და Backend დეველოპერი.',
            locale: 'ka_GE',
        },
        en: {
            title: 'Vako Janikashvili Portfolio',
            description: 'Explore Vako\'s portfolio, a .NET & Backend developer.',
            locale: 'en_US',
        }
    }

    const meta = metadataByLocale[locale] ?? metadataByLocale['en']

    return {
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
            images: [`${baseUrl}/landingAvatar.webp`],
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            locale: meta.locale,
            url: `${baseUrl}/${locale}`,
            siteName: 'Vako Janikashvili Portfolio',
            images: [
                {
                    url: `${baseUrl}/landingAvatar.webp`,
                    width: 1200,
                    height: 630,
                    alt: meta.title,
                    secureUrl: `${baseUrl}/landingAvatar.webp`
                }
            ],
            type: 'website'
        },
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                'en': `${baseUrl}/en`,
                'ka': `${baseUrl}/ka`
            }
        }

    }
}

export default async function RootLayout({children, params}) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    return (
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
    )
}
