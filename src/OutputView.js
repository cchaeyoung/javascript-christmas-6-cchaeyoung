import { MissionUtils } from "@woowacourse/mission-utils";

export default {
    printMenu(order) {
        MissionUtils.Console.print("<주문 메뉴>");
        for (const menu in order) {
          MissionUtils.Console.print(`${menu} ${order[menu]}개`);
        }
    },

    printTotalOrderAmount(discountAmount) {
        MissionUtils.Console.print("<할인 전 총주문 금액>");
        MissionUtils.Console.print(`${discountAmount}원`);
    },

    printGiftMenu(giftMenu) {
        MissionUtils.Console.print("<증정 메뉴>");
        MissionUtils.Console.print(`${giftMenu.menu} ${giftMenu.price}개`);
    },

    printBenefitDetails(discountAmount, giftMenu) {
        MissionUtils.Console.print("<혜택 내역>");
        if (discountAmount === 0 && giftMenu.price === 0) {
          MissionUtils.Console.print("없음");
        } else {
          if (discountAmount > 0) {
            MissionUtils.Console.print(`할인: -${discountAmount}원`);
          }
          if (giftMenu.price > 0) {
            MissionUtils.Console.print(`증정: ${giftMenu.menu} ${giftMenu.price}개`);
          }
        }
    },

    printTotalBenefitAmount(totalBenefit) {
        MissionUtils.Console.print("<총혜택 금액>");
        MissionUtils.Console.print(`${totalBenefit}원`);
    },
}
