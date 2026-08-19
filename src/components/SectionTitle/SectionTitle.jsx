import "./SectionTitle.css";

function SectionTitle({ title, subtitle }) {

  return (

    <div className="section-title">

      <div>

        <h2>{title}</h2>

        {subtitle && (
          <p>{subtitle}</p>
        )}

      </div>

      <button>
        See All →
      </button>

    </div>

  );
}

export default SectionTitle;