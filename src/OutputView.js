import { MissionUtils } from "@woowacourse/mission-utils";

export default {
    printMenu(order) {
        MissionUtils.Console.print("<주문 메뉴>");
        for (const menu in order) {
          MissionUtils.Console.print(`${menu} ${order[menu]}개`);
        }
    },
}
