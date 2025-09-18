type Props = {
    apiUrl: string;
    sseUrl?: string | null;
    pollIntervalMs?: number;
    decimalPlaces?: number;
    className?: string;
};
export default function BurnCounter({ apiUrl, sseUrl, pollIntervalMs, decimalPlaces, className, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
