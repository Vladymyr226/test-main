export function AboutStory() {
  return (
    <section className="pb-16 px-6 md:px-12 lg:px-[122px]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="flex-1 w-full">
            <div className="bg-foreground rounded-2xl p-8 aspect-square max-w-md mx-auto lg:mx-0 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-background">
                <span className="text-6xl font-bold">Mbunity</span>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#1A1A1A] rounded-full translate-x-8 translate-y-8" />
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#484848]/50 rounded-full" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We’re Mbunity Development — a team that has been building software together for over 5 years, combining the structure of a software house with the collaboration of close partners.
              </p>
              <p>
                Clients describe us as transparent, efficient, and customer‑focused. We create custom digital solutions using industry best practices across UI/UX, frontend, and backend development — all powered by a disciplined Scrum workflow.
              </p>
              <p>
                With our experience and commitment to quality, we turn ambitious ideas into reliable, scalable products. Ready to start? Reach out and let’s bring your project to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
