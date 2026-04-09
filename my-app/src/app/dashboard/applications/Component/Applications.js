"use client";

import { useEffect, useState } from "react";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔥 TEMP FIX: Force .png preview
  const fixUrl = (url) => {
    if (!url) return "";
    return url.replace(/\.[^/.]+$/, ".png");
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/applications");
        if (!res.ok) throw new Error("Failed to fetch applications");

        const data = await res.json();
        setApplications(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // ================= LOADING =================
  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-600 text-lg">Loading applications...</p>
      </div>
    );

  // ================= ERROR =================
  if (error)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  // ================= UI =================
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Applications
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <div
            key={app._id}
            className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition"
          >
            {/* ================= HEADER ================= */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={app.photo || "/default-avatar.png"}
                alt={`${app.firstName} ${app.lastName}`}
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
              />

              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {app.firstName} {app.lastName}
                </h2>

                {app.opportunity && (
                  <p className="text-sm text-gray-500">
                    {app.opportunity}
                  </p>
                )}
              </div>
            </div>

            {/* ================= CONTACT ================= */}
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Email:</strong> {app.email}</p>
              {app.phone && <p><strong>Phone:</strong> {app.phone}</p>}

              {app.linkedin && (
                <a
                  href={app.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline block"
                >
                  LinkedIn Profile
                </a>
              )}
            </div>

            {/* ================= DETAILS ================= */}
            {app.education && (
              <p className="text-sm text-gray-700 mt-3">
                <strong>Education:</strong> {app.education}
              </p>
            )}

            {app.motivation && (
              <p className="text-sm text-gray-700 mt-2">
                <strong>Motivation:</strong> {app.motivation}
              </p>
            )}

            {/* ================= FILES ================= */}
            <div className="mt-4 flex gap-4">
              {app.cv && (
                <a
                  href={fixUrl(app.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 font-medium hover:underline"
                >
                  📄 CV
                </a>
              )}

              {app.coverLetter && (
                <a
                  href={fixUrl(app.coverLetter)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 font-medium hover:underline"
                >
                  📄 Cover Letter
                </a>
              )}
            </div>

            {/* ================= DATE ================= */}
            {app.createdAt && (
              <p className="text-xs text-gray-400 mt-4">
                Applied on:{" "}
                {new Date(app.createdAt).toLocaleDateString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}