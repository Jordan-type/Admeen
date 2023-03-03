import { FC } from "react";
import { useState, useEffect } from "react";

interface Metrics {
  pensionerCount: number;
  totalContributions: number;
  pensionPlanCount: number;
}

export const AdminView: FC = ({}) => {
  const [metrics, setMetrics] = useState<Metrics>({
    pensionerCount: 0,
    totalContributions: 0,
    pensionPlanCount: 0,
  });

  useEffect(() => {
    // Fetch the metrics data from the backend API
    fetch("/api/metrics")
      .then((response) => response.json())
      .then((data) => setMetrics(data));
  }, []);

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          Admin Dashboard
        </div>

        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          Metrics
        </div>

        <div>
          <p>Number of pensioners: {metrics.pensionerCount}</p>
          <p>Total balance contributed: {metrics.totalContributions}</p>
          <p>Number of pension plans: {metrics.pensionPlanCount}</p>
        </div>
      </div>
    </div>
  );
};
