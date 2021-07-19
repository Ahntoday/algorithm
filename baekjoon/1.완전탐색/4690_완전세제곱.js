for (let i = 6; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        for (let k = j + 1; k < i; k++) {
            for (let l = k + 1; l < i; l++) {
                if (i * i * i == j * j * j + k * k * k + l * l * l) {
                    console.log(`Cube = ${i}, Triple = (${j},${k},${l})`);
                }
            }
        }
    }
}