blog_dir="/Users/ocavue/Git/blog"
github_page_dir="/Users/ocavue/Git/ocavue.github.io"

cd $blog_dir
echo `pwd`
rm -rf ./dist
yarn run build

hash="`git log --pretty=format:'%h' -n 1`"
branch="`git rev-parse --abbrev-ref HEAD`"

cd $github_page_dir
git fetch --all
git reset --hard origin/master
rm -rf ./*
cp ${blog_dir}/index.html ${github_page_dir}
cp -r ${blog_dir}/dist ${github_page_dir}

git add --all
git commit -m "auto release
date: `date -u`
hash: $hash
branch: $branch
"
git push
