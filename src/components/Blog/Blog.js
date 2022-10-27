import React from 'react';

const Blog = () => {
    return (
        <section className=" bg-gray-900  text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8  text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">what is Cors?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">CORS is a unique web technology in that it has both a server-side and a client-side component. The server-side component configures which types of cross-origin requests are allowed, while the client-side component controls how cross-origin requests are made.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why are you using firebase? What other options do you have to implement authentication?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. <br />
                            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does the private route work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Node? How does Node work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;