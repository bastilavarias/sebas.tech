import StoaPageContent from '@/components/app/stoa/page';

import { SITE_NAME, SITE_URL } from '@/consts';

const PAGE_TITLE = 'The Stoa';
const PAGE_DESCRIPTION =
    'Welcome to the Stoa, where your practical wisdom will be honed. I advise you to read all of the materials here for the maximum learning experience. Feel free to suggest a topic or the content of your desire.';
const PAGE_LOGO = `${SITE_URL}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstoa.cd1d4f02.jpg&w=2048&q=100`;

export const metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_NAME,
        images: [
            {
                url: PAGE_LOGO,
                width: 1800,
                height: 1600,
                alt: 'Stoa Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function StoaPage() {
    return <StoaPageContent />;
}
