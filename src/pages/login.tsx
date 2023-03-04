import LoginForm from "@/components/LoginForm";
import PublicLayout from "@/components/layouts/PublicLayout";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";

export default function LoginPage() {
  return (
    <PublicLayout>
      <Head>
        <title>Login</title>
        {/* Insert additional meta tags for SEO */}
      </Head>
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
      <div className="form-container [ w-max px-12 ][ bg-white ][ flex items-center justify-center ]">
        <LoginForm />
      </div>
    </PublicLayout>
  )
}

export const getStaticProps: GetServerSideProps = async (context) => {
  return {
    props: {}
  }
}
