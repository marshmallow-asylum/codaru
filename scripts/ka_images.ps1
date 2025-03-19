# Define the base64 conversion function inline
function ConvertTo-Base64JS {
    param (
        [string]$InputFile,
        [string]$OutputFile
    )
    
    # Read the WebP file and convert to base64
    $bytes = [System.IO.File]::ReadAllBytes($InputFile)
    $base64 = [Convert]::ToBase64String($bytes)
    
    # Get filename without extension for the variable name
    $fileName = [System.IO.Path]::GetFileNameWithoutExtension($InputFile)
    $cleanFileName = $fileName -replace '[^a-zA-Z0-9_]', '_'
    
    # Create the JavaScript variable
    $jsVariable = "var img_$cleanFileName = `"data:image/webp;base64,$base64`";"
    
    # Create output directory if it doesn't exist
    $outputDir = [System.IO.Path]::GetDirectoryName($OutputFile)
    if (-not (Test-Path -Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    }
    
    # Write to the JS file
    Set-Content -Path $OutputFile -Value $jsVariable
    
    Write-Output "Converted $InputFile to $OutputFile"
}

# Define source and destination paths
$sourcePath = "..\public\assets\images"
$destPath = "..\ka\images"

# Get all WebP files in the source directory
$webpFiles = Get-ChildItem -Path "$sourcePath\*.webp"

# Create the output directory if it doesn't exist
if (-not (Test-Path -Path $destPath)) {
    New-Item -ItemType Directory -Path $destPath -Force | Out-Null
}

# Process each WebP file
foreach ($file in $webpFiles) {
    $outputFile = Join-Path -Path $destPath -ChildPath "$($file.BaseName).js"
    ConvertTo-Base64JS -InputFile $file.FullName -OutputFile $outputFile
}

Write-Output "Conversion complete. Processed $($webpFiles.Count) WebP files."