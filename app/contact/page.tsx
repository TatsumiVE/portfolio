"use client";
import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
const Conatct = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <div>Say Hello 👋</div>
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              &quot;Let&apos;s connect and turn ideas into reality. Whether you
              have a project in mind, want to collaborate, or just say hello,
              I&apos;m here to listen and bring your vision to life
            </p>
          </div>

          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        <div className="grid xl:grid-cols-2 xl:mb-24 mb-8">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>yehtutkyaw.tatsumi@gmail.com</div>
            </div>

            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Bago, Myanmar</div>
            </div>

            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+95 09 445 540 073</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Conatct;
