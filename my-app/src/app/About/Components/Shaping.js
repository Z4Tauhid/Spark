import Image from "next/image";

export default function Shaping() {
  return (
    <section className="bg-[#f7f6f5] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-11/12 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT */}
        <div className="space-y-6">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight slide-in">
            Shaping <span className="text-orange-500">The Future</span> Of Working
          </h1>

          <p className="text-gray-500 max-w-xl slide-in">
            We are dedicated to bridging the gap between education and professional success,
            empowering the next generation of leaders to thrive in an ever-evolving world.
          </p>

          <div className="slide-in">
            <span className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm">
              The Problem To Be Solved
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold slide-in">
            The Gap Between Young Professionals and Regional Employers in{" "}
            <span className="text-orange-500">
              Non-Metropolitan areas.
            </span>
          </h2>

          <p className="text-gray-500 leading-relaxed slide-in">
            While organisations need new talent to replace an aging workforce,
            they often struggle to attract and retain Generation Z.
          </p>

          <p className="text-gray-500 leading-relaxed slide-in">
            At the same time, young graduates face barriers to entering the workforce,
            including workplace culture and expectations.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] slide-left">
          <Image
            src="/NiinaToyryla-0638.jpg"
            alt="solution"
            fill
            className="object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>

      </div>
    </section>
  );
}