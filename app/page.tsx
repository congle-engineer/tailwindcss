import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="w-100 h-100">
        <Image
          className="size-24 object-center"
          src="/img/snow-mountains.jpg"
          alt="Snow Mountains"
          width={1000}
          height={1000}
        />
      </div>

      <Image
        className="h-48 w-96 object-cover"
        src="/img/snow-mountains.jpg"
        alt="Snow Mountains"
        width={1000}
        height={1000}
      />

      <Image
        className="h-48 w-96 object-contain"
        src="/img/snow-mountains.jpg"
        alt="Snow Mountains"
        width={1000}
        height={1000}
      />

      <Image
        className="h-48 w-96 object-fill"
        src="/img/snow-mountains.jpg"
        alt="Snow Mountains"
        width={1000}
        height={1000}
      />

      <Image
        className="h-48 w-96 object-scale-down"
        src="/img/snow-mountains.jpg"
        alt="Snow Mountains"
        width={1000}
        height={1000}
      />

      <Image
        className="h-48 w-96 object-none"
        src="/img/snow-mountains.jpg"
        alt="Snow Mountains"
        width={1000}
        height={1000}
      />

      <article>
        <Image
          className="float-left"
          src="/img/snow-mountains.jpg"
          alt="Snow Mountains"
          width={300}
          height={300}
        />
        <Image
          className="float-right"
          src="/img/green-mountains.jpg"
          alt="Green Mountains"
          width={100}
          height={100}
        />
        <p className="clear-both">
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies.
        </p>
      </article>

      <article>
        <Image
          className="float-none"
          src="/img/mountain3.jpg"
          alt="Mountain 3"
          width={200}
          height={200}
        />
        <p>
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies.
        </p>
      </article>

      <p>
        When controlling the flow of text, using the CSS property{" "}
        <span className="inline bg-gray-500 text-white px-2 py-1">
          display: inline
        </span>{" "}
        will cause the text inside the element to wrap normally
      </p>

      <p>
        While using the property{" "}
        <span className="inline-block bg-gray-500 text-white px-2 py-1 w-1/2">
          display: inline-block
        </span>{" "}
        will wrap the element to prevent the text inside from extending beyond
        its parent
      </p>

      <p>
        Lastly, using the property{" "}
        <span className="block bg-gray-500 text-white px-2 py-1">
          display: block
        </span>{" "}
        will put the element on its own line and fill its parent
      </p>

      <div className="p-4">
        <div className="flow-root">
          <div className="my-4">
            Well, let me tell you something, funny boy. Y'know that little
            stamp, the one that says "New York Public Library"? Well that may
            not mean anything to you, but that means a lot to me. One whole hell
            of a lot.
          </div>
        </div>
        <div className="flow-root">
          <div className="my-4">
            Sure, go ahead, laugh if you want to. I've seen your type before:
            Flashy, making the scene, flaunting convention. Yeah, I know what
            you're thinking. What's this guy making such a big stink about old
            library books? Well, let me give you a hint, junior.
          </div>
        </div>
      </div>

      <div className="flow-root bg-gray-100">
        <div className="float-left bg-blue-300 w-1/2">Float Left</div>
        <div className="float-right bg-yellow-300 w-1/2">Float Right</div>
      </div>

      <div className="box-border size-32 border-4 p-4">
        <p>A simple text here</p>
      </div>

      <div className="box-content size-32 border-4 p-4">
        <p>A simple text here</p>
      </div>

      <div className="w-1/2 box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white text-5xl">
        Hello
        <br />
        World
      </div>

      <div className="w-1/2 box-decoration-clone bg-linear-to-r text-5xl from-indigo-600 to-pink-500 px-2 text-white">
        Hello
        <br />
        World
      </div>

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
