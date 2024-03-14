let randomNumber = Math.round(Math.random() * 100);
alert(randomNumber)

if (randomNumber % 3 == 0 && randomNumber % 5 == 0) {
    alert(`${randomNumber} raqami FizzBuzz`)
}if (randomNumber % 3 == 0) {
    alert(`${randomNumber} raqami Fizz`)
}if (randomNumber % 5 == 0) {
    alert(`${randomNumber} raqami Buzz`)
}else (
    aler(`${randomNumber} raqami Fizz ham emas Buzz ham emas`)
)