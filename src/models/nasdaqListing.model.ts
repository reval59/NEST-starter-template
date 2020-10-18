// import S from 'fluent-schema';

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


// type P = keyof NasdaqListing;
// type T = {[p in P]:p};
// const s: T = T
// S.object
// S.object().prop(<P>'companyName', S.string().required())
//   .prop(<P>'financialStatus', S.string().required()
//     .enum(Object.values(FinancialStatus)))
//   .prop(<P>'marketCategory', S.string().required()
//     .enum(Object.values(MarketCategory)))
//   .prop(<P>'roundLotSize', S.integer().minimum(1)).prop(<P>'securityName', S.);