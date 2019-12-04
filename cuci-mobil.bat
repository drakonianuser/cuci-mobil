@echo off


git clone https://github.com/drakonianuser/cuci-mobil.git
npm install -g @angular/cli 
npm install -g @angular/cli@7.3.0
npm install -g typescript


start /b start-server.bat
start /b start-api-1.bat