/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id, href, icon }) => {
  return (
    <a
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={(e) => {
        // Allow normal links to work
        if (href) return;

        e.preventDefault();

        const target = document.getElementById(id);

        if (target) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>

        <div className="arrow-wrapper">
          <img src={icon || "/images/arrow-down.svg"} alt="" />
        </div>
      </div>
    </a>
  );
};

export default Button;
