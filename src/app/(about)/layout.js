import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "Decades of Expertise - 8+ Years and Counting",
  "Unleashing the Power of a Global Reach - Serving the World Wide",
  "Elite Services - 5-Star Quality Guaranteed",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
