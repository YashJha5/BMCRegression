#!/bin/bash
# Generate and Open an Allure Report

echo "Generating the Report ..."

allure generate output/allure-results/ &
allure report open
