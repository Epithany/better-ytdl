"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import DownloadForm from '@/components/DownloadForm';

const DownloadPageContent: React.FC = () => {
    const searchParams = useSearchParams();
    const videoIdFromQuery = searchParams.get('url');

    return (
        <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center p-4 md:py-10">
            <div className="max-w-screen-lg w-full">
                <DownloadForm initialUrl={videoIdFromQuery} />
            </div>
        </div>
    );
}

export default function DownloadContents() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DownloadPageContent />
        </Suspense>
    );
}
