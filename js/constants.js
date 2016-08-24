/* Created by Ryan Ruoshui Yan on Aug 20, 2016 */

/* Constants */

// 顯示的題目數量
// 注意: 數字不可超過問題最大個數, 否則會報錯
// 注意: 如果全部都顯示, 就改成 MAX_QUESTIONS = options.length;
MAX_QUESTIONS = 10;

// 總分
TOTAL_MARKS = 100;

// 每道正確的題目所加的分數
SCORE_CORRECT_ANSWER = TOTAL_MARKS / MAX_QUESTIONS;

// 每道錯誤的題目所扣的分數
SCORE_WRONG_ANSWER = 0;

// 幾個按鈕上面所顯示的文字
START = "START!";
NEXT = "NEXT";
FINISH = "FINISH";
RESTART = "RESTART!";
YOUR_SCORE = "Your score";
