import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="columns-2">
        <p className="break-inside-avoid-column">
          Well, let me tell you something, ...
        </p>
        <p>Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <div className="columns-2">
        <p className="break-after-column">
          Well, let me tell you something, ...
        </p>
        <p>Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <div className="columns-3 space-y-4 gap-4">
        <Image
          className="aspect-3/2"
          src="/img/mountain1.jpg"
          alt="Mountain 1"
          width={1000}
          height={1000}
        />

        <Image
          className="aspect-square"
          src="/img/mountain2.jpg"
          alt="Mountain 1"
          width={1000}
          height={1000}
        />

        <Image
          className="aspect-square"
          src="/img/mountain3.jpg"
          alt="Mountain 1"
          width={1000}
          height={1000}
        />

        <Image
          className="aspect-square"
          src="/img/mountain4.jpg"
          alt="Mountain 1"
          width={1000}
          height={1000}
        />

        <Image
          className="aspect-3/2"
          src="/img/mountain5.jpg"
          alt="Mountain 1"
          width={1000}
          height={1000}
        />

        <Image
          className="aspect-square"
          src="/img/mountain6.jpg"
          alt="Mountain 1"
          width={1000}
          height={1000}
        />

        <Image
          className="aspect-square"
          src="/img/mountain7.jpg"
          alt="Mountain 1"
          width={1000}
          height={1000}
        />

        <Image
          className="aspect-square"
          src="/img/mountain8.jpg"
          alt="Mountain 1"
          width={1000}
          height={1000}
        />

        <Image
          className="aspect-3/2"
          src="/img/mountain9.jpg"
          alt="Mountain 1"
          width={1000}
          height={1000}
        />
      </div>

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
