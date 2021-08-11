function solution(cacheSize, cities) {
    if (cities.length === 0) return 0;
    if (cacheSize === 0) return cities.length * 5;
    let answer = 0;
    let cache = [];

    let cities2 = cities.map(v => v.toLowerCase());
    for (let i = 0; i < cities2.length; i++) {
        // Miss
        if (!cache.includes(cities2[i])) {
            if (cache.length === cacheSize) {
                cache.shift();
            }
            cache.push(cities2[i]);
            answer += 5;
        }
        // Hit
        else {
            cache.splice(cache.indexOf(cities2[i]), 1);
            cache.push(cities2[i]);
            answer += 1;
        }
    }
    return answer;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
