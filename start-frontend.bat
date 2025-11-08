@echo off
echo ====================================
echo LinkedIn Clone - Frontend App
echo ====================================
echo.
echo Starting React Development Server...
echo.

cd frontend

echo Installing dependencies...
call npm install

echo.
echo Starting development server...
call npm run dev
