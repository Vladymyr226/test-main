const addons = [
  { id: 1, name: "Extra Maintenance Hours (5h)", price: "$60" },
  { id: 2, name: "Emergency Hotfix Support", price: "$99" },
  { id: 3, name: "Infrastructure Monitoring", price: "$40" },
  { id: 4, name: "SEO & Performance Audit", price: "$55" },
]

export function ShopAddons() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-[122px] bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">Add-ons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {addons.map((addon) => (
            <div
              key={addon.id}
              className="bg-background rounded-lg p-4 border border-border flex items-center justify-between"
            >
              <span className="font-medium text-foreground text-sm">{addon.name}</span>
              <span className="text-muted-foreground text-sm">{addon.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
