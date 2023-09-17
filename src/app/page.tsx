"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/user/profile");
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>
          Hello, I'm a Next.js app!.. Redirecting to profile page
        </h1>
      </div>
    </main>
  );
}
