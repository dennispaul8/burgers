declare global {
    interface Window {
        twttr?: {
            widgets: {
                load: (el?: HTMLElement) => void;
                events?: {
                    bind: (event: string, cb: (e: {
                        target: HTMLElement;
                    }) => void) => void;
                    unbind?: (event: string, cb: (e: {
                        target: HTMLElement;
                    }) => void) => void;
                };
            };
        };
    }
}
export type Donation = {
    id: number;
    tweetUrl: string;
    date?: string;
    content?: string;
    txLinks?: {
        label: string;
        url: string;
    }[];
    charityLogo?: string;
    qr?: string;
};
export default function DonationCard({ donation }: {
    donation: Donation;
}): import("react/jsx-runtime").JSX.Element;
