import { FC } from "react";

interface RetirementMetricsProps {
    currentAge: number;
    retirementAge: number;
    currentSavings: number;
    monthlyContribution: number;
    estimatedAnnualReturn: number;
  }

export const UserView: FC<RetirementMetricsProps> = ({
    currentAge,
    retirementAge,
    currentSavings,
    monthlyContribution,
    estimatedAnnualReturn,
  }) => {
    // calculate the total savings needed for retirement
  const yearsUntilRetirement = retirementAge - currentAge;
  const annualContribution = monthlyContribution * 12;
  const totalSavingsNeeded =
    (annualContribution * (Math.pow(1 + estimatedAnnualReturn, yearsUntilRetirement) - 1)) /
    estimatedAnnualReturn;

    return (
        <div className="retirement-metrics">
          <div className="metric">
            <div className="label">Current Age:</div>
            <div className="value">{currentAge}</div>
          </div>
          <div className="metric">
            <div className="label">Retirement Age:</div>
            <div className="value">{retirementAge}</div>
          </div>
          <div className="metric">
            <div className="label">Current Savings:</div>
            <div className="value">${currentSavings}</div>
          </div>
          <div className="metric">
            <div className="label">Monthly Contribution:</div>
            <div className="value">${monthlyContribution}</div>
          </div>
          <div className="metric">
            <div className="label">Estimated Annual Return:</div>
            <div className="value">{estimatedAnnualReturn}%</div>
          </div>
          <div className="metric">
            <div className="label">Total Savings Needed:</div>
            <div className="value">${totalSavingsNeeded}</div>
          </div>
        </div>
      );

}


