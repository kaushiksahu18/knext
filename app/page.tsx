import { BackgroundBeams } from "@/components/ui/background-beams";
import { SignupForm } from "@/_auth/Signup";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100dvw] h-[100dvh]">
      <SignupForm />
      <BackgroundBeams />
    </div>
  );
}
