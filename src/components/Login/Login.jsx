import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { toast } from 'react-toastify';

const bgImages = [
    'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1200&h=1600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=1600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=1600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=1200&h=1600&fit=crop&q=80'
];

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [bgIndex, setBgIndex] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setBgIndex((prev) => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            toast.success('Welcome back! Login successful.');
            navigate('/');
        } catch (error) {
            toast.error(error.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    const loginWithGoogle = async () => {
        setLoading(true);
        const { GoogleAuthProvider } = await import('firebase/auth');
        const provider = new GoogleAuthProvider();

        try {
            await signInWithPopup(auth, provider);
            toast.success('Login with Google successful!');
            navigate('/');
        } catch (error) {
            toast.error(error.message || 'Google login failed.');
        } finally {
            setLoading(false);
        }
    };

    const loginWithGithub = async () => {
        setLoading(true);
        const { GithubAuthProvider } = await import('firebase/auth');
        const provider = new GithubAuthProvider();

        try {
            await signInWithPopup(auth, provider);
            toast.success('Login with GitHub successful!');
            navigate('/');
        } catch (error) {
            toast.error(error.message || 'GitHub login failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex">
            {/* Left Panel — Image */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-neutral-900 overflow-hidden">
                {bgImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Scenic view"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            index === bgIndex ? 'opacity-80 animate-ken-burns' : 'opacity-0'
                        }`}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white z-10 pointer-events-none">
                    <h2 className="font-display text-4xl font-bold mb-4">Discover the untouched corners of the world.</h2>
                    <p className="text-body-lg text-white/80 max-w-md">Join thousands of travelers who are finding their next dream destination every day.</p>
                </div>
            </div>

            {/* Right Panel — Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-12 py-20 lg:py-12 relative">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="mb-10">
                        <Link to="/" className="inline-flex items-center gap-2.5 mb-10 group">
                            <div className="w-9 h-9 bg-brand-700 rounded-xl flex items-center justify-center group-hover:bg-brand-800 transition-colors">
                                <span className="text-white font-bold text-sm">D</span>
                            </div>
                            <span className="font-semibold text-lg text-neutral-900 tracking-tight">
                                Dream<span className="text-brand-600">Dest</span>
                            </span>
                        </Link>
                        <h1 className="font-display text-4xl font-bold text-neutral-900 mb-3 leading-tight">
                            Welcome <span className="italic text-brand-700">back</span>
                        </h1>
                        <p className="text-body text-neutral-500">
                            Please enter your details to sign in.
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <button
                            onClick={loginWithGoogle}
                            disabled={loading}
                            className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-neutral-200 bg-white text-body-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 disabled:opacity-50"
                            id="google-login"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google
                        </button>
                        <button
                            onClick={loginWithGithub}
                            disabled={loading}
                            className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-neutral-200 bg-white text-body-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 disabled:opacity-50"
                            id="github-login"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 border-t border-neutral-200" />
                        <span className="text-caption text-neutral-400 uppercase tracking-wider font-medium">or</span>
                        <div className="flex-1 border-t border-neutral-200" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-body-sm font-medium text-neutral-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                className="input-field py-3"
                                id="login-email"
                            />
                        </div>

                        <div>
                            <label className="block text-body-sm font-medium text-neutral-700 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                                className="input-field py-3"
                                id="login-password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary justify-center py-3.5 text-body rounded-xl disabled:opacity-50 mt-2"
                            id="login-submit"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Signing in...
                                </span>
                            ) : 'Sign in'}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="mt-8 text-body-sm text-neutral-500">
                        Don&apos;t have an account?{' '}
                        <Link to="/register" className="text-brand-700 font-semibold hover:text-brand-800 transition-colors">
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
