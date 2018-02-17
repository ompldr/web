#!/bin/sh

tmpfile="$(mktemp).yaml"
curl -s https://api.ompldr.io/swagger.yaml -o $tmpfile
spectacle $tmpfile -t html/api
rm $tmpfile
