package server

import (
	"fmt"
	"net/http"
)

func StartServer() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w,r)
			return
		}
		fmt.Fprintf(w, "Home")
	})
	http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Welcome to users page")
	})
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println("Server error:", err)
	}

}
