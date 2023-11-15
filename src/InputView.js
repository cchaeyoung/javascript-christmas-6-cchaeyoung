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
}
