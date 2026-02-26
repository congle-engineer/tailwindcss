import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>
        When controlling the flow of text, using the CSS property{" "}
        <span className="inline">display: inline</span> will cause the text
        inside the element to wrap normally.
      </p>
      <p>
        While using the property{" "}
        <span className="inline-block">display: inline-block</span> will wrap
        the element to prevent the text inside from extending beyond its parent
      </p>
      <p>
        Lastly, using the property <span className="block">display: block</span>{" "}
        will put the element on its own line and fill its parent.
      </p>
      <hr />

      <div className="p-4">
        <div className="flow-root">
          <div className="my-4">
            Well, let me tell you something, funny boy. know that little stamp,
            the one that says New York Public Library? Well that may not mean
            anything to you, but that means a lot to me. One whole hell of a
            lot.
          </div>
        </div>
        <div className="flow-root">
          <div className="my-4">
            Sure, go ahead, laugh if you want to. I have seen your type before:
            Flashy, making the scene, flaunting convention. Yeah, I know what
            you are thinking. What is this guy making such a big stink about old
            library books? Well, let me give you a hint, junior.
          </div>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <span className="bg-pink-400">01</span>
        <span className="bg-blue-400">02</span>
        <span className="bg-green-400">03</span>
        <span className="bg-yellow-400">04</span>
        <span className="bg-red-400">05</span>
        <span className="bg-purple-400">06</span>
        <span className="bg-orange-400">07</span>
        <span className="bg-indigo-400">08</span>
        <span className="bg-teal-400">09</span>
      </div>
      <hr />

      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell text-left">Song</div>
            <div className="table-cell text-left">Artist</div>
            <div className="table-cell text-left">Year</div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell">The Sliding Mr.Bones</div>
            <div className="table-cell">Malcolm Lockyer</div>
            <div className="table-cell">1961</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Witchy Woman</div>
            <div className="table-cell">The Eagles</div>
            <div className="table-cell">1972</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Shining Star</div>
            <div className="table-cell">Earth, Wind, and Fire</div>
            <div className="table-cell">1975</div>
          </div>
        </div>
      </div>
      <hr />

      <div className="box-border size-32 border-4 p-4">
        <h1>Hello World! I&apos;m Cong Le</h1>
      </div>
      <hr />

      <div className="box-content size-32 border-4 p-4">
        <h1>Hello World! I&apos;m Cong Le</h1>
      </div>
      <hr />

      <span className="bg-linear-to-r from-indigo-600 to-pink-500 box-decoration-slice px-2 text-white">
        Hello
        <br />
        World
      </span>
      <hr />

      <span className="bg-linear-to-r from-indigo-600 to-pink-500 box-decoration-clone px-2 text-white">
        Hello
        <br />
        World
      </span>
      <hr />

      <div className="columns-2">
        <p>Well, let me tell you something ...</p>
        <p className="break-inside-avoid-column">Sure, go ahead, laugh ...</p>
        <p>Maybe we can live without ...</p>
        <p>Look. If you think this is ...</p>
      </div>
      <hr />

      <div className="columns-2">
        <p>Well, let me tell you something ...</p>
        <p className="break-before-column">Sure, go ahead, laugh ...</p>
        <p>Maybe we can live without ...</p>
        <p>Look. If you think this is ...</p>
      </div>
      <hr />

      <div className="columns-2">
        <p>Well, let me tell you something ...</p>
        <p className="break-after-column">Sure, go ahead, laugh ...</p>
        <p>Maybe we can live without ...</p>
        <p>Look. If you think this is ...</p>
      </div>
      <hr />

      <div className="columns-2 gap-4 sm:columns-3 sm:gap-8">
        <Image
          className="aspect-3/2"
          src="/img/mountain1.jpg"
          alt="Mountain1"
        />
        <Image
          className="aspect-square"
          src="/img/mountain2.jpg"
          alt="Mountain2"
        />
        <Image
          className="aspect-square"
          src="/img/mountain3.jpg"
          alt="Mountain3"
        />
      </div>
      <hr />

      <Image
        className="aspect-3/2 object-cover"
        src="/img/villas.jpg"
        alt="Villas"
      />
      <iframe
        className="aspect-video md:aspect-square"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      ></iframe>
    </div>
  );
}
