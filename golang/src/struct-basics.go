package main;

import "fmt"

type Student struct {
	name string
	grades []int
	age int
}

func (s *Student) getAge() int {
	return s.age
}

func (s *Student) setAge(age int) {
	s.age = age
}

func main() {
	fmt.Println("Hello structs")
	s1 := Student{"Ash", []int{49, 40, 39}, 23}
	fmt.Println(s1.getAge())
	s1.setAge(22)
	fmt.Println(s1)
}
