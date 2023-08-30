import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
    projectId: 'x01bmatl',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(sanityClient);

export const sanityImageUrlFor = (source) => {
    return builder.image(source);
};

export const sanityToPlainText = (blocks = []) => {
    return blocks
        .map((block) => {
            if (block._type !== 'block' || !block.children) {
                return '';
            }
            return block.children.map((child) => child.text).join('');
        })
        .join('\n\n');
};

export default sanityClient;
