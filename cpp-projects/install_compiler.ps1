# C+an+ Compiler Installation Script
# This script helps install MSYS2 and MinGW-w64 on Windows

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "C++ Development Setup for Windows" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if g++ is already installed
Write-Host "Checking if g++ is already installed..." -ForegroundColor Yellow
try {
    $gppVersion = g++ --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ g++ is already installed!" -ForegroundColor Green
        Write-Host $gppVersion[0]
        Write-Host ""
        Write-Host "You're ready to start coding in C++!" -ForegroundColor Green
        exit 0
    }
} catch {
    Write-Host "✗ g++ is not installed" -ForegroundColor Red
}

Write-Host ""
Write-Host "Installing MSYS2 with MinGW-w64..." -ForegroundColor Yellow
Write-Host ""

# Accept winget agreements
Write-Host "Step 1: Accepting winget source agreements..." -ForegroundColor Cyan
winget list --accept-source-agreements > $null 2>&1

# Install MSYS2
Write-Host "Step 2: Installing MSYS2 (this may take a few minutes)..." -ForegroundColor Cyan
winget install --id=msys2.msys2 -e --silent --accept-source-agreements --accept-package-agreements

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ MSYS2 installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install MSYS2 automatically" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install manually:" -ForegroundColor Yellow
    Write-Host "1. Visit: https://www.msys2.org/" -ForegroundColor White
    Write-Host "2. Download and run the installer" -ForegroundColor White
    Write-Host "3. Follow the default installation options" -ForegroundColor White
    exit 1
}

Write-Host ""
Write-Host "Step 3: Installing MinGW-w64 GCC compiler..." -ForegroundColor Cyan
Write-Host "Please run these commands in MSYS2 UCRT64 terminal:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  pacman -Syu" -ForegroundColor White
Write-Host "  pacman -S mingw-w64-ucrt-x86_64-gcc mingw-w64-ucrt-x86_64-gdb" -ForegroundColor White
Write-Host ""

Write-Host "Step 4: Add to PATH" -ForegroundColor Cyan
Write-Host "Add this path to your System Environment Variables:" -ForegroundColor Yellow
Write-Host "  C:\msys64\ucrt64\bin" -ForegroundColor White
Write-Host ""

Write-Host "Instructions:" -ForegroundColor Yellow
Write-Host "1. Search 'Environment Variables' in Windows Start" -ForegroundColor White
Write-Host "2. Click 'Environment Variables'" -ForegroundColor White
Write-Host "3. Under 'System variables', select 'Path', click 'Edit'" -ForegroundColor White
Write-Host "4. Click 'New' and add: C:\msys64\ucrt64\bin" -ForegroundColor White
Write-Host "5. Click OK on all windows" -ForegroundColor White
Write-Host "6. Restart VS Code or your terminal" -ForegroundColor White
Write-Host ""

Write-Host "After completing these steps, run: g++ --version" -ForegroundColor Cyan
Write-Host ""
Write-Host "For detailed instructions, see CPP_SETUP_GUIDE.md" -ForegroundColor Cyan
