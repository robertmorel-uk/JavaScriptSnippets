//counts true values in an array
const truthy_array = [0, 1, 2, 3, '', false, NaN, 4, 5];

const count_true = truthy_array => {
    let count = 0;
    for (let true_v of truthy_array) {
        if (true_v)
            count++;
    }
    return count;
}

console.log(count_true(truthy_array)); //5