function solution(k, room_number) {
    let available_rooms = new Map();
    let answer = [];

    function find_available(number) {
        let available = available_rooms.get(number);
        if (!available) {
            return number;
        }
        available_rooms.set(number, find_available(available));
        return available_rooms.get(number);
    }

    for (let i = 0; i < room_number.length; i++) {
        let available_number = find_available(room_number[i]);
        answer.push(available_number);
        available_rooms.set(available_number, find_available(available_number + 1));
        available_rooms.set(room_number[i], available_rooms.get(available_number));
    }

    return answer;
}

console.log(solution(10, [1, 3, 4, 1, 3, 1]));