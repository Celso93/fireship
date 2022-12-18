Review Git

git init
git status
.gitignore
Idea o staging: 
    Git add . (add to staging)
    git reset (removing from staging)

Commit: taking a unique picture
git commit -m "message"
Github
ssh
git remote origin(from githut) main(branch)
git remote -v(verbose, to show origin url)
git push origin main -u(upstream)

git fetch (bring the origin branch to local branch)
git merge origin/main (in your branch you can update the main local)
git pull = git fecth + merge

git merge
- To use Git merge you need to be in branch that will receive the change;
- You can accept the incomming changes, accept both or decline the incomming change;
- git merge --abort (revert the merge)