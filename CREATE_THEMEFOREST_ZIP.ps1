# ThemeForest Proper Packaging Script
Write-Host "================================================" -ForegroundColor Cyan
Write-Host " ThemeForest ZIP Package Creator" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Define paths
$packageName = "Restaurant-React-Theme"
$packageDir = ".\$packageName"
$templateDir = "$packageDir\Template\restaurant-theme-source"
$docsDir = "$packageDir\Documentation"
$screenshotsDir = "$packageDir\Screenshots"
$zipFileName = "$packageName-v1.0.zip"

# Step 1: Clean up
Write-Host "Step 1: Cleaning up old package..." -ForegroundColor Yellow
if (Test-Path $packageDir) {
    Remove-Item -Recurse -Force $packageDir
}
if (Test-Path $zipFileName) {
    Remove-Item -Force $zipFileName
}
Write-Host "  Done" -ForegroundColor Green

# Step 2: Create structure
Write-Host ""
Write-Host "Step 2: Creating folder structure..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path $templateDir | Out-Null
New-Item -ItemType Directory -Force -Path $docsDir | Out-Null
New-Item -ItemType Directory -Force -Path $screenshotsDir | Out-Null
Write-Host "  Done" -ForegroundColor Green

# Step 3: Copy source files
Write-Host ""
Write-Host "Step 3: Copying source files..." -ForegroundColor Yellow
$excludeDirs = @("node_modules", "dist", ".git", ".vscode", "themeforest-submission", $packageName, "Restaurant-React-Theme", "VERIFY_PACKAGE", "VERIFY_FINAL")

Get-ChildItem -Force | Where-Object {
    $name = $_.Name
    $exclude = $false
    foreach ($dir in $excludeDirs) {
        if ($name -eq $dir) { $exclude = $true }
    }
    if ($name -like "*.zip") { $exclude = $true }
    if ($name -like "*.log") { $exclude = $true }
    if ($name -eq ".DS_Store") { $exclude = $true }
    return -not $exclude
} | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $templateDir -Recurse -Force
    Write-Host "  Copied: $($_.Name)" -ForegroundColor Gray
}
Write-Host "  Done" -ForegroundColor Green

# Step 4: Copy documentation
Write-Host ""
Write-Host "Step 4: Copying documentation..." -ForegroundColor Yellow
Copy-Item "docs\documentation.md" "$docsDir\" -Force
Copy-Item "docs\README.md" "$docsDir\" -Force
Copy-Item "docs\credits.md" "$docsDir\" -Force
Copy-Item "IMAGE_MAPPING.md" "$docsDir\" -Force
Write-Host "  Done" -ForegroundColor Green

# Step 5: Verify no node_modules
Write-Host ""
Write-Host "Step 5: Verifying..." -ForegroundColor Yellow
if (Test-Path "$templateDir\node_modules") {
    Write-Host "  ERROR: node_modules found!" -ForegroundColor Red
    exit 1
}
if (Test-Path "$templateDir\dist") {
    Remove-Item -Recurse -Force "$templateDir\dist"
}
Write-Host "  No node_modules - OK" -ForegroundColor Green
Write-Host "  No dist - OK" -ForegroundColor Green

# Step 6: Create ZIP
Write-Host ""
Write-Host "Step 6: Creating ZIP..." -ForegroundColor Yellow
Compress-Archive -Path "$packageDir\*" -DestinationPath $zipFileName -Force
$zipSize = (Get-Item $zipFileName).Length / 1MB
Write-Host "  Created: $zipFileName" -ForegroundColor Green
Write-Host "  Size: $([math]::Round($zipSize, 2)) MB" -ForegroundColor Green

# Summary
Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host " SUCCESS!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Package Structure:" -ForegroundColor Yellow
Write-Host "  $packageName/" 
Write-Host "    Template/"
Write-Host "      restaurant-theme-source/ (NO node_modules)" -ForegroundColor Green
Write-Host "    Documentation/"
Write-Host "    Screenshots/ (add your images here)"
Write-Host ""
Write-Host "ZIP: $zipFileName ($([math]::Round($zipSize, 2)) MB)" -ForegroundColor Green
Write-Host ""
Write-Host "Ready for ThemeForest!" -ForegroundColor Green
