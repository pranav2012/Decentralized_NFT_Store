// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head } from 'next/document';

export default function head() {
    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
            <link rel="icon" href="/favicon.ico" />
            <link rel="manifest" href="/site.webmanifest"/>
        </Head>
    );
}
