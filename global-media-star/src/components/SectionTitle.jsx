import "./SectionTitle.css";

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">

      {eyebrow && (
        <div className="section-eyebrow">
          <span></span>
          {eyebrow}
        </div>
      )}

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}

    </div>
  );
}

export default SectionTitle;