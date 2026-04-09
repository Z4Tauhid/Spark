import Image from "next/image";

const solutions = [
  {
    title: "Stop The Brain Drain",
    text: "Too many talented young professionals leave their regions in search of better opportunities elsewhere. We want to show them that their future can thrive right where they graduated.",
    img: "/brain.JPG",
  },
  {
    title: "Transform The Hiring Process",
    text: "Traditional recruitment fails to understand and nurture young talent the way it should. Spark will offer a human-centered approach, making organisations more adaptable and appealing to Generation Z.",
    img: "/Hire.JPG",
  },
  {
    title: "Champion Inclusivity",
    text: "Graduates face barriers when trying to integrate into the workforce. We want to break these barriers, proving that diverse teams drive innovation, growth, and success.",
    img: "/champion.JPG",
  },
  {
    title: "Create Leaders, Not Just Employees",
    text: "Personal leadership training will be the heart of Spark, equipping young professionals with resilience, self-awareness, and critical thinking qualities that help them thrive in any workplace.",
    img: "/leader1.JPG",
  },
];

export default function Approach() {
  return (
    <section className="bg-[#f7f6f5] py-5">
      <div className="max-w-7xl mx-auto w-11/12">

        {/* HEADER */}
        <div className="text-center mb-12">
          

          <h2 className="text-3xl md:text-5xl font-bold mt-4 slide-in">
            Our Approach to Solve <span className="text-orange-500">The Problem</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto slide-in">
            Our solutions address the core challenges facing both employers and young professionals.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden slide-in hover:shadow-md transition"
            >
              
              {/* IMAGE */}
              <div className="relative w-full h-52 md:h-60">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}