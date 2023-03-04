import PublicLayout from "@/components/layouts/PublicLayout";
import SignupForm from "@/components/SignupForm";
import Head from "next/head";
import Image from "next/image";

export default function SignupPage({  }) {
  return (
    <PublicLayout>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="form-container [ w-max px-12 ][ bg-white ][ flex items-center justify-center ]">
        <SignupForm />
      </div>
      <div className="image-container w-full">
        <div className="[ image ][ bg-gray-300 ][ flex flex-grow justify-center items-center ][ h-full px-10 ]">
          <Image
            className="object-cover"
            src="/placeholder-image.jpg"
            alt="placeholder image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </PublicLayout>
  )
}