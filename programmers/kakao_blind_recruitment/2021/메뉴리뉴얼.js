// 문자열의 조합을 이용.
// orders를 순회하면서 course[i]개의 조합을 구하도록 한다.
// 조합을 구한 코스 요리를 오름차순으로 정렬하여 result 객체에 넣어준다.
// 만약 있는 요리라면 + 1을 하여 카운팅 해주고, Nan이라면 1을 초기화 한다.
// 그리고 코스 요리의 개수 중 가장 많이 나온 개수를 구하여 해당 값과 같은 value를 가지는 코스 요리를 answer에 넣어 주도록 한다.
// 마지막 answer에서 오름차순으로 다시 정렬해 리턴한다.
function combination(arr, selectNumber) {
    const results = [];

    if (selectNumber === 1) {
        return arr.map((value) => [value]);
    }

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = combination(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);

        results.push(...attached);
    });

    return results;
}

function solution(orders, course) {
    const answer = [];

    for (let i = 0; i < course.length; i++) {
        const result = {};
        let max = 0;

        orders.forEach((order) => { // 조합한결과들을 key로, 개수를 count로 한다.
            combination(order.split(""), course[i]).forEach((e) => {
                const str = e.sort().join("");

                if (!isNaN(result[str])) {
                    result[str] += 1;
                    max = max < result[str] ? result[str] : max;
                }
                else {
                    result[str] = 1;
                }
            });
        });

        if (max >= 2) {
            for (const [key, value] of Object.entries(result)) {
                if (value === max) {
                    answer.push(key);
                }
            }
        }
    }

    return answer.sort();
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])); //["AC", "ACDE", "BCFG", "CDE"]