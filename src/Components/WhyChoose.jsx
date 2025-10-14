export default function WhyChoose({
  items = [
    {
      title: "EXPERTISE",
      description:
        "Our expertise in cutting-edge technologies ensures innovative and scalable solutions.",
      icon: <span className="w-6 h-6 inline-block bg-main/10 rounded" />,
    },
    {
      title: "COLLABORATION",
      description:
        "We provide exceptional customer service and support throughout the project lifecycle.",
      icon: <span className="w-6 h-6 inline-block bg-main/10 rounded" />,
    },
    {
      title: "INNOVATION",
      description:
        "Customized solutions tailored to specific business needs across industries.",
      icon: <span className="w-6 h-6 inline-block bg-main/10 rounded" />,
    },
  ],
}) {
  return (
    <div className="mt-6 sm:mt-8">
      {" "}
      <div className="flex items-center justify-center mb-6 sm:mb-8 md:mb-10 mt-20">
        <div className="w-16 border-t border-main" />
        <span className="mx-4 text-[12px] sm:text-sm md:text-lg text-main font-bold font-poppins">
          Why choose Intelliseven
        </span>
        <div className="w-16 border-t border-main" />
      </div>
      <div className="max-w-xs md:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 place-items-center">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-top-only rounded-3xl p-6 sm:p-7 md:p-8 w-full max-w-[28rem]"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="text-main">{item.icon}</span>
                <h3 className="text-md font-poppins tracking-wide uppercase">
                  {item.title}
                </h3>
              </div>

              <p className="font-poppins tracking-wider text-[13px] sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
