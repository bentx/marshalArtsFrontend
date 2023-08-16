variable "region" {
  description = "aws region to deploy to"
  type        = string
  default     ="ap-south-1"
}

variable "application_name" {
  description = "The name of the application"
  type = string
  default = "buddham-frontend"
}

variable "domain_name" {
  description = "The domain name of the application"
  type = string
  default = "buddham-martial-arts.com"
}

