import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { Header } from "./header";
import { Auth } from "./auth.js"; // Assuming Auth.jsx is in the same directory
import { auth, onAuthStateChanged } from "../firebase";
import type { User } from "firebase/auth";
import WeatherSkeleton from "./loading-skeleton";

export function Layout({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div><WeatherSkeleton /></div>; // loading state
  }

  if (!user) {
    return <Auth />;
  }

  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p>Made with 💗 by notJustDesigner</p>
        </div>
      </footer>
    </div>
  );
}
