"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/user/profile");

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

// export async function getStaticProps() {
//   const router = useRouter();
//   router.replace("/user/profile");
//   return {
//     props: {},
//   };
// }
