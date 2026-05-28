export function Footer() {
  return (
    <footer className="bg-brand-ivory py-12 border-t border-brand-crust/10 px-6 md:px-12 text-center text-brand-forest">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-serif">Eddie's Pizza</h2>
        <div className="flex gap-6 text-sm tracking-widest uppercase text-brand-forest/60">
          <a href="#" className="hover:text-brand-terracotta transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-terracotta transition-colors">Facebook</a>
          <a href="#" className="hover:text-brand-terracotta transition-colors">Privacy</a>
        </div>
        <p className="text-xs font-light text-brand-forest/50">
          © {new Date().getFullYear()} Eddie's Pizza. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
