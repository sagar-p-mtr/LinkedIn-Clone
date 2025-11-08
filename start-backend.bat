@echo off
echo ====================================
echo LinkedIn Clone - Backend Server
echo ====================================
echo.
echo Starting MongoDB and Backend Server...
echo.

cd backend

echo Installing dependencies...
call npm install

echo.
echo Starting server...
call npm start
