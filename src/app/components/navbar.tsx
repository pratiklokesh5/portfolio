import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <span className="logo-dot" />
          Home
        </Link>

        <div className="nav-links">
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
      </div>
    </nav>
  );
}
