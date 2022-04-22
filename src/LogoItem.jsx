export default function LogoItem({ icon, name }) {
  return (
    <div className="LogoItem">
      {icon}
      <span>{name}</span>
    </div>
  );
}
