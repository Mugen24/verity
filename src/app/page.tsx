import { SearchBar } from "./components/primitives/SearchBar";

export default function Home() {
  return (
    <section
      className="
        bg-[url(/bg1.png)]
        h-[70vh]
        grid
        grid-rows-5
      "
    >
      <h1
        className="
          text-5xl
          text-wrap
          w-[30vw]
          row-start-2
          justify-self-center
        "
      >
        Find a trusted provider for your problem
      </h1>
      <SearchBar
        className="
          row-start-4
          row-span-1
          justify-self-center
        "
      />
    </section>
  );
}
