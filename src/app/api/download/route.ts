import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    const extractVideoId = (rawUrl: string) => {
        try {
            const parsedUrl = new URL(rawUrl);
            const hostname = parsedUrl.hostname.replace(/^www\./, '');
            const playlistId = parsedUrl.searchParams.get('list');

            if (playlistId) {
                return { type: 'playlist', id: playlistId };
            }

            if (hostname === 'youtu.be') {
                const idFromPath = parsedUrl.pathname.split('/')[1];
                return { type: 'video', id: idFromPath || null };
            }

            const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
            const pathPrefix = pathParts[0];
            const pathId = pathParts[1];

            if (pathPrefix === 'shorts' || pathPrefix === 'embed') {
                return { type: 'video', id: pathId || null };
            }

            const videoId = parsedUrl.searchParams.get('v');
            if (videoId) {
                return { type: 'video', id: videoId };
            }
        } catch (error) {
            // fall through to regex fallback
        }

        const videoRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const playlistRegex = /(?:youtube\.com\/playlist\?list=)([a-zA-Z0-9_-]+)/;

        if (rawUrl.match(playlistRegex)) {
            return { type: 'playlist', id: rawUrl.match(playlistRegex)?.[1] || null };
        }

        if (rawUrl.match(videoRegex)) {
            return { type: 'video', id: rawUrl.match(videoRegex)?.[1] || null };
        }

        return { type: null, id: null };
    };

    const { type, id } = extractVideoId(url);

    if (!id) {
        return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
    }

    if (type === 'playlist') {
        return NextResponse.json({ message: 'This is a playlist' }, { status: 200 });
    }

    const apiKey = process.env.RAPID_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: 'Missing RAPID_API_KEY in environment' }, { status: 500 });
    }

    const apiUrl = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${encodeURIComponent(id)}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'ytstream-download-youtube-videos.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(apiUrl, options);

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch video data' }, { status: 500 });
        }

        const data: VideoData = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error fetching video data:', error);  // Logs the error for debugging in Vercel
        return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
    }
}
