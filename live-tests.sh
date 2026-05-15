#!/bin/bash

# Base URL of the running frontend
BASE_URL="http://localhost:3000"

# Pages to test
PAGES=(
  "/"
  "/contact"
  "/team"
  "/locations"
  "/thank-you"
)

# Test each page
for PAGE in "${PAGES[@]}"; do
  echo "Testing ${BASE_URL}${PAGE}..."
  RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}${PAGE}")

  if [ "$RESPONSE" -eq 200 ]; then
    echo "[SUCCESS] ${PAGE} loaded successfully."
  else
    echo "[FAILURE] ${PAGE} returned status code ${RESPONSE}."
  fi

done