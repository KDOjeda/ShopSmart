'use client';

import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import styles from './signup.module.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res?.user) {
        console.log('Sign-up successful:', res);
        sessionStorage.setItem('user', JSON.stringify(true));
        setEmail('');
        setPassword('');
        router.push('/'); // Redirect to main page
      } else {
        console.error('Sign-up failed.');
      }
    } catch (e) {
      console.error('Error during sign-up:', e);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 ${styles.body}`}>
      <div className="flex w-full max-w-3xl rounded-lg shadow-2xl overflow-hidden">
        {/* Image Section (Left Side) */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/originals/15/17/c9/1517c93850f40dca2f73e9ebfcebda02.jpg")',
          }}
        ></div>

        {/* Form Section (Right Side) */}
        <div className={`w-1/2 p-8 ${styles.signIn}`}>
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          {error && (
            <p className="text-red-500 text-center mb-4">
              {error.message || 'Failed to sign up. Please try again.'}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                loading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{' '}
            <a href="/sign-in" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
