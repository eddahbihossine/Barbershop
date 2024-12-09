package models

import (
	"gorm.io/gorm"
)

type Booking struct {
	gorm.Model
	Name    string `json:"name" binding:"required,alpha"`
	Email   string `json:"email" binding:"required,email"`
	Phone   string `json:"phone" binding:"required"`
	Date    string `json:"date" binding:"required"`
	Time    string `json:"time" binding:"required"`
	Service string `json:"service" binding:"required"`
}
