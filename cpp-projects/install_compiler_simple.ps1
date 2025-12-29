# C++ Compiler Installation Script
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "C++ Development Setup for Windows" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if g++ is already installed
Write-Host "Checking if g++ is already installed..." -ForegroundColor Yellow
$gppCheck = Get-Command g++ -ErrorAction SilentlyContinue
if ($gppCheck) {
    Write-Host "g++ is already installed!" -ForegroundColor Green
    g++ --version
    Write-Host ""
    Write-Host "You're ready to start coding in C++!" -ForegroundColor Green
    exit 0
} else {
    Write-Host "g++ is not installed" -ForegroundColor Red
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
    Write-Host "MSYS2 installed successfully!" -ForegroundColor Green
} else {
    Write-Host "Failed to install MSYS2 automatically" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install manually from https://www.msys2.org/" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "1. Open MSYS2 UCRT64 from Start Menu" -ForegroundColor White
Write-Host "2. Run: pacman -Syu" -ForegroundColor White
Write-Host "3. Run: pacman -S mingw-w64-ucrt-x86_64-gcc mingw-w64-ucrt-x86_64-gdb" -ForegroundColor White
Write-Host "4. Add C:\msys64\ucrt64\bin to your PATH environment variable" -ForegroundColor White
Write-Host "5. Restart VS Code" -ForegroundColor White
Write-Host ""
Write-Host "For detailed instructions, see CPP_SETUP_GUIDE.md" -ForegroundColor Cyan
