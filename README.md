"# GitHub-Hub" 
"# GitHub-Hub" 

git commands:
cd directory
C:\Users\RevathiSrinivas>cd WebstormProjects

------ to change directory-------------------

C:\Users\RevathiSrinivas\WebstormProjects>git init
Reinitialized existing Git repository in C:/Users/RevathiSrinivas/WebstormProjects/.git/
------------- to initialize repository ----------------------

C:\Users\RevathiSrinivas\WebstormProjects>git clone https://github.com/grevillopes/GitHub-Hub.git
Cloning into 'GitHub-Hub'...
remote: Counting objects: 24, done.
remote: Compressing objects: 100% (15/15), done.
remote: Total 24 (delta 4), reused 24 (delta 4), pack-reused 0
Unpacking objects: 100% (24/24), done.

C:\Users\RevathiSrinivas\WebstormProjects>git checkout -b origin/master
Switched to a new branch 'origin/master'

C:\Users\RevathiSrinivas\WebstormProjects>git checkout -b Revathi
Switched to a new branch 'Revathi'

C:\Users\RevathiSrinivas\WebstormProjects>git checkout Revathi
Already on 'Revathi'

C:\Users\RevathiSrinivas\WebstormProjects>git branch
* Revathi
  master
  origin/master

C:\Users\RevathiSrinivas\WebstormProjects>git branch -d origin/master
Deleted branch origin/master (was 34fb4f4).

C:\Users\RevathiSrinivas\WebstormProjects>cd Github-hub
----------------------------------------------------------------------------------------------------------


C:\Users\RevathiSrinivas\WebstormProjects>cd github-hub

C:\Users\RevathiSrinivas\WebstormProjects\GitHub-Hub>git init
Reinitialized existing Git repository in C:/Users/RevathiSrinivas/WebstormProjects/GitHub-Hub/.git/

C:\Users\RevathiSrinivas\WebstormProjects\GitHub-Hub>git pull https://github.com/RevathiChittepureddy/GitHub-Hub.git
From https://github.com/RevathiChittepureddy/GitHub-Hub
 * branch            HEAD       -> FETCH_HEAD
Already up-to-date.

C:\Users\RevathiSrinivas\WebstormProjects\GitHub-Hub>git add .

C:\Users\RevathiSrinivas\WebstormProjects\GitHub-Hub>git commit -m "changes by revathi"
[master 90efce6] changes by revathi
 2 files changed, 49 insertions(+), 18 deletions(-)

C:\Users\RevathiSrinivas\WebstormProjects\GitHub-Hub>git push https://github.com/RevathiChittepureddy/GitHub-Hub.git
Logon failed, use ctrl+c to cancel basic credential prompt.
Username for 'https://github.com/': revathichittepureddy
Password for 'https://revathichittepureddy@github.com/':
Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 841 bytes | 0 bytes/s, done.
Total 6 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/RevathiChittepureddy/GitHub-Hub.git
   34fb4f4..90efce6  master -> master

C:\Users\RevathiSrinivas\WebstormProjects\GitHub-Hub>git push https://github.com/RevathiChittepureddy/GitHub-Hub.git
Everything up-to-date

C:\Users\RevathiSrinivas\WebstormProjects\GitHub-Hub>