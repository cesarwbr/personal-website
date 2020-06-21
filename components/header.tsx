import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a className="name">Cesar William</a>
      </Link>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 45px 0;
        }

        .name {
          font-weight: 700;
          font-size: 19px;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
}
