import profile from '../data/profile'

export default function Footer() {
  return (
    <footer className="bg-terminal text-white/50 py-8 px-5 md:px-8">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built from scratch, shipped to production.
        </span>
        <span className="text-add">git status: clean</span>
      </div>
    </footer>
  )
}
