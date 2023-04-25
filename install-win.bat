@echo off

:: BatchGotAdmin
:-------------------------------------
REM  --> Check for permissions
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    echo Requesting administrative privileges...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    if exist "%temp%\getadmin.vbs" ( del "%temp%\getadmin.vbs" )
    pushd "%CD%"
    CD /D "%~dp0"
:--------------------------------------

set "download_folder=%userprofile%\Downloads\Thumbify"
set "script_folder="

REM Check the installed Adobe Photoshop version
if exist "%ProgramFiles%\Adobe\Adobe Photoshop 2022\Presets\Scripts" (
set "script_folder=%ProgramFiles%\Adobe\Adobe Photoshop 2022\Presets\Scripts"
) else if exist "%ProgramFiles%\Adobe\Adobe Photoshop 2021\Presets\Scripts" (
set "script_folder=%ProgramFiles%\Adobe\Adobe Photoshop 2021\Presets\Scripts"
) else if exist "%ProgramFiles%\Adobe\Adobe Photoshop 2020\Presets\Scripts" (
set "script_folder=%ProgramFiles%\Adobe\Adobe Photoshop 2020\Presets\Scripts"
) else if exist "%ProgramFiles%\Adobe\Adobe Photoshop CC 2019\Presets\Scripts" (
set "script_folder=%ProgramFiles%\Adobe\Adobe Photoshop CC 2019\Presets\Scripts"
) else (
echo Adobe Photoshop is not installed or could not find the preset folder.
pause
exit
)

echo Copying Thumbify.jsx to "%script_folder%"...
copy /y "%download_folder%\Thumbify.jsx" "%script_folder%\Thumbify.jsx" >nul

if errorlevel 1 (
echo Error copying Thumbify.jsx to "%script_folder%".
) else (
echo Thumbify.jsx copied to "%script_folder%".
)

echo Done.
pause