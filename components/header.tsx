export default function Header() {
  return (
    <header>
      <div className="name">Cesar William</div>

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
      `}</style>
    </header>
  );
}
