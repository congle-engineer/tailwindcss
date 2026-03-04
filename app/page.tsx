"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <div className="z-50 -ml-0 flex h-16 w-16 items-center justify-center rounded-full bg-red-500 font-bold text-white">
          5
        </div>
        <div className="z-40 -ml-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
          4
        </div>
        <div className="z-30 -ml-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 font-bold text-white">
          3
        </div>
        <div className="z-20 -ml-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 font-bold text-white">
          2
        </div>
        <div className="z-10 -ml-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 font-bold text-white">
          1
        </div>
      </div>
      <hr />

      <div className="my-8 grid grid-cols-3 gap-4">
        <div className="h-16 bg-gray-400">01</div>
        <div className="invisible h-16 bg-gray-400">02</div>
        <div className="h-16 bg-gray-400">03</div>
      </div>
      <table className="border-black-500 border">
        <thead>
          <tr>
            <th>Invoice #</th>
            <th>Client</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#100</td>
            <td>Pendant Publishing</td>
            <td>$2,000.00</td>
          </tr>
          <tr className="collapse">
            <td>#101</td>
            <td>Kruger Industrial Smoothing</td>
            <td>$545.00</td>
          </tr>
          <tr>
            <td>#102</td>
            <td>J.Peterman</td>
            <td>$10,000.25</td>
          </tr>
        </tbody>
      </table>
      <hr />

      <div className="relative m-4 size-32 bg-yellow-400">
        <div className="absolute top-0 left-0 size-16 bg-gray-400">01</div>
      </div>
      <div className="relative m-4 size-32 bg-yellow-400">
        <div className="absolute inset-x-0 top-0 h-16 bg-gray-400">02</div>
      </div>
      <div className="relative m-4 size-32 bg-yellow-400">
        <div className="absolute top-0 right-0 size-16 bg-gray-400">03</div>
      </div>
      <div className="relative m-4 size-32 bg-yellow-400">
        <div className="absolute inset-y-0 left-0 w-16 bg-gray-400">04</div>
      </div>
      <div className="relative m-4 size-32 bg-yellow-400">
        <div className="absolute inset-0 bg-gray-400">05</div>
      </div>
      <div className="relative m-4 size-32 bg-yellow-400">
        <div className="absolute inset-y-0 right-0 w-16 bg-gray-400">06</div>
      </div>
      <div className="relative m-4 size-32 bg-yellow-400">
        <div className="absolute bottom-0 left-0 size-16 bg-gray-400">07</div>
      </div>
      <div className="relative m-4 size-32 bg-yellow-400">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gray-400">08</div>
      </div>
      <div className="relative m-4 size-32 bg-yellow-400">
        <div className="absolute right-0 bottom-0 size-16 bg-gray-400">09</div>
      </div>
      <hr />

      <div className="relative h-96">
        <p>Relative parent</p>
        <div className="absolute bottom-0 left-0">
          <p>Absolute child</p>
        </div>
      </div>
      <hr />

      <div className="m-8 h-48 w-96 overflow-auto overscroll-auto">
        <p>
          Well, let me tell you something, funny boy. Y'know that little stamp,
          the one that says "New York Public Library"? Well that may not mean
          anything to you, but that means a lot to me. One whole hell of a lot.
          Sure, go ahead, laugh if you want to. I've seen your type before:
          Flashy, making the scene, flaunting convention. Yeah, I know what
          you're thinking. What's this guy making such a big stink about old
          library books? Well, let me give you a hint, junior. Maybe we can live
          without libraries, people like you and me. Maybe. Sure, we're too old
          to change the world, but what about that kid, sitting down, opening a
          book, right now, in a branch at the local library and finding drawings
          of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese
          Brothers? Doesn't HE deserve better?
        </p>
      </div>
      <hr />

      <div className="overflow-visible">
        <h1>Overflow Visible</h1>
      </div>
      <hr />

      <div className="m-4 h-48 bg-gray-400">
        <Image
          className="size-8 object-top-left"
          src="/img/snow-mountains.jpg"
          alt="Snow Mountains"
          width={96}
          height={48}
        />
      </div>

      <div className="m-4 h-48 bg-gray-400">
        <Image
          className="size-8 object-center"
          src="/img/snow-mountains.jpg"
          alt="Snow Mountains"
          width={96}
          height={48}
        />
      </div>

      <h1>Object Cover</h1>
      <Image
        className="h-48 w-96 object-cover"
        src="/img/snow-mountains.jpg"
        alt="Snow Mountains"
        width={960}
        height={480}
      />
      <h1>Object Contain</h1>
      <Image
        className="h-48 w-96 object-contain"
        src="/img/snow-mountains.jpg"
        alt="Snow Mountains"
        width={960}
        height={480}
      />
      <h1>Object Fill</h1>
      <Image
        className="h-48 w-96 object-fill"
        src="/img/snow-mountains.jpg"
        alt="Snow Mountains"
        width={960}
        height={480}
      />
      <h1>Object Scale Down</h1>
      <Image
        className="h-48 w-96 object-scale-down"
        src="/img/snow-mountains.jpg"
        alt="Snow Mountains"
        width={960}
        height={480}
      />
      <h1>Object None</h1>
      <Image
        className="h-48 w-96 object-none"
        src="/img/snow-mountains.jpg"
        alt="Snow Mountains"
        width={960}
        height={480}
      />
      <hr />

      <div className="isolate">
        <h1>Isolation</h1>
      </div>
      <hr />

      <article>
        <Image
          className="float-left"
          src="/img/snow-mountains.jpg"
          alt="Snow Mountains"
          width={200}
          height={100}
        />
        <Image
          className="float-right"
          src="/img/green-mountains.jpg"
          alt="Green Mountains"
          width={400}
          height={400}
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
      <hr />

      <article>
        <Image
          className="float-right"
          src="/img/snow-mountains.jpg"
          alt="Mountains"
          width={200}
          height={200}
        />
        <p>
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we&apos;re too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn&apos;t HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you&apos;d better think again. This is about that kid&apos;s right to
          read a book without getting his mind warped! Or: maybe that turns you
          on, Seinfeld; maybe that&apos;s how y&apos;get your kicks. You and
          your good-time buddies.
        </p>
      </article>
      <hr />

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
          width={200}
          height={200}
        />
        <Image
          className="aspect-square"
          src="/img/mountain2.jpg"
          alt="Mountain2"
          width={200}
          height={200}
        />
        <Image
          className="aspect-square"
          src="/img/mountain3.jpg"
          alt="Mountain3"
          width={200}
          height={200}
        />
      </div>
      <hr />

      <Image
        className="aspect-3/2 object-cover"
        src="/img/villas.jpg"
        alt="Villas"
        width={200}
        height={200}
      />
      <iframe
        className="aspect-video md:aspect-square"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      ></iframe>
    </div>
  );
}
