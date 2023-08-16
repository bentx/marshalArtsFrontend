resource "aws_s3_bucket" "website_bucket" {
  bucket = var.bucket_name

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  versioning {
    enabled = var.versioning
  }

  tags = {
    Name = var.bucket_name
  }
}


# Deploy the React application files to the S3 bucket
resource "aws_s3_bucket_object" "html" {
for_each = fileset("../build/", "**/*.html")
bucket = aws_s3_bucket.website_bucket.id
key = each.value
source = "../build/${each.value}"
etag = filemd5("../build/${each.value}")
content_type = "text/html"
}

resource "aws_s3_bucket_object" "svg" {
for_each = fileset("../build/", "**/*.svg")
bucket = aws_s3_bucket.website_bucket.id
key = each.value
source = "../build/${each.value}"
etag = filemd5("../build/${each.value}")
content_type = "image/svg+xml"
}

resource "aws_s3_bucket_object" "css" {
for_each = fileset("../build/", "**/*.css")
bucket = aws_s3_bucket.website_bucket.id
key = each.value
source = "../build/${each.value}"
etag = filemd5("../build/${each.value}")
content_type = "text/css"
}



resource "aws_s3_bucket_object" "js" {
for_each = fileset("../build/", "**/*.js")
bucket = aws_s3_bucket.website_bucket.id
key = each.value
source = "../build/${each.value}"
etag = filemd5("../build/${each.value}")
content_type = "application/javascript"
}

resource "aws_s3_bucket_object" "images" {
for_each = fileset("../build/", "**/*.png")
bucket = aws_s3_bucket.website_bucket.id
key = each.value
source = "../build/${each.value}"
etag = filemd5("../build/${each.value}")
content_type = "image/png"
}

resource "aws_s3_bucket_object" "json" {
for_each = fileset("../build/", "**/*.json")
bucket = aws_s3_bucket.website_bucket.id
key = each.value
source = "../build/${each.value}"
etag = filemd5("../build/${each.value}")
content_type = "application/json"
}

resource "aws_s3_bucket_object" "map" {
for_each = fileset("../build/", "**/*.map")
bucket = aws_s3_bucket.website_bucket.id
key = each.value
source = "../build/${each.value}"
etag = filemd5("../build/${each.value}")
content_type = "test/map"
}

locals {
  s3_origin_id = "S3-origin-react-app"
}

resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "my-react-app"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.website_bucket.bucket_domain_name
    origin_id   = local.s3_origin_id
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases = [var.domain_name]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400

    
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = [ "IN" ]
    }
  }

  tags = {
    Name = "${var.bucket_name}-distribution"
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    acm_certificate_arn = aws_acm_certificate.ssl_certificate.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1"
  }
   custom_error_response {
    error_caching_min_ttl = "0"
    error_code            = "400"
    response_code         = "200"
    response_page_path    = "/index.html"
  }
  custom_error_response {
    error_caching_min_ttl = "0"
    error_code            = "404"
    response_code         = "200"
    response_page_path    = "/index.html"
  }
  custom_error_response {
    error_caching_min_ttl = "0"
    error_code            = "403"
    response_code         = "200"
    response_page_path    = "/index.html"
  }
}

data "aws_iam_policy_document" "react_app_s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.website_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.oai.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "react_app_bucket_policy" {
  bucket = aws_s3_bucket.website_bucket.bucket
  policy = data.aws_iam_policy_document.react_app_s3_policy.json
}

resource "aws_s3_bucket_public_access_block" "block_public_access" {
  bucket = aws_s3_bucket.website_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  #ignore_public_acls      = true
  #restrict_public_buckets = true
}
