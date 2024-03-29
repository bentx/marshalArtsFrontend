variable bucket_name {
  type        = string
  description = "S3 bucket storing static files for website"
}

variable bucket_acl {
  type        = string
  default     = "private"
  description = "Bucket ACL (Access Control Listing)"
}

variable versioning {
  type        = bool
  default     = false
  description = "Flag to determine whether bucket versioning is enabled or not"
}

variable domain_name {
  type        = string
  default     = "buddham-martial-arts.com"
  description = "domain name of the appliacation"
}
