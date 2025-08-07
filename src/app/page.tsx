import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1 className="">
          <Hero />
        </h1>
      </div>
    </main>
  );
}
