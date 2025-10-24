export const generateSEO = (title: string, description: string, url: string, image: string) => {
    return {
        title,
        description,
        openGraph: {
            url,
            title,
            description,
            images: [
                {
                    url: image,
                    alt: title,
                },
            ],
            site_name: title,
        },
        twitter: {
            cardType: 'summary_large_image',
            site: '@your_twitter_handle',
            title,
            description,
            image,
        },
    };
};