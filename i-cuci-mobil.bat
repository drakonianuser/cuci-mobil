@echo off


git clone https://github.com/drakonianuser/cuci-mobil.git
npm install -g @angular/cli 
npm install -g @angular/cli@7.3.0
npm install -g typescript

cd cuci-mobil 
git checkout development 
cd base de datos
$mysql -u root -p < cuci-mobil.sql
cd ESTRUTURAS
$mysql -u root -p < 001_INSERT_USUARIOS.sql

cd ..
cd ..

start /b cuci-mobil.bat

