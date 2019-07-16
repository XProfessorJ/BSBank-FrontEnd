import { CardEntity } from "./CardEntity";

export class CreditCard extends CardEntity{
    requestedCreditLimitAmount:number;
    creditLimitIncreaseStartDate:string;
    creditLimitIncreaseEndDate:string;
    reasonCode:string;
}