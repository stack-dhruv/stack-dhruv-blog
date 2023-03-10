import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const header = (
        <header>
            <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
                <Link href="/">
                    <h1 className="text-2xl text-white font-bold mt-4">
                        Dhruv's Blog
                    </h1>
                </Link>
                <p className="text-slate-300">🤟 Welcome to my tech blog. 💻</p>
            </div>
        </header>
    );

    const footer = (
        <footer>
            <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
                <a href="https://github.com/stack-dhruv">
                    <h3>@stack-dhruv</h3>
                </a>
            </div>
        </footer>
    );

    return (
        <html>
            <head>
                <title>Stack-Dhruv - Official blog from Dhruvkumar Patel</title>
                <meta
                    name="title"
                    content="Stack-Dhruv - Official blog from Dhruvkumar Patel"
                />
                <meta
                    name="description"
                    content="Stack-Dhruv is a tech blog created by an individual who is passionate about technology and wants to share his knowledge and insights with the world. The blog covers a wide range of topics related to technology, including software development, web development, mobile app development, artificial intelligence, machine learning, and more. "
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://stack-dhruv.tech/" />
                <meta
                    property="og:title"
                    content="Stack-Dhruv - Official blog from Dhruvkumar Patel"
                />
                <meta
                    property="og:description"
                    content="Stack-Dhruv is a tech blog created by an individual who is passionate about technology and wants to share his knowledge and insights with the world. The blog covers a wide range of topics related to technology, including software development, web development, mobile app development, artificial intelligence, machine learning, and more. "
                />
                <meta property="og:image" content="/public/cover.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://stack-dhruv.tech/"
                />
                <meta
                    property="twitter:title"
                    content="Stack-Dhruv - Official blog from Dhruvkumar Patel"
                />
                <meta
                    property="twitter:description"
                    content="Stack-Dhruv is a tech blog created by an individual who is passionate about technology and wants to share his knowledge and insights with the world. The blog covers a wide range of topics related to technology, including software development, web development, mobile app development, artificial intelligence, machine learning, and more. "
                />
                <meta property="twitter:image" content="/public/cover.png" />
            </head>
            <body>
                <div className="mx-auto  max-w-3xl px-6">
                    {header}
                    {children}
                    {footer}
                </div>
            </body>
        </html>
    );
}
