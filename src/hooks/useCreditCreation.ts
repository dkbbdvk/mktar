import { useMemo } from 'react';
import { SimulationRound, SimulationResult } from '../types/simulation';

export function useCreditCreation(
  initialDeposit: number,
  lrrPercentage: number,
  crrPercentage: number = 4.5,
  slrPercentage: number = 18
): SimulationResult {
  return useMemo(() => {
    const lrrDecimal = Math.max(0.01, Math.min(1, lrrPercentage / 100));
    const multiplier = 1 / lrrDecimal;
    const totalDeposits = initialDeposit * multiplier;
    const totalReserves = initialDeposit;
    const totalCreditCreated = totalDeposits - initialDeposit;

    const rounds: SimulationRound[] = [];
    let currentDeposit = initialDeposit;
    let cumDeposit = 0;
    let cumReserve = 0;
    let cumLoan = 0;

    // Simulate up to 10 rounds for clear visual representation
    const maxDisplayRounds = 10;
    for (let r = 1; r <= maxDisplayRounds; r++) {
      const reserve = currentDeposit * lrrDecimal;
      const loan = currentDeposit - reserve;

      cumDeposit += currentDeposit;
      cumReserve += reserve;
      cumLoan += loan;

      rounds.push({
        round: r,
        label: r === 1 ? 'प्रारंभिक दौर (Round 1)' : `दौर ${r} (Round ${r})`,
        deposit: Math.round(currentDeposit * 100) / 100,
        reserve: Math.round(reserve * 100) / 100,
        loan: Math.round(loan * 100) / 100,
        cumulativeDeposit: Math.round(cumDeposit * 100) / 100,
        cumulativeReserve: Math.round(cumReserve * 100) / 100,
        cumulativeLoan: Math.round(cumLoan * 100) / 100
      });

      currentDeposit = loan; // Next round receives the previous loan as new deposit
      if (currentDeposit < 0.5) break; // negligible
    }

    return {
      initialDeposit,
      lrrPercentage,
      crrPercentage,
      slrPercentage,
      multiplier: Math.round(multiplier * 100) / 100,
      totalDeposits: Math.round(totalDeposits * 100) / 100,
      totalReserves: Math.round(totalReserves * 100) / 100,
      totalCreditCreated: Math.round(totalCreditCreated * 100) / 100,
      rounds
    };
  }, [initialDeposit, lrrPercentage, crrPercentage, slrPercentage]);
}
