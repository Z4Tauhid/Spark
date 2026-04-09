"use client";

import { Sparkles, Upload } from "lucide-react";
import { useState } from "react";

export default function ApplicationPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    opportunity: "",
    education: "",
    experience: "",
    motivation: "",
    photo: null,
    cv: null,
    coverLetter: null,
  });

  const [fileNames, setFileNames] = useState({
    photo: "",
    cv: "",
    coverLetter: "",
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  // ================= FILE VALIDATION =================
  const validateFile = (file, type) => {
    if (!file) return false;

    if (file.size > MAX_SIZE) {
      setError(`${type} must be less than 5MB`);
      return false;
    }

    if (type === "photo" && !file.type.startsWith("image/")) {
      setError("Photo must be an image");
      return false;
    }

    if ((type === "cv" || type === "coverLetter") && file.type !== "application/pdf") {
      setError(`${type} must be a PDF`);
      return false;
    }

    setError("");
    return true;
  };

  // ================= INPUT HANDLERS =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    if (validateFile(file, field)) {
      setForm({ ...form, [field]: file });
      setFileNames({ ...fileNames, [field]: file.name });
    }
  };

  // ================= SUBMIT =================
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const data = new FormData();
  Object.keys(form).forEach((key) => {
    if (form[key]) data.append(key, form[key]);
  });

  try {
    const res = await fetch("http://localhost:5000/api/auth/apply", {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    if (!res.ok) {
      // Show alert if duplicate email
      if (result.error === "You have already submitted an application.") {
        alert(result.error);
      } else {
        throw new Error(result.error || "Submission failed");
      }
      setLoading(false);
      return;
    }

    alert("Application submitted successfully!");

    // Clear form
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedin: "",
      opportunity: "",
      education: "",
      experience: "",
      motivation: "",
      photo: null,
      cv: null,
      coverLetter: null,
    });
    setFileNames({ photo: "", cv: "", coverLetter: "" });

  } catch (err) {
    setError(err.message);
  }finally {
    setLoading(false); // stop loading
  }
};

  return (
    <section className="bg-[#f7f6f5] py-10">
      <div className="max-w-4xl mx-auto w-11/12">

      {loading && (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)}

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          <p className="slide-in">
            <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm">
              Apply Now
            </span>
          </p>

          <h1 className="slide-in text-4xl md:text-5xl font-bold mt-4">
            Traineeship <span className="text-orange-500">Application</span>
          </h1>

          <p className="slide-in text-gray-500 mt-4 max-w-xl mx-auto">
            Take the first step towards an exciting career. Fill out the form below and our team will review your application.
          </p>
        </div>

        {/* ================= ERROR ================= */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* ================= 1. PERSONAL INFO ================= */}
          <div className="slide-in bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="slide-in flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-semibold text-sm">1</div>
              <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="slide-in block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-orange-500">*</span></label>
                <input onChange={handleChange} name="firstName" type="text" placeholder="Enter your first name" className="slide-in w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-400" />
              </div>

              <div>
                <label className="slide-in block text-sm font-medium text-gray-700 mb-2">Last Name <span className="text-orange-500">*</span></label>
                <input onChange={handleChange} name="lastName" type="text" placeholder="Enter your last name" className="slide-in w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-400" />
              </div>

              <div>
                <label className="slide-in block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-orange-500">*</span></label>
                <input onChange={handleChange} name="email" type="email" placeholder="your.email@example.com" className="slide-in w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-400" />
              </div>

              <div>
                <label className="slide-in block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input onChange={handleChange} name="phone" type="text" placeholder="+31 6 12345678" className="slide-in w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>

            <div className="mt-6">
              <label className="slide-in block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
              <input onChange={handleChange} name="linkedin" type="text" placeholder="https://linkedin.com/in/yourprofile" className="slide-in w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-400" />
            </div>

            <div className="mt-6">
              <label className="slide-in block text-sm font-medium text-gray-700 mb-2">Photo</label>
              <input
                name="photo"
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "photo")}
                className="w-full slide-in px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-400"
              />
              <p className="text-sm mt-2 text-gray-600">{fileNames.photo || "No file selected"}</p>
            </div>
          </div>

          {/* ================= 2. OPPORTUNITY ================= */}
          <div className="slide-in bg-white p-6 rounded-2xl shadow-sm">
            <div className="slide-in flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-semibold text-sm">2</div>
              <h2 className="text-xl font-semibold text-gray-800">Opportunity Details</h2>
            </div>

            <label className="slide-in block text-sm font-medium text-gray-700 mb-2">Which opportunity are you applying for? (Optional)</label>
            <input name="opportunity" onChange={handleChange} type="text" placeholder="e.g., Marketing Traineeship..." className="slide-in w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-400" />
          </div>

          {/* ================= 3. BACKGROUND ================= */}
          <div className="slide-in bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="slide-in flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm">3</div>
              <h2 className="text-xl font-semibold text-gray-800">Your Background</h2>
            </div>

            <label className="slide-in block text-sm font-medium text-gray-700 mb-2">Education <span className="text-orange-500">*</span></label>
            <textarea name="education" onChange={handleChange} className="slide-in w-full px-4 py-3 rounded-xl border bg-gray-50 h-28 focus:ring-2 focus:ring-orange-400" />
          </div>

          {/* ================= 4. UPLOAD ================= */}
          <div className="slide-in bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="slide-in flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm">4</div>
              <h2 className="text-xl font-semibold text-gray-800">Upload Documents</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* CV */}
              <label className="slide-in flex flex-col items-center justify-center h-40 border-2 border-dashed rounded-xl bg-gray-50 hover:border-orange-400 cursor-pointer">
                <Upload />
                <p className="text-sm mt-2">{fileNames.cv || "Upload your CV"}</p>
                <input
                  name="cv"
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(e, "cv")}
                  className="hidden"
                />
              </label>

              {/* Cover Letter */}
              <label className="slide-in flex flex-col items-center justify-center h-40 border-2 border-dashed rounded-xl bg-gray-50 hover:border-orange-400 cursor-pointer">
                <Upload />
                <p className="text-sm mt-2">{fileNames.coverLetter || "Upload cover letter"}</p>
                <input
                  name="coverLetter"
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(e, "coverLetter")}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* ================= 5. MOTIVATION ================= */}
          <div className="slide-in bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="slide-in flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm">5</div>
              <h2 className="text-xl font-semibold text-gray-800">Your Motivation</h2>
            </div>

            <textarea name="motivation" onChange={handleChange} className="slide-in w-full px-4 py-3 rounded-xl border bg-gray-50 h-40 focus:ring-2 focus:ring-orange-400" />
          </div>

          {/* ================= SUBMIT ================= */}
          <div className="slide-in bg-white p-10 rounded-2xl shadow-sm border text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full">
                <Sparkles />
              </div>
            </div>

            <h2 className="slide-in text-2xl font-semibold">Ready to Submit?</h2>
            <p className="slide-in text-gray-500 mt-3">Make sure all required fields are filled in.</p>

            <button type="submit" className="slide-in mt-6 bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600">
              Submit Application
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}