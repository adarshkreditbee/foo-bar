package main
import ( 
  "fmt"
  "time"
  "math"
)

func sendValues(myIntChannel chan int) {

	for i := 1; i < 5; i++ {
		myIntChannel <- i //sending value
	}
}

// func WelcomeMessage() {
// 	fmt.Println("Welcome on Board")
// }

func main() {

	myIntChannel := make(chan int)
	go sendValues(myIntChannel) // I am a goroutine

	for i := 1; i < 5; i++ {
		fmt.Println(<-myIntChannel) // receiving value
	}

	// go WelcomeMessage();

	// func() {
	// 	fmt.Println("Hello world")
	// }()

	c := math.Exp2(5)
	fmt.Println(c)

	// for i := 1; i < 5; i++ {
	// 	fmt.Println("I am looping - ", i)
	// }

	time.Sleep(time.Millisecond * 200)
}
