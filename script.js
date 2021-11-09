
// Yosh kiritish
var age = +prompt("Yoshingizni kiriting")
console.log("Sizning yoshingiz " + age + ' da ekan, Demak siz...');

// Shartlar va Javoblar

if (age > 0 && age <= 18) {
    alert("Hali yoshsiz. O'qishingiz kerak")
} else if (age > 18 && age <= 50) {
    alert("Ishlashingiz kerak")
} else if (age > 50 && age <= 59) {
    alert("Yaqinda nafaqaga chiqasiz")
} else if (age > 59 && age <= 150) {
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz)")
} else {
    alert("OOPS!!! Something went wrong...")
}
