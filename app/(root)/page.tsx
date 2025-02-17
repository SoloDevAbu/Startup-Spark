import Image from "next/image";
import Link from "next/link";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams} : {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Abu'},
      _id: 1,
      image: "https://images.app.goo.gl/pZvtDKV1Btph4mDV9",
      category: "Robots",
      title: 'We Robots',
    },
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br/> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notiched in Virtua Competition
        </p>

        <SearchForm query={query}/>
      </section>

      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-result">No Startup Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
