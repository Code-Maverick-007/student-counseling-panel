import { SignUp as ClerkSignUp } from "@clerk/clerk-react";

export default function SignUp() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>
        <div className="mt-8">
          <ClerkSignUp 
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            afterSignUpUrl="/dashboard"
            afterSignInUrl="/dashboard"
            redirectUrl="/dashboard"
            appearance={{
              elements: {
                card: 'shadow-lg rounded-lg p-8 bg-white',
                headerTitle: 'text-2xl font-bold text-gray-900',
                headerSubtitle: 'text-gray-600',
                formFieldLabel: 'text-sm font-medium text-gray-700',
                formFieldInput: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
                footerActionText: 'text-sm text-gray-600',
                footerActionLink: 'text-indigo-600 hover:text-indigo-500 font-medium',
                socialButtonsBlockButton: 'w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50',
                dividerText: 'text-sm text-gray-500',
                formButtonPrimary: 'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
