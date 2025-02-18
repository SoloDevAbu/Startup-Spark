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
      image: "https://static.vecteezy.com/system/resources/thumbnails/039/070/798/small_2x/ai-generated-a-blue-splash-of-water-forms-a-crown-like-shape-as-it-rises-from-the-bottom-of-the-image-ai-generative-photo.jpg",
      category: "Robots",
      title: 'We Robots',
      description: 'This is a description'
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
