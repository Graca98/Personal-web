export default function Badge({ skill, style }) {
  return (
    <>
      <li
        className={`whitespace-nowrap px-3 py-1 text-xs rounded-full bg-cyan-950 text-teal-400`}
      >
        {skill}
      </li>
    </>
  );
}
