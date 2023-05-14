const Card = (props) => {
  const {
    item: {
      openSpots,
      coverImg: img,
      location,
      title,
      price,
      stats: { rating, reviewCount },
    },
  } = props;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {/* <div> */}
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`/${img}`} className="card-img" />
      {/* </div> */}
      <div className="card-stats">
        <img src="/star.png" />
        <span>{rating}</span>
        <span className="card-fadded-text">({reviewCount}) • </span>
        <span className="card-fadded-text">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="card-bold-text">From ${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
