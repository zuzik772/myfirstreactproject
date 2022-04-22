import LogoItem from "./LogoItem";
import Author from "./Author";

export default function TestimonialCard({ icon, name, text, author, role }) {
  return (
    <div className="TestimonialCard">
      <LogoItem icon={icon} name={name} />
      <p>{text}</p>
      <Author author={author} role={role} />
    </div>
  );
}

