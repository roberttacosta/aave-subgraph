import { FlashLoan, Borrow, Repay, Supply, Withdraw } from "../generated/schema";
import { FlashLoan as FlashLoanEvent, Borrow as BorrowEvent, Repay as RepayEvent, Supply as SupplyEvent, Withdraw as WithdrawEvent } from "../generated/Aave/Aave";
import { BigInt } from "@graphprotocol/graph-ts";

// Handler para o evento FlashLoan
export function handleFlashLoan(event: FlashLoanEvent): void {
  let flashLoan = new FlashLoan(event.transaction.hash.toHex());

  flashLoan.asset = event.params.asset;
  flashLoan.amount = event.params.amount;
  flashLoan.initiator = event.params.initiator;
  flashLoan.premium = event.params.premium;
  flashLoan.interestRateMode = event.params.interestRateMode;
  flashLoan.referralCode = event.params.referralCode;
  flashLoan.timestamp = event.block.timestamp;
  flashLoan.transactionHash = event.transaction.hash;

  flashLoan.save();
}

// Handler para o evento Borrow
export function handleBorrow(event: BorrowEvent): void {
  let borrow = new Borrow(event.transaction.hash.toHex());

  borrow.reserve = event.params.reserve;
  borrow.user = event.params.user;
  borrow.amount = event.params.amount;
  borrow.borrowRate = event.params.borrowRate;
  borrow.interestRateMode = event.params.interestRateMode;
  borrow.referralCode = event.params.referralCode;
  borrow.timestamp = event.block.timestamp;
  borrow.transactionHash = event.transaction.hash;

  borrow.save();
}

// Handler para o evento Repay
export function handleRepay(event: RepayEvent): void {
  let repay = new Repay(event.transaction.hash.toHex());

  repay.reserve = event.params.reserve;
  repay.user = event.params.user;
  repay.amount = event.params.amount;
  repay.useATokens = event.params.useATokens;
  repay.timestamp = event.block.timestamp;
  repay.transactionHash = event.transaction.hash;

  repay.save();
}

// Handler para o evento Supply
export function handleSupply(event: SupplyEvent): void {
  let supply = new Supply(event.transaction.hash.toHex());

  supply.reserve = event.params.reserve;
  supply.user = event.params.user;
  supply.amount = event.params.amount;
  supply.referralCode = event.params.referralCode;
  supply.timestamp = event.block.timestamp;
  supply.transactionHash = event.transaction.hash;

  supply.save();
}

// Handler para o evento Withdraw
export function handleWithdraw(event: WithdrawEvent): void {
  let withdraw = new Withdraw(event.transaction.hash.toHex());

  withdraw.reserve = event.params.reserve;
  withdraw.user = event.params.user;
  withdraw.to = event.params.to;
  withdraw.amount = event.params.amount;
  withdraw.timestamp = event.block.timestamp;
  withdraw.transactionHash = event.transaction.hash;

  withdraw.save();
}
