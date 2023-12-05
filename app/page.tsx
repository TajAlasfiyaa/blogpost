import { reader } from "./reader";
import NavBar from "./components/NavBar";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <>
      <NavBar />
      <div className="m-auto max-w-3xl prose prose-xl">
        <h1>Keystatic ⚡️</h1>
        <p>This homepage shows how to load a collection from the reader API.</p>
        <p>
          <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
          below to view a post in the collection.
        </p>
      </div>
    </>
  );
}
