export default function Badge({skill}) {
  return (
    <>
      <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 dark:bg-purple-700 dark:text-purple-100">
        {skill}
      </span>
    </>
  );
}
