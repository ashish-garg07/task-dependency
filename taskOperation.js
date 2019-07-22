const calcTaskOp = (taskObj) => {
    let dependencies = taskObj,
        keys = Object.keys(dependencies),
        used = new Set,
        result = [],
        i, item, length;

    do {
        length = keys.length;
        i = 0;
        while (i < keys.length) {
            //here will check depedency and reudce the keys which task has perform
            if (dependencies[keys[i]].every(Set.prototype.has, used)) {
                item = keys.splice(i, 1)[0];
                result.push(item);
                used.add(item);
                break;
            }
            i++;
        }
    } while (keys.length && keys.length !== length)

    if (keys.length) throw new Error('this is a cyclic dependency');

    return result;
}

module.exports = { calcTaskOp }