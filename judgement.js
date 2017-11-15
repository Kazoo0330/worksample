let points = [60,100,80,80,70,70];
let number = points.length;

function get_achievement(points){
  let sum = 0;
  for (let i=0; i<number; i++){
    sum = sum + points[i];
  }
  const perfect = number * points.length;
  if (sum > perfect * 0.8){
    return true
  } else if {
    return false
  }
}

//   let sum = 0;
//   for (let i=0; i<number; i++){
//     sum = sum + points[i];
//   }
//   const perfect = number * points.length;
//   if (sum > perfect * 0.8){
//     return true
//   } else if
// }

ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

let points = [60,100,80,80,70,70];
let number = points.length;
// points.lengthでpointsに何教科入ってるか出してもらう。

function get_achievement(points){
  let sum = 0;
  for (let i=0; i<number; i++){
    sum = sum + points[i];
  }

//ここで何割獲得したか
  if (sum >=100 * number * 0.8){return "A";
  }else if (sum >= 100 * number * 0.6){return "B";
  }else if (sum >= 100 *  number * 0.4){return "C";
  }else{return "D";
  }
}
console.log(get_achievement(points));
// function get_achievementで、
// 成績がA~Dでコンソールに出力される。


function get_pass_or_failure(points){
  for (let i=1; i<number; i++){
    if (points[i] < 60){return "不合格";
    }else{return "合格";
    }
  }
}
console.log(get_pass_or_failure(points));

let achievement = get_achievement(points);
let pass_or_failure = get_pass_or_failure(points);
// この二行で"get_achievement"を変数"achievement"に
// "get_pass_or_failure"を変数"pass_or_failure"に代入してるよ。


function judgement(points){
  achievement;
  pass_or_failure;
  return `あなたの成績は${achievement}です。${pass_or_failure}です！`;
}
console.log(judgement(points));
// function judgementでachievementとpass_or_failureを同時に出力させる。
