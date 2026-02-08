import { CheckIcon, BoltIcon, ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Home() {
    const features = [
        {
            icon: ShieldCheckIcon,
            title: "Global Access",
            description: "Download from anywhere, anytime without restrictions"
        },
        {
            icon: BoltIcon,
            title: "Lossless Quality (4K)",
            description: "Crystal-clear 4K downloads with zero quality loss"
        },
        {
            icon: LockClosedIcon,
            title: "No Privacy Risks",
            description: "Your data stays private, no tracking or logging"
        },
        {
            icon: CheckIcon,
            title: "Fast Downloads",
            description: "Lightning-fast speeds optimized for your needs"
        },
    ];

    const steps = [
        {
            number: "01",
            title: "Paste URL",
            description: "Copy and paste your YouTube video link"
        },
        {
            number: "02",
            title: "Select Quality",
            description: "Choose your preferred quality up to 4K"
        },
        {
            number: "03",
            title: "Download",
            description: "Get your video instantly, ad-free"
        },
    ];

    const testimonials = [
        {
            quote: "This app is incredible! It has made downloading videos so easy.",
            author: "David"
        },
        {
            quote: "I love the quality and speed of the downloads. Highly recommend!",
            author: "Joseph"
        },
    ];

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                Download Videos from <span className="text-red-600">YouTube</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Get your favorite YouTube videos and music in stunning quality. Fast, secure, and completely free.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Link href="/download">
                                    <button className="glass-button px-8 py-3 text-lg font-semibold text-white bg-red-600 border-0 hover:bg-red-700 hover:shadow-lg shadow-md transition-all">
                                        Get Started
                                    </button>
                                </Link>
                                <Link href="#how-it-works">
                                    <button className="glass-button px-8 py-3 text-lg font-semibold text-slate-900 hover:bg-slate-50 shadow-md">
                                        Learn More
                                    </button>
                                </Link>
                            </div>

                            {/* Feature Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <feature.icon className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold text-slate-900 text-sm">{feature.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Decorative Element */}
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="relative w-full h-96">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl transform -rotate-6"></div>
                                <div className="absolute inset-0 bg-white rounded-3xl border border-black/10 shadow-lg transform rotate-3 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl font-bold text-red-600 mb-4">▶</div>
                                        <p className="text-slate-600 font-semibold">Ready to Download?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 lg:py-32 px-6 lg:px-8 bg-slate-50" id="how-it-works">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">How It Works</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Simple, fast, and straightforward. Get your videos in three easy steps.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="glass-panel p-8 lg:p-10 text-center hover:shadow-lg transition-all duration-300">
                                <div className="text-5xl font-bold text-red-600 mb-4 opacity-20">{step.number}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 lg:py-32 px-6 lg:px-8" id="features">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Why Choose YT-DL</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Experience the cleanest, fastest, and most secure way to download videos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-10 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckIcon className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Ad-Free Experience</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Enjoy uninterrupted downloads without any annoying ads. A seamless, clean experience every time.
                            </p>
                        </div>

                        <div className="glass-panel p-10 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                                <BoltIcon className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Lightning-Fast Speeds</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Get your videos in seconds with our optimized download technology. No waiting, just pure speed.
                            </p>
                        </div>

                        <div className="glass-panel p-10 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                                <ShieldCheckIcon className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">High-Quality Downloads</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Download in stunning 4K quality. Crystal-clear videos and music with zero quality loss.
                            </p>
                        </div>

                        <div className="glass-panel p-10 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                                <LockClosedIcon className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Privacy Protected</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Your data stays private. No tracking, no logging, no compromises on your security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 lg:py-32 px-6 lg:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">What Our Users Say</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="glass-panel p-8 lg:p-10">
                                <p className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <p className="font-semibold text-slate-900">{testimonial.author}</p>
                                <p className="text-sm text-slate-500">YT-DL User</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Ready to Get Started?</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        Join thousands of users who trust YT-DL for fast, secure, and high-quality downloads.
                    </p>
                    <Link href="/download">
                        <button className="glass-button px-10 py-4 text-xl font-semibold text-white bg-red-600 border-0 hover:bg-red-700 hover:shadow-lg shadow-md transition-all inline-block">
                            Download Videos Now
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
