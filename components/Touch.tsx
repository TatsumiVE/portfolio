"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const Touch = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-3xl text-center mb-8">
            Passionate about turning ideas into reality! Let&apos;s explore
            collaboration—reach me through the contact details provided, and let
            our creative journey begin.
          </h2>
          <Link href="/contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Touch;
