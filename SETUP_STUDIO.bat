@echo off
echo ========================================
echo SSA Sheridan - Sanity Studio Setup
echo ========================================
echo.

echo Step 1: Closing any processes that might lock files...
taskkill /f /im node.exe 2>nul
timeout /t 2 >nul

echo.
echo Step 2: Navigating to studio folder...
cd studio

echo.
echo Step 3: Installing dependencies...
echo (This may take 2-3 minutes, please wait...)
npm install --legacy-peer-deps

echo.
echo Step 4: Deploying Sanity Studio...
echo (When prompted, enter hostname: ssa-sheridan-studio)
sanity deploy

echo.
echo ========================================
echo Setup complete!
echo ========================================
pause

