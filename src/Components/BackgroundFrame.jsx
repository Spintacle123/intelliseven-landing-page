export default function BackgroundFrame({ src, children }) {
  return (
    <section
      className="relative overflow-hidden md:min-h-[calc(100vw*2.805)]"
      style={{ minHeight: "max(400svh, calc(100vw * 2.6))" }}
    >
      <div
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 95%",
        }}
      />

      <div
        className="absolute inset-0 -z-10 md:hidden"
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 62%",
        }}
      />

      <div className="mx-auto px-4 py-12 md:py-24">{children}</div>
    </section>
  );
}
