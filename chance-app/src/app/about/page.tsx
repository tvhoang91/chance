export default function About() {
  return (
    <div className="container mx-auto py-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">About</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Follow me on Github to see my hobby projects.
        <br />
        <a href="https://github.com/tvhoang91" target="_blank" className="underline">
          My Github Account
        </a>
      </p>
    </div>
  );
}
