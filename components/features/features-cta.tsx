export function FeaturesCTA() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-[122px] bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold text-foreground mb-4">Want to Learn More?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Get in touch with our team to discover how these features can benefit your business.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-md font-medium text-base transition-colors"
        >
          Contact Sales
        </a>
      </div>
    </section>
  )
}
