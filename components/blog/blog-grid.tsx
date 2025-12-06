import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Building Scalable Web Applications",
    excerpt: "Learn the best practices for creating applications that can grow with your business needs.",
    date: "Dec 1, 2025",
    category: "Development",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of Cloud Computing in 2025",
    excerpt: "Explore the latest trends and innovations shaping the cloud computing landscape.",
    date: "Nov 28, 2025",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Mastering UI/UX Design Principles",
    excerpt: "Discover essential design principles that create exceptional user experiences.",
    date: "Nov 25, 2025",
    category: "Design",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Security Best Practices for Modern Apps",
    excerpt: "Protect your applications with these proven security strategies and techniques.",
    date: "Nov 22, 2025",
    category: "Security",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Optimizing Performance for Better UX",
    excerpt: "Speed matters. Learn how to make your applications lightning fast.",
    date: "Nov 19, 2025",
    category: "Performance",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Building Effective Remote Teams",
    excerpt: "Strategies for managing and collaborating with distributed teams effectively.",
    date: "Nov 16, 2025",
    category: "Business",
    readTime: "6 min read",
  },
]

export function BlogGrid() {
  return (
    <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-[122px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href="/unavailable" className="group">
              <article className="bg-background rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                {/* Image placeholder */}
                <div className="aspect-video bg-foreground relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-background/50">
                    <span className="text-4xl font-bold">Img</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#1A1A1A] rounded-full translate-x-6 translate-y-6" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium bg-muted px-2 py-1 rounded">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:underline">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
