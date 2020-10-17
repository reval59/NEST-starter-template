import Joi from 'joi';

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

export const nasdaqListingSchema = Joi.object({
  companyName: Joi.string().required(),
  financialStatus: Joi.string().valid(Object.values(FinancialStatus)).required(),
  marketCategory: Joi.string().valid(Object.values(MarketCategory)).required(),
  roundLotSize: Joi.number().positive().required(),
  securityName: Joi.string().required(),
  symbol: Joi.string().required(),
  testIssue: Joi.string().valid(Object.values(TestIssue)).required(),
});
