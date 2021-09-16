function solution(enroll, referral, seller, amount) {
    let answer = [];
    const tree = {}
    tree['-'] = { parent: null, reward: 0 }

    for (let i = 0; i < enroll.length; i++)
        tree[enroll[i]] = { parent: referral[i], reward: 0 }

    const bottomUp = (name, reward) => {
        const current = tree[name];
        if (!reward || !current.parent) return
        const rewardForParent = Math.floor(reward / 10)
        current.reward += reward - rewardForParent;
        bottomUp(current.parent, rewardForParent);
    }

    for (let i = 0; i < seller.length; i++) {
        bottomUp(seller[i], amount[i] * 100);
    }

    answer = enroll.map(name => tree[name].reward);
    return answer
}

console.log(solution(["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"], ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], ["young", "john", "tod", "emily", "mary"], [12, 4, 2, 5, 10]));
// [360, 958, 108, 0, 450, 18, 180, 1080]