import Logo from "./Logo";
import Button from "./Button";
import NavItem from "./NavItem";
import LogoItem from "./LogoItem";

export default function Header() {
  return (
    <header className="PrimaryBg First">
      <nav>
        <Logo />
        <ul>
          <NavItem navigation="Home" />
          <NavItem navigation="About" />
          <NavItem navigation="Contact" />
          <NavItem navigation="Get in touch" />
        </ul>
        <Button />
      </nav>
      <article>
        <div className="LeftText">
          <h1>
            Blockchain finally made <span>accessible</span>
          </h1>
          <p>
            Unleash the potential of blockchain to making your business secure, scalable, and
            accessible
          </p>
          <Button />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          fillRule="currentColor"
          className="bi bi-app"
          viewBox="0 0 16 16"
        >
          <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
        </svg>
      </article>

      <aside>
        {LogoItems.map((logoItem) => (
          <LogoItem icon={logoItem.icon} name={logoItem.name} />
        ))}
      </aside>
    </header>
  );
}

export const LogoItems = [
  {
    name: "Nordea",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="bi bi-align-center"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1zm0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5zM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z" />
      </svg>
    ),
  },

  {
    name: "KEA",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="bi bi-align-center"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1zm0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5zM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z" />
      </svg>
    ),
  },

  {
    name: "Lidl",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="bi bi-app-indicator"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
  },

  {
    name: "Ejendom",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="bi bi-alt"
        viewBox="0 0 16 16"
      >
        <path d="M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5zm10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5z" />
      </svg>
    ),
  },

  {
    name: "Lidl",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="bi bi-arrow-repeat"
        viewBox="0 0 16 16"
      >
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
        <path
          fillRule="evenodd"
          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
        />
      </svg>
    ),
  },
];
