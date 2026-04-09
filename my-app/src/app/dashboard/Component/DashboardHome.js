"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function DashboardHome() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH =================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/applications");
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ================= CHART DATA =================
  const getChartData = () => {
    const days = 15;
    const result = [];

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      const formatted = date.toISOString().split("T")[0];

      const count = applications.filter((app) => {
        const appDate = new Date(app.createdAt)
          .toISOString()
          .split("T")[0];
        return appDate === formatted;
      }).length;

      result.push({
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        applications: count,
      });
    }

    return result;
  };

  const chartData = getChartData();

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] px-4">
        <p className="text-gray-500 text-center">
          Loading dashboard...
        </p>
      </div>
    );
  }

  // ================= UI =================
  return (
    <section className="bg-[#f7f6f5] min-h-screen px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Dashboard Overview
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Track applications and performance
            </p>
          </div>
        </div>

        {/* STATS (optional but responsive ready) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs sm:text-sm text-gray-500">
              Total Applications
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {applications.length}
            </h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs sm:text-sm text-gray-500">
              Last 7 Days
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {
                applications.filter((app) => {
                  const d = new Date(app.createdAt);
                  const now = new Date();
                  const diff =
                    (now - d) / (1000 * 60 * 60 * 24);
                  return diff <= 7;
                }).length
              }
            </h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs sm:text-sm text-gray-500">
              Today
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {
                applications.filter((app) => {
                  const today = new Date().toISOString().split("T")[0];
                  const appDate = new Date(app.createdAt)
                    .toISOString()
                    .split("T")[0];
                  return today === appDate;
                }).length
              }
            </h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs sm:text-sm text-gray-500">
              Avg / Day
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {(applications.length / 15).toFixed(1)}
            </h3>
          </div>
        </div>

        {/* CHART */}
        <div className="bg-[#0f172a] p-4 sm:p-6 rounded-2xl shadow-lg">

          <h2 className="text-white text-base sm:text-lg font-semibold mb-4">
            Applications (Last 15 Days)
          </h2>

          {/* Responsive height */}
          <div className="w-full h-[220px] sm:h-[260px] md:h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />

                <XAxis
                  dataKey="date"
                  stroke="#94a3b8"
                  tick={{ fontSize: 10 }}
                />

                <YAxis
                  stroke="#94a3b8"
                  tick={{ fontSize: 10 }}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "none",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  animationDuration={800}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}