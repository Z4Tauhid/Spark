import ProgramCard from "../Components/ProgramCard";

export default function Programs() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="slide-in text-orange-500 font-medium mb-2">Our Programs</p>

        <h2 className="slide-in text-4xl md:text-5xl font-bold mb-6">
          Two Paths to <span className="text-orange-500">Excellence</span>
        </h2>

        <p className="slide-in text-gray-500 max-w-xl mx-auto mb-16">
          Choose the program that best fits your organization's needs and
          watch your young professionals thrive.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="slide-left">
            <ProgramCard
            title="Spark Traineeship Program"
            label="FOR TEAMS"
            dark={false}
            items={[
              "Customised Training Curriculum",
              "Supported Onboarding Process",
              "Personal Mentorships",
              "Guaranteed Risk Free Recruitment Process",
              "Progress tracking & assessments",
            ]}
          />
          </div>
          <div className="slide-right">
             <ProgramCard
            title="Spark Personal Leadership Training"
            label="INDIVIDUAL DEVELOPMENT"
            dark={true}
            items={[
              "Personalized Coaching Programs",
              "Constructive Career Feedback",
              "Leadership Toolkit Access",
              "Practical Workshops",
            ]}
          />
          </div>

          

         

        </div>
      </div>
    </section>
  );
}