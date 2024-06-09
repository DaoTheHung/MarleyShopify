import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export const loadingImage = {
    image: "//cdn.shopify.com/s/files/1/0434/2520/2335/t/5/assets/loading.gif?v=157493769327766696621629093180"
}



export const ScreenLoading = () => {
    // loading khi chuyển hướng
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onHandleStartLoading = () => setLoading(true);
    const onHandleStopLoading = () => {
        setLoading(false);
    };

    useEffect(() => {
        // Start event
        router.events.on(
            'routeChangeStart',
            onHandleStartLoading
        );
        router.events.on(
            'routeChangeComplete',
            onHandleStopLoading
        );
        router.events.on(
            'routeChangeError',
            onHandleStopLoading
        );

        // Clean event
        return () => {
            router.events.off(
                'routeChangeStart',
                onHandleStartLoading
            );
            router.events.off(
                'routeChangeComplete',
                onHandleStopLoading
            );
            router.events.off(
                'routeChangeError',
                onHandleStopLoading
            );
        };
    }, [router]);

    if (loading) {
        return (
            <article
                className='flex items-center bg-[#fff] z-[99999999] justify-center transition-transform ease-in-out duration-500 h-screen fixed top-0 left-0 right-0 bottom-0'
            >
                <img
                    priority
                    src='https://marley-theme.myshopify.com/cdn/shop/files/matley-footer-logo_x78@2x.png?v=1614296702'

                    className="animate-bounce "
                    alt=""
                />
            </article>
        );
    }

    return <></>;
};