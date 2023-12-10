import { getReader } from "@/server/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";

export default async function Page() {
  const test = await getReader().collections.articles.readOrThrow("ar/offline");
  const doc = await test.content();
  return (
    <div>
      <DocumentRenderer document={doc} />
    </div>
  );
}
