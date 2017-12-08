cp index.html dist
git add ./dist/*
git commit -m 'Create release files $(date)'
git branch -D master
git subtree split --prefix dist -b master
