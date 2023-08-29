import client from '@/services/sanity';

const Post = {
    list: async () => {
        return await client.fetch('*[_type == "[slug]"]');
    },
};

export default Post;
