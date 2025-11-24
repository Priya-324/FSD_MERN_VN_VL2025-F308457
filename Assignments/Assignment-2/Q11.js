function recharge(option) {
    switch(option) {
        case 1: console.log("Data Pack"); break;
        case 2: console.log("Talktime"); break;
        case 3: console.log("Validity Recharge"); break;
        default: console.log("Invalid Choice");
    }
}
recharge(2);