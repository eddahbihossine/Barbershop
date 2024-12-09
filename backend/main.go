package main

import (
	"backend/database"
	"backend/routes"
	"github.com/gin-contrib/cors"
)

func main() {

	database.ConnectDatabase()

	r := routes.SetupRouter()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"}, 
		AllowMethods:     []string{"GET", "POST", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type", "Origin", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	r.Run(":8080")
}

// const user = localStorage.getItem("user");
    // if (!user) {
    //   router.push("/login");
    //   return;
    // }
