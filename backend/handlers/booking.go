package handlers

import (
	"backend/database"
	"backend/models"
	"net/http"
	"github.com/gin-gonic/gin"
	
)

func GetBookings(c *gin.Context) {
	var bookings []models.Booking
	database.DB.Find(&bookings)
	c.JSON(http.StatusOK, bookings)
}

func CreateBooking(c *gin.Context) {
	var booking models.Booking
	if err := c.ShouldBindJSON(&booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	database.DB.Create(&booking)
	c.JSON(http.StatusCreated, booking)
}

func DeleteBooking(c *gin.Context) {
	id := c.Param("id")
	var booking models.Booking
	if err := database.DB.First(&booking, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Booking not found"})
		return
	}

	database.DB.Delete(&booking)
	c.JSON(http.StatusOK, gin.H{"message": "Booking deleted successfully"})
}
