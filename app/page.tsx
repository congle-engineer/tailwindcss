import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <iframe
        className="aspect-video w-1/2"
        src="https://www.youtube.com/embed/Yzm0YKYP6Vc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <Image
        className="aspect-16/9 object-cover"
        src="/img/villas.jpg"
        alt="Villas"
        width={1000}
        height={1000}
      />

      <h1 className="text-3xl font-bold underline">Hello World</h1>
    </div>
  );
}
