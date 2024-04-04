import React, { useContext, useEffect } from 'react';
import { useStorageState } from '../hooks/useStorageState';
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged } from "@firebase/auth";
import * as Google from "expo-auth-session/providers/google"
import * as WebBrowser from "expo-web-browser"
import { auth } from "@/firebase.config";
import { useRootNavigationState, useRouter, useSegments } from 'expo-router';
import { LoadingIndicator } from '@/components/Global/LoadingIndicator';
import dayjs from 'dayjs';

WebBrowser.maybeCompleteAuthSession()

type User = {
  id: string;
  username: string;
  email: string;
};

const AuthContext = React.createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

function useProtectedRoute(user: string | null) {
  const segments = useSegments();
  const router = useRouter();

  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;

    const isAuthGroup = segments[0] === "(auth)";

    // console.log("user", user, isAuthGroup, segments[0]);

    if (
      // If usernot signed in and the initial segment is not anything in the auth group.
      !user &&
      !isAuthGroup
    ) {
      // Redirect to the login page.
      router.push("/(auth)/login");
    } else if (user && isAuthGroup) {
      // const userData = JSON.parse(user)
      // console.log("userData", dayjs(userData.lastLoginAt), dayjs(userData.createdAt), dayjs(userData.createdAt).isSame(userData.lastLoginAt));
      
      // if (dayjs(userData.createdAt).isSame(userData.lastLoginAt)) {
      //   // Redirect to the login page.
      //   return router.push("/(auth)/register");
      // }
      // Redirect away from the login page.
      router.push("/(tabs)/");
    }
  }, [user, segments]);
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID
  })

  useEffect(() => {
    // console.log("response", response);
    
    if (response?.type === "success") {
      const { id_token } = response.params
      const credentials = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credentials)
    } else {
      console.log(JSON.stringify(response));
    }
  }, [response])

  useEffect(() => {
    console.log("unsubscribe");
    
    const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        setSession(
          JSON.stringify({
            ...user.providerData[0],
            ...user.stsTokenManager,
            createdAt: user?.metadata.creationTime,
            lastLoginAt: user?.metadata.lastSignInTime,
          }, null, 2)
        )

        // console.log("login data", user, user.createdAt);
      } else {
        console.log("user not found");
      }
    })

    return () => unsubscribe()
  }, [response])

  const signOut = () => {
    setSession(null);
  };
  
  // console.log("before useProtectedRoute", loginData.metadata.creationTime);
  
  useProtectedRoute(session)

  return (
    <AuthContext.Provider
      value={{
        signIn: () => promptAsync(),
        signOut: () => signOut(),
        session,
        isLoading,
      }}>
      {isLoading ? <LoadingIndicator /> : props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('useAuth must be used within a <SessionProvider />')
  }

  return authContext
}