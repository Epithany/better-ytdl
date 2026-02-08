"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Thumbnail {
    url: string;
}

interface AdaptiveFormat {
    url: string;
    qualityLabel?: string;
    audioQuality?: string;
}

interface VideoData {
    title: string;
    thumbnail: Thumbnail[];
    url: string;
    adaptiveFormats: AdaptiveFormat[];
    lengthSeconds: number;
}

interface DownloadFormProps {
    initialUrl?: string | null;
}

const DownloadForm: React.FC<DownloadFormProps> = ({ initialUrl }) => {
    const [url, setUrl] = useState<string>(initialUrl || '');
    const [resolution, setResolution] = useState<string>('');
    const [videoData, setVideoData] = useState<VideoData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isPlaylist, setIsPlaylist] = useState<boolean>(false);

    useEffect(() => {
        if (initialUrl) {
            setUrl(initialUrl);
            handleSearch(initialUrl);
        }
    }, [initialUrl]);

    const handleSearch = async (targetUrl?: string) => {
        const searchUrl = targetUrl ?? url;
        if (!searchUrl) {
            setError('Please enter a URL');
            return;
        }
        setLoading(true);
        setError(null);
        setIsPlaylist(false);

        try {
            const response = await fetch(`/api/download?url=${encodeURIComponent(searchUrl)}`);

            if (!response.ok) {
                throw new Error('Failed to fetch video data');
            }

            const data = await response.json();

            if (data.message === 'This is a playlist') {
                setIsPlaylist(true);
            } else {
                setVideoData(data as VideoData);
                setResolution(data.adaptiveFormats[0]?.url || '');
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async () => {
        try {
            if (!resolution) {
                throw new Error('Please select a resolution');
            }

            const link = document.createElement('a');
            link.href = resolution;
            link.setAttribute('download', `${videoData?.title || 'video'}.mp4`);

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error: any) {
            console.error('Download failed:', error.message);
            setError('Failed to download video. Please try again.');
        }
    };

    return (
        <div className="glass-panel w-full p-6 md:p-8">
            <div className="flex flex-col gap-3 text-center">
                <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase">
                    YT-DL Studio
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold">
                    Download YouTube videos in a tap
                </h1>
                <p className="text-base text-gray-600">
                    Paste a link to grab a video, short, or playlist. We&apos;ll fetch the
                    formats and let you choose the best quality.
                </p>
            </div>
            <div className="mt-6 space-y-4">
                <label className="text-sm font-medium text-gray-700">
                    Video URL
                    <input
                        type="text"
                        className="mt-2 w-full px-4 py-3 border border-white/60 bg-white/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-white/80"
                        placeholder="https://youtube.com/watch?v=..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </label>
                <button
                    className="w-full bg-black text-white py-3 rounded-2xl text-base font-semibold shadow-sm transition hover:bg-black/90"
                    onClick={() => handleSearch()}
                >
                    Fetch video
                </button>
            </div>

            {loading && <p className="text-center text-gray-600 mt-6">Loading...</p>}
            {error && <p className="text-center text-red-500 mt-6">{error}</p>}

            {isPlaylist && (
                <h2 className="text-center text-xl font-semibold text-red-500 mt-6">
                    Playlist support is coming back soon.
                </h2>
            )}

            {videoData && !isPlaylist && (
                <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_1fr] items-start">
                    <div className="glass-panel p-4">
                        <Image
                            src={videoData?.thumbnail[0]?.url || ''}
                            alt={videoData.title}
                            width={520}
                            height={300}
                            className="rounded-xl"
                            quality={100}
                        />
                        <div className="mt-4 space-y-1">
                            <p className="text-sm text-gray-500">Preview</p>
                            <p className="text-lg font-semibold">{videoData.title}</p>
                        </div>
                    </div>

                    <div className="glass-panel p-5 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Resolution</label>
                            <select
                                className="w-full border border-white/60 bg-white/70 px-4 py-2.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/20"
                                value={resolution}
                                onChange={(e) => setResolution(e.target.value)}
                            >
                                {videoData?.adaptiveFormats.map((item, index: number) => (
                                    <option key={index} value={item?.url}>
                                        {item.qualityLabel || item.audioQuality || 'Unknown'}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Format</label>
                            <select
                                disabled={!resolution}
                                className="w-full border border-white/60 bg-white/70 px-4 py-2.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/20"
                            >
                                <option value="">Video/mp4</option>
                            </select>
                        </div>
                        <div className="text-sm text-gray-500">
                            Duration <span className="font-semibold text-gray-800">{videoData.lengthSeconds}s</span>
                        </div>
                        <button
                            className="bg-black text-white py-3 w-full rounded-2xl text-base font-semibold shadow-sm transition hover:bg-black/90"
                            onClick={handleDownload}
                        >
                            Download now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DownloadForm;
