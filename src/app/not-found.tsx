import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-300px)] bg-blueprint-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl p-8 text-center shadow-lg">
        <h1 className="text-4xl font-bold text-blueprint mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Please check the URL and try again.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
