import { Badge } from "./ui/badge";

interface TagListProps {
  title: string;
  tags: string[];
}

export function TagList({ title, tags }: TagListProps) {
  return (
    <section
      className="mt-8 px-6 max-w-5xl mx-auto"
      aria-labelledby={`${title.toLowerCase()}-section`}
    >
      <h2
        id={`${title.toLowerCase()}-section`}
        className="text-white text-lg font-bold mb-4"
      >
        {title}
      </h2>
      <div
        className="flex flex-wrap gap-3"
        role="list"
        aria-label={`${title} tags`}
      >
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-[#293038] text-[#9EABB8] cursor-pointer transition-colors duration-200 px-4 h-8 rounded-[12px] font-medium text-sm"
            role="button"
            tabIndex={0}
            aria-label={`Search for ${tag}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                console.log(`Searching for: ${tag}`);
              }
            }}
            onClick={() => console.log(`Searching for: ${tag}`)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}
