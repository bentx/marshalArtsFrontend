# Frontend Environment
module "static_website_and_cloudfront_distribution" {
  source = "./frontend"
  bucket_name = "${var.application_name}"
  bucket_acl = "public-read"
}