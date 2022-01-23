package main

// import package for random numbers
import (
	"fmt"
	"io"
	"log"
	"math/rand"
	"net/http"
)

func main() {
	// multiple two random 2x2 matrices
	a := create_random_2x2_matrix()
	b := create_random_2x2_matrix()
	c := matrix_multiply(a, b)

	// hello world, the web server
	helloHandler := func(w http.ResponseWriter, req *http.Request) {
		io.WriteString(w, matrix_to_string(c))
		log.Printf("%s", matrix_to_string(c))
	}

	http.HandleFunc("/hello", helloHandler)
    log.Println("Listing for requests at http://localhost:8000/hello")
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func matrix_multiply(a [][]float64, b [][]float64) [][]float64 {
	if len(a[0]) != len(b) {
		panic("a: inner dimensions do not match")
	}

	c := make([][]float64, len(a))
	for i := range c {
		c[i] = make([]float64, len(b[0]))
	}

	for i := 0; i < len(a); i++ {
		for j := 0; j < len(b[0]); j++ {
			for k := 0; k < len(b); k++ {
				c[i][j] += a[i][k] * b[k][j]
			}
		}
	}

	return c
}

func create_random_2x2_matrix() [][]float64 {
	return [][]float64{
		{rand.Float64(), rand.Float64()},
		{rand.Float64(), rand.Float64()},
	}
}

// converts a 2x2 matrix to a string
func matrix_to_string(a [][]float64) string {
	return fmt.Sprintf("%f %f\n%f %f", a[0][0], a[0][1], a[1][0], a[1][1])
}

// converts a float to a string
func float_to_string(a float64) string {
	return fmt.Sprintf("%f", a)
}



