import { MissionUtils } from "@woowacourse/mission-utils";

export default InputView = {
    async readDate() {
        const input = await MissionUtils.Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)");
        const date = parseInt(input);
    
        if (isNaN(date) || date < 1 || date > 31) {
          throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
        }
    
        return date;
    },

    async readMenu() {
        const input = await MissionUtils.Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)");
        const orderList = input.split(",").map((item) => item.trim());
    
        const order = {};
        for (const item of orderList) {
          const [menu, count] = item.split("-").map((item) => item.trim());
    
          if (!menu || !count || isNaN(parseInt(count))) {
            throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
          }
    
          order[menu] = parseInt(count);
        }
    
        return order;
    },
}
