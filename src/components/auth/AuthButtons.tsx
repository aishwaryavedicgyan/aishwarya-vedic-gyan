import { useAuth0 } from '@auth0/auth0-react';

export function AuthButtons() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center space-x-4">
      {isAuthenticated ? (
        <button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className="text-gray-700 hover:text-indigo-600 font-medium"
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="text-gray-700 hover:text-indigo-600 font-medium"
        >
          Log In
        </button>
      )}
    </div>
  );
} 