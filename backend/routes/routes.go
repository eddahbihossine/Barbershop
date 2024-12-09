package routes

import (
	"backend/handlers"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.Use(cors.Default())
	r.GET("/bookings", handlers.GetBookings)
	r.POST("/bookings", handlers.CreateBooking)
	r.DELETE("/bookings/:id", handlers.DeleteBooking)

	return r
}
