import { memo } from "react";

const Button = ({ text, className, id, href, icon }) => {
  // Extract scroll behavior to prevent re-computation on re-renders
  const handleScroll = () => {
    const target = document.getElementById(id);
    if (!target) return;

    const offset = window.innerHeight * 0.15;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Create a memoized click handler
  const clickHandler = () => {
    if (href) return;
    handleScroll();
  };

  // Conditional attributes for external links
  const linkProps = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${text} (opens external link)`,
      }
    : {
        onClick: clickHandler,
        role: "button",
        tabIndex: 0,
      };

  return (
    <a
      {...linkProps}
      className={`cta-wrapper ${className ?? ""}`.trim()}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={icon || "/images/arrow-down.svg"} alt="" loading="lazy" />
        </div>
      </div>
    </a>
  );
};

// Apply memoization for performance
export default memo(Button);
