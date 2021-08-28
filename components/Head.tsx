export default function Head() {
  return (
    <div
      className="pt-12 pb-4 text-black border-b border-gray-300 border-solid"
      style={{ letterSpacing: -0.000001 }}
    >
      <div
        className="relative py-0 px-6 my-0 mx-auto"
        style={{ maxWidth: 1048, letterSpacing: -0.000001 }}
      >
        <h1
          className="mb-2 text-5xl font-bold leading-normal"
          style={{
            fontFamily: "var(--font-sans)",
            color: "inherit",
            letterSpacing: -1.07,
          }}
        >
          Guides
        </h1>
        <p
          className="mt-2 text-base font-normal text-gray-800"
          style={{
            fontFamily: "var(--font-sans)",
            color: "inherit",
            lineHeight: "1.6",
            letterSpacing: -0.000001,
          }}
        >
          A list of guides for using Vercel with any project.
        </p>
      </div>
    </div>
  );
}
