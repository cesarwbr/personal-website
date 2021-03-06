import Image from "next/image";

export default function Profile() {
  return (
    <div className="profile">
      <div className="photo-container">
        <Image
          width="142"
          height="142"
          src="/images/photo.png"
          alt="Cesar"
          className="photo"
          quality="100"
        />
      </div>
      <h1 className="profile--description">
        <span className="profile--description--hero">Hey, I'm Cesar.</span> I'm
        a software engineer, builder, and writer.
      </h1>
      <style jsx>{`
        .photo {
          width: 100%;
          height: 100%;
        }

        .photo-container {
          width: 142px;
          height: 142px;
          flex-shrink: 0;
        }

        .profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 780px;
        }

        @media screen and (min-width: 600px) {
          .profile {
            flex-direction: row;
          }
        }

        .profile--description {
          font-size: 28px;
          margin-left: 30px;
          line-height: 2.7rem;
          font-weight: 700;
          color: var(--main-secondary-color);
        }

        .profile--description--hero {
          color: var(--main-primary-color);
        }
      `}</style>
    </div>
  );
}
