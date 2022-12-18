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

[Git Branch Information]
- git branch (to list all local branches)
- git branch branchName
- git checkout branchName (change to this local branch)
- git checkout -b anotherBranch (create and access to this local branch)
- git branch -d branchName (delete the branch)
- git branch -D branchName (force delete the branch)

[FORK]
- It's more github feature, you can download the source code in your repository without make changes on the main repository;

[Git Reset]
- You have to know the difference between: Working Dir, Staging area and Commit
- When you have some file in staging area you can use git reset to remove from there
- You can go back to a commit using: git reset commit-ID
- Rollback: git reset commit-ID --hard (becareful to use this when the code is already pushed and when you are working with another developers)

[REVERT]
- git reverse commit-ID
- It will reset and create a commit of this revert
- It`s better to use this than the git reset --HARD commit-ID

[AMEND]
- you can change the name of your commits and add files
- git commit --amend -m 'text modification'
- git commit --amend --no-edit