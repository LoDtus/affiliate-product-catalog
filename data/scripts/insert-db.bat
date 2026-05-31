@echo off
setlocal EnableDelayedExpansion

:: Cấu hình kết nối MongoDB
set MONGO_URI=mongodb://root:rootpw@localhost:27018/admin
set DB_NAME=affiliate-product-catalog
set SEED_DIR=..\schemas

echo Starting...
echo URI: %MONGO_URI%
echo Database: %DB_NAME%
echo Folder: %SEED_DIR%
echo ----------------------------------------

:: Chạy từng file .js theo thứ tự tên
for /f "delims=" %%f in ('dir /b /on "%SEED_DIR%\*.js"') do (
    echo Running: %%~nxf...
    
    mongosh %MONGO_URI% --file "%SEED_DIR%\%%f" --quiet
    
    if !errorlevel! equ 0 (
        echo Completed: %%~nxf
    ) else (
        echo Error: %%~nxf
        pause
        exit /b 1
    )
    echo ----------------------------------------
)

echo Finish seed data MongoDB!
echo Check database: mongosh %MONGO_URI%
pause