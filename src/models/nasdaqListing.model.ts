export enum FinancialStatus {
  Deficient = 'D',
  Delinquent = 'E',
  Bankrupt = 'Q',
  Normal = 'N',
  DeficientAndBankrupt = 'G',
  DeficientAndDelinquent = 'H',
  DelinquentAndBankrupt = 'J',
  DeficientAndDelinquentAndBankrupt = 'K'
}

export enum MarketCategory {
  GlobalSelectMarketSM = 'Q',
  GlobalMarketSM = 'G',
  CapitalMarket = 'S'
}

export enum TestIssue {
  Yes = 'Y',
  No = 'N'
}

export interface NasdaqListing {
  companyName: string;
  financialStatus: FinancialStatus;
  marketCategory: MarketCategory;
  roundLotSize: number;
  securityName: string;
  symbol: string;
  testIssue: TestIssue;
}