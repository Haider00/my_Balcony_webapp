echo "Switching to branch master"
git checkout master


echo "Building app..."

npm run build


echo "Deploying files to server..."

scp -r build/* irzam@45.79.210.157:/var/www/45.79.210.157

echo "Done!"