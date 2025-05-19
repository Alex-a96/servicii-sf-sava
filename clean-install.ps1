Write-Host "🔄 Navigare în directorul frontend..."
Set-Location -Path ".\servicii-sfantul-sava-main"
Write-Host "✅ Am intrat în directorul frontend."

Write-Host "`n🔄 Curățare fișiere vechi..."

if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force node_modules
    Write-Host "✔️  'node_modules' șters."
} else {
    Write-Host "⚠️  'node_modules' nu există."
}

if (Test-Path "package-lock.json") {
    Remove-Item -Force package-lock.json
    Write-Host "✔️  'package-lock.json' șters."
} else {
    Write-Host "⚠️  'package-lock.json' nu există."
}

Write-Host "`n🚿 Curățare cache npm..."
npm cache clean --force

Write-Host "`n📦 Reinstalare dependențe..."
npm install

Write-Host "`n🔍 Verificare instalare TypeScript..."
if (Test-Path ".\node_modules\.bin\tsc.cmd") {
    Write-Host "✅ TypeScript instalat corect."
} else {
    Write-Host "❌ TypeScript nu a fost instalat corect. Încercăm reinstalarea..."
    npm install --save-dev typescript
}

Write-Host "`n🔍 Verificare instalare Vue..."
if (Test-Path ".\node_modules\vue") {
    Write-Host "✅ Vue instalat corect."
} else {
    Write-Host "❌ Vue nu a fost instalat corect. Încercăm reinstalarea..."
    npm install vue
}

Write-Host "`n🔍 Verificare instalare Vite..."
if (Test-Path ".\node_modules\vite") {
    Write-Host "✅ Vite instalat corect."
} else {
    Write-Host "❌ Vite nu a fost instalat corect. Încercăm reinstalarea..."
    npm install --save-dev vite
}

Write-Host "`n🔍 Verificare instalare Tailwind..."
if (Test-Path ".\node_modules\tailwindcss") {
    Write-Host "✅ Tailwind instalat corect."
} else {
    Write-Host "❌ Tailwind nu a fost instalat corect. Încercăm reinstalarea..."
    npm install --save-dev tailwindcss
}

Write-Host "`n🔍 Testare compilare TypeScript..."
& .\node_modules\.bin\tsc.cmd --noEmit
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Compilarea TypeScript a rulat cu succes."
} else {
    Write-Host "❌ Erori la compilarea TypeScript."
}

Write-Host "`n🔄 Revenire la directorul principal..."
Set-Location -Path ".."
Write-Host "✅ Am revenit la directorul principal."

Write-Host "`n✨ Proces finalizat!" 