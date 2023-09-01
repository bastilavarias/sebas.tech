import StoaPageContent from '@/components/app/stoa/page';

import { SITE_NAME, SITE_URL } from '@/consts';
import sanityClient, {
    sanityImageUrlFor,
    sanityToPlainText,
} from '@/services/sanity';
import StoaPostContent from '@/components/app/stoa/post/page';

export async function generateMetadata({ params, searchParams }, parent) {
    const materials = await sanityClient.fetch(
        '*[_type == "post" && slug.current == $slug]{title, body, slug, mainImage, categories[]->, _createdAt}',
        { slug: params.slug }
    );
    const material = materials[0] || null;
    if (!material) {
        return {};
    }

    return {
        title: material.title,
        description: sanityToPlainText(material.body),
        openGraph: {
            title: material.title,
            description: sanityToPlainText(material.body),
            url: SITE_URL,
            siteName: SITE_NAME,
            images: [
                {
                    url: sanityImageUrlFor(material.mainImage).url(),
                    width: 1800,
                    height: 1600,
                    alt: material.title,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
    };
}

export default function StoaPost({ params }) {
    return <StoaPostContent params={params} />;
}
