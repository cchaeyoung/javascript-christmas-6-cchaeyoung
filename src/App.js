export default class App {
  async run() {
    try {
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
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

// 주문의 할인 금액을 계산하는 함수
function calculateDiscountAmount(order) {
  let discountAmount = 0;

  for (const menu in order) {
    const count = order[menu];
    const price = getPrice(menu);

    discountAmount += price * count;
  }

  return discountAmount;
}

// 총 할인 금액을 계산하는 함수
function calculateTotalDiscount(discountAmount) {
  let totalDiscount = 0;

  for (let i = 1; i <= 25; i++) {
    totalDiscount += i * 100;
  }

  totalDiscount += calculateWeekdayDiscount(discountAmount);
  totalDiscount += calculateWeekendDiscount(discountAmount);

  return totalDiscount;
}

// 평일 할인 금액을 계산하는 함수
function calculateWeekdayDiscount(discountAmount) {
  const weekdayDiscount = 2023 * 2;
  const dessertPrice = getPrice("초코케이크");
  const dessertCount = Math.floor(discountAmount / dessertPrice);

  return weekdayDiscount * dessertCount;
}

// 주말 할인 금액을 계산하는 함수
function calculateWeekendDiscount(discountAmount) {
  const weekendDiscount = 2023 * 2;
  const mainPrice = getPrice("티본스테이크");
  const mainCount = Math.floor(discountAmount / mainPrice);

  return weekendDiscount * mainCount;
}

// 증정 메뉴를 계산하는 함수
function calculateGiftMenu(totalDiscount) {
  const giftMenu = {
    menu: "없음",
    price: 0,
  };

  if (totalDiscount >= 120000) {
    giftMenu.menu = "샴페인";
    giftMenu.price = getPrice("샴페인");
  }

  return giftMenu;
}

// 총 혜택 금액을 계산하는 함수
function calculateTotalBenefit(discountAmount, giftMenu) {
  return discountAmount + giftMenu.price;
}

// 할인 후 최종 결제 금액을 계산하는 함수
function calculateFinalPayment(order, totalBenefit) {
  let finalPayment = 0;

  for (const menu in order) {
    const count = order[menu];
    const price = getPrice(menu);

    finalPayment += price * count;
  }

  finalPayment -= totalBenefit;

  return finalPayment;
}

// 이벤트 배지를 계산하는 함수
function calculateEventBadge(totalBenefit) {
  let eventBadge = "없음";

  if (totalBenefit >= 20000) {
    eventBadge = "산타";
  } else if (totalBenefit >= 10000) {
    eventBadge = "트리";
  } else if (totalBenefit >= 5000) {
    eventBadge = "별";
  }

  return eventBadge;
}

// 메뉴의 가격을 반환하는 함수
function getPrice(menu) {
  const menuPrices = {
    "양송이수프": 6000,
    "타파스": 5500,
    "시저샐러드": 8000,
    "티본스테이크": 55000,
    "바비큐립": 54000,
    "해산물파스타": 35000,
    "크리스마스파스타": 25000,
    "초코케이크": 15000,
    "아이스크림": 5000,
    "제로콜라": 3000,
    "레드와인": 60000,
    "샴페인": 25000,
  };

  return menuPrices[menu];
}
