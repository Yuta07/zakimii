import worksData from '../../content/works.json';

export const Works = () => {
  return (
    <div className="works-wrapper">
      <h2 className="works-hero">Works</h2>
      <div className="works-inner">
        {worksData.data.map((data) => {
          const { image, title, description, slug } = data;

          return (
            <a href={`/works/${slug}`} className="works-link">
              <amp-img src={image[0]} layout="intrinsic" width="350" height="280" alt={`${title}-image`}></amp-img>
              <div className="works-caveat">
                <h3 className="works-title">{title}</h3>
                <p className="works-description">{description}</p>
              </div>
            </a>
          );
        })}
      </div>
      <style jsx>{`
        .works-wrapper {
          width: 100%;
          margin-top: 100px;
        }

        .works-hero {
          font-size: 60px;
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
          text-align: center;
        }

        .works-inner {
          width: 100%;
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .works-link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: calc(50% - 10px);
          background: #efefef;
          box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
            6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
          border-radius: 30px;
          position: relative;
          cursor: pointer;
        }

        .works-link:hover {
          transition: 0.3s;
          box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
            2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .works-link:hover .works-caveat {
          filter: opacity(70%);
        }

        .works-link:nth-child(n + 3) {
          margin-top: 20px;
        }

        amp-img {
          margin: 0 auto;
          object-fit: cover;
          background: #efefef;
          border-radius: 30px;
          -webkit-transition: 0.3s ease-in-out;
          transition: 0.3s ease-in-out;
        }

        .works-caveat {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          padding: 0 20px 30px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: #efefef;
          border-radius: 30px;
          filter: opacity(0%);
          -webkit-transition: 0.3s ease-in-out;
          transition: 0.3s ease-in-out;
        }

        .works-title {
          font-size: 20px;
        }

        .works-description {
          font-size: 14px;
          font-weight: 350;
          margin-top: 4px;
        }

        @media (max-width: 575.98px) {
          amp-img {
            width: 100%;
          }

          .works-link {
            width: 100%;
          }

          .works-link:nth-child(n + 1) {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};
