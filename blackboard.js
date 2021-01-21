const company = {
    employees: ['John', 'Jane', 'Sam', 'Suzanne'],
    name: 'Quick Build',
};
const {employees: person} = company;
console.log(person);//expects 'John'
let s = JSON.stringify(company, null, 10);
console.log(s);
// Some Fancy Deep Copy Function //
function deepCopy(target) {
    if (Array.isArray(target)) {
        return target.map(deepCopy);
    } else if (typeof target == 'object') {
        return [...Object.entries(target)]
            .reduce((acc, [k, v]) => Object.assign(acc, {[k]: deepCopy(v)}), {});
    } else {
        return target;
    }
}
myCompany=deepCopy(company);
console.log(myCompany);