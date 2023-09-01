import ContactPageContent from '@/components/app/contact/page';

import {
    SELF_DESCRIPTION,
    SELF_NAME,
    SITE_LOGO,
    SITE_NAME,
    SITE_URL,
} from '@/consts';

const PAGE_DESCRIPTION = "Page of Sebastian's contact information.";
export const metadata = {
    title: `${SELF_NAME} | Contact Me`,
    description: PAGE_DESCRIPTION,
    openGraph: {
        title: SELF_NAME,
        description: PAGE_DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_NAME,
        images: [
            {
                url: SITE_LOGO,
                width: 1800,
                height: 1600,
                alt: 'SebasTech Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function ContactPage() {
    return <ContactPageContent />;
}
