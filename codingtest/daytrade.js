function getPageData(dayTrade, pageSize, pageNumber) {
    // Your code goes here
    // 1. 같은 이름이면 합친다.
    // 2. 내림차순으로 정렬한다.
    // 3. pageSize 쪼개서 배열에 놓고
    // 4. pageNumber에 해당하는 인덱스 값 리턴

    let data = {};
    for (let i = 0; i < dayTrade.length; i++) {
        let name = dayTrade[i]["user"];
        if (!Object.keys(data).includes(name)) {
            data[name] = 0;
        }
        data[name] += dayTrade[i]["countOfStocks"];
    }
    let newData = Object.entries(data);

    newData.sort((a, b) => {
        return b[1] - a[1];
    });

    let splitedData = newData.division(pageSize);
    return splitedData[pageNumber - 1];
}

Array.prototype.division = function (n) {
    var arr = this;
    var len = arr.length;
    var cnt = Math.floor(len / n);
    var tmp = [];

    for (var i = 0; i <= cnt; i++) {
        tmp.push(arr.splice(0, n));
    }

    return tmp;
}

var dayTrade =
    [
        { "user": "Rob", "company": "Goo", "countOfStocks": 5 },
        { "user": "Bill", "company": "Gol", "countOfStocks": 18 },
        { "user": "Rob", "company": "JPM", "countOfStocks": 10 },
        { "user": "Dave", "company": "Boe", "countOfStocks": 10 }
    ];

console.log(getPageData(dayTrade, 1, 2)); // page size = 1, page number = 2