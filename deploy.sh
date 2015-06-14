aws s3 sync . s3://derekvance-omdb-client --acl public-read --exclude ".git/*"
open http://derekvance-omdb-client.s3-website-us-west-2.amazonaws.com
