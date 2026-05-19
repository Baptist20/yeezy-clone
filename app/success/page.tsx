"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div>
      <p>Your payment was successful!!</p>
      <Link href={"/"} className="underline">
        Go back home
      </Link>
    </div>
  );
}
