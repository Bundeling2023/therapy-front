#!/usr/bin/env bash

# Base URL of the running frontend (override with BASE_URL env var)
BASE_URL="${BASE_URL:-http://localhost:3000}"

# Minimal expected content marker per page
declare -A EXPECTED
EXPECTED["/"]="De Bundeling"
EXPECTED["/contact"]="Contact"
EXPECTED["/team"]="Team"
EXPECTED["/locations"]="Locaties"
EXPECTED["/thank-you"]="Bedankt"

# Test each page
for PAGE in "/" "/contact" "/team" "/locations" "/thank-you"; do
  echo "Testing ${BASE_URL}${PAGE}..."
  BODY=$(curl -s "${BASE_URL}${PAGE}")
  RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}${PAGE}")
  EXPECTED_TEXT="${EXPECTED[$PAGE]}"

  if [ "$RESPONSE" -eq 200 ]; then
    if echo "$BODY" | grep -qi "$EXPECTED_TEXT"; then
      echo "[SUCCESS] ${PAGE} loaded and contains expected content: ${EXPECTED_TEXT}"
    else
      echo "[FAILURE] ${PAGE} loaded but expected content not found: ${EXPECTED_TEXT}"
    fi
  else
    echo "[FAILURE] ${PAGE} returned status code ${RESPONSE}."
  fi

done