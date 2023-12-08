import { cookies, draftMode } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode();

  return (
    <div>
      {children}

      {isEnabled && (
        <div>
          Draft mode ({cookies().get("ks-branch")?.value}){" "}
          <form method="POST" action="/preview/end">
            <button>End preview</button>
          </form>
        </div>
      )}
    </div>
  );
}
