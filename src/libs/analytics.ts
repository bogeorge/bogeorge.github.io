export const trackPageView = (url: string) => {
    console.log(`Tracking page view for: ${url}`);
    // Add your analytics tracking logic here
};

export const trackEvent = (event: string, data: Record<string, any>) => {
    console.log(`Tracking event: ${event}`, data);
    // Add your analytics tracking logic here
};