import { Link } from "react-router-dom";
import DocumentTitle from './../../documentTitle/DocumentTitle';

const ErrorPage = () => {
    DocumentTitle('Page Not Found');
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="mb-8">
                    <span className="text-8xl font-bold text-brand-100">404</span>
                </div>
                <h1 className="text-display-sm text-neutral-900 mb-3">Page not found</h1>
                <p className="text-body text-neutral-500 mb-8">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
                </p>
                <Link to="/" className="btn-primary gap-2" id="back-home">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;