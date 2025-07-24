Commands

+ push code to Git

git add .
git commit -m " First commit "
git push origin main

+ the part infornt of 'git commit -m' is what you use to leave yourself comments so that you know what verstion it is. For example:

git add .
git commit -m " fixing something that wasn't working  "
git push origin main

+ always leave one that shows what's the last working version. this will be your checkpoint

git add .
git commit -m "Last Working Version"
git push origin main


+ turn all terminals running the projects off:

pkill -f "next dev" || true

+ get a list of all project files:

ls -la

+ pushing code to vercel when you've already connected your vercel account to your terminal on another project previously:

vercel --prod