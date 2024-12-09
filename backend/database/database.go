package database

import (
	"log"
	"backend/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	var err error
	DB, err = gorm.Open(sqlite.Open("barbershop.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to the database:", err)
	}
	err = DB.AutoMigrate(&models.Booking{})
	if err != nil {
		log.Fatal("Failed to migrate database:", err)
	}
}
