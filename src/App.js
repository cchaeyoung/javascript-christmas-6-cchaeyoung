class App {
  async run() {
    const visitDate = await InputView.readDate();
    const order = await InputView.readMenu();

    const discountAmount = calculateDiscountAmount(order);
    const totalDiscount = calculateTotalDiscount(discountAmount);
    const giftMenu = calculateGiftMenu(totalDiscount);
    const totalBenefit = calculateTotalBenefit(discountAmount, giftMenu);
    const finalPayment = calculateFinalPayment(order, totalBenefit);
    const eventBadge = calculateEventBadge(totalBenefit);

    OutputView.printMenu(order);
    OutputView.printTotalOrderAmount(discountAmount);
    OutputView.printGiftMenu(giftMenu);
    OutputView.printBenefitDetails(discountAmount, giftMenu);
    OutputView.printTotalBenefitAmount(totalBenefit);
    OutputView.printFinalPayment(finalPayment);
    OutputView.printEventBadge(eventBadge);
  }
}

export default App;
