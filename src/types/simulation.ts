export interface SimulationRound {
  round: number;
  label: string;
  deposit: number;
  reserve: number;
  loan: number;
  cumulativeDeposit: number;
  cumulativeReserve: number;
  cumulativeLoan: number;
}

export interface SimulationResult {
  initialDeposit: number;
  lrrPercentage: number;
  crrPercentage: number;
  slrPercentage: number;
  multiplier: number;
  totalDeposits: number;
  totalReserves: number;
  totalCreditCreated: number;
  rounds: SimulationRound[];
}
