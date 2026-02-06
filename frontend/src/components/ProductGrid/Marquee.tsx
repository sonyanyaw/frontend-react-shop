import './marquee.scss';

const Marquee = () => {
  const word = "sale";
  const items = Array(30).fill(word);

  return (
    <div className="marquee">
      <div className="marquee__content">
        
        {items.map((item, i) => <span key={`first-${i}`} className="marquee__item">{item}  </span>)}
        {items.map((item, i) => <span key={`second-${i}`} className="marquee__item">{item}  </span>)}
      </div>
    </div>
  );
};

export default Marquee;