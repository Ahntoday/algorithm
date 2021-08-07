const solution = (k, room_number) => {
    let answer = [];
    let available_rooms = new Array(k + 1);

    for (let i = 0; i < k + 1; i++) {
        available_rooms[i] = i;
    }
    // console.log(available_rooms);
    const find_available = number => {
        if (available_rooms[number] === number)
            return number
        return find_available(available_rooms[number]);
    }

    for (let i = 0; i < room_number.length; i++) {
        let available_number = find_available(room_number[i]);
        // console.log('available_number: ', available_number);
        answer.push(available_number);
        // console.log('find_available: ', find_available(available_number + 1));
        available_rooms[available_number] = find_available(available_number + 1);
        // console.log('available_rooms: ', available_rooms);
    }
    return answer;
}

console.log(solution(10, [1, 3, 4, 1, 3, 1]));