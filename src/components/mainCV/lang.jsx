/* eslint-disable react/prop-types */
import MakeH2Title from "./container-title";

function MakeLangs({ langData }) {
  return (
    <section className="all-langs-container">
      <MakeH2Title title="Languages" />
      <ul>
        {langData.map((lang) => {
          if (lang.language.length > 0)
            return (
              <li key={lang.id} className="lang-container">
                <h2>{lang.language}</h2>
                <div className="lang-level-container">
                  {Array.from({ length: lang.level }).map((value, index) => (
                    <span key={index} className="lang-level-full"></span>
                  ))}
                  {Array.from({ length: 5 - lang.level }).map(
                    (value, index) => (
                      <span key={index} className="lang-level-empty"></span>
                    ),
                  )}
                </div>
              </li>
            );
        })}
      </ul>
    </section>
  );
}

export default MakeLangs;
