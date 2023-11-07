import TypewriterTitle from "@/components/TypewriterTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen grainy from-rose-200 to-teal-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center">
          AI <span className="text-green-600 font-bold">Note Taking</span>{" "}
          Assistant
        </h1>
        <div className="mt-4"></div>
        <h2 className="font-semibold text-3xl text-center text-slate-700">
          <TypewriterTitle />
        </h2>
        <div className="mt-8 flex justify-center">
          <Link href="/dashboard">
            <Button className="bg-green-600">
              Get Started <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
            </Button>
          </Link>
        </div>
      </div>
      <footer>
        <div className="absolute bottom-0 left-0 right-0">
          <h3 className="text-xl text-center pb-5 font-semibold">Made with{" "}<span className="text-red-600">❤</span>{" "}by Rudra Vashishtha</h3>
        </div>
      </footer>
    </div>
  );
}
