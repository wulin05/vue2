.env\Scripts\activate.bat

git submodule update --init --recursive
git submodule update --remote


总结创建与合并分支命令如下：

查看分支：git branch

创建分支：git branch name

切换分支：git checkout name

创建+切换分支：git checkout –b name

合并某分支到当前分支：git merge name

删除分支：git branch –d name


当你从远程库克隆时候，实际上Git自动把本地的master分支和远程的master分支对应起来了，并且远程库的默认名称是origin。

要查看远程库的信息 使用 git remote
要查看远程库的详细信息 使用 git remote –v



#### 解决git凭证的命令：
https://blog.csdn.net/Nicolege678/article/details/125281207

git config --global credential.helper "!aws codecommit credential-helper $@"
 
git config --global credential.UseHttpPath true




git使用流程：

1.先在develop主分支,pull到最新状态
2.再基于develop主分支，创建自己的本地分支,比如 feature_项目ID
3.开发......
4.开发完成,先从当前开发的分支(feature_项目ID）切换回 develop 主分支
5.将本地develop主分支继续pull到最新状态(因为可能在你开发的过程中，其他人已经提交并merge代码到develop主分支了，那么自己的develop如果不先
  pull的话，可以出现的问题： 1.虽然后续push当前feature_项目ID到远程仓库，并プルリクエストpull request不报错，但是可能实际自己所依赖的
  类或库在远程develop已经被修改过了，那么未来可能项目实际再跑的时候会出问题； 2.在プルリクエストpull request的时候会报错，这时候需要去
  更改代码)-----》这一波要再请教下其他人,为什么？
6.在本地将develop仓库merge到开发的分支feature_项目ID，再跑代码（测试等等）,这样最后提交代码到远程分支，并PR（プルリクエストpull request）。




重要一：

要用远程库的内容覆盖本地子模块的修改，可以按照以下步骤操作：

进入子模块目录： 在命令行中切换到子模块的目录。

重置为远程库的状态： 使用以下命令将子模块重置为远程库的状态：

bash
Copy code
git fetch origin        # 获取远程库的最新内容
git reset --hard origin/master    # 将子模块的状态重置为与远程库的 master 分支相同
如果子模块所在的分支不是 master，将 origin/master 替换为相应的分支名。



重要二：

要将远程库的feature_CMC0014分支的修改更新到atd-common-api-test的common子模块目录，你可以执行以下步骤：

将atd-common-api的feature_CMC0014分支更新：
在本地 atd-common-api 项目中，确保你的 feature_CMC0014 分支是基于 develop 分支的最新版本，使用以下命令更新并确保本地 feature_CMC0014 分支是最新的：

bash
Copy code
git checkout feature_CMC0014
git pull origin develop
将atd-common-api的feature_CMC0014分支修改同步到子模块：
进入 atd-common-api-test 项目中的 common 子模块目录，在该目录下使用 git 命令将 feature_CMC0014 分支最新修改拉取过来：

bash
Copy code
cd atd-common-api-test/common
git checkout feature_CMC0014     # 确认当前分支是feature_CMC0014分支
git pull origin feature_CMC0014  # 将远程的feature_CMC0014分支最新修改拉取到本地


重要三：

git 放弃并还原当前的修改

https://blog.csdn.net/jiangkejkl/article/details/121909880






查询sql文：
    def get_url_info(self, param):
        '''
        ランディングページＵＲＬテーブルを検索し、出力内容を取得する
        '''
        sys_date = datetime.strptime(param['sys_date'], '%Y%m%d')
        
        queryset_data = Ab0270.objects.filter(
            hoken_kind=param['hoken_kind'],
            url_kbn__in=param['url_kbn'],
            start_date__lte=sys_date,
            end_date__gte=sys_date
        ).order_by('url_kbn').values('output_text', 'url_kbn')
	
	# 查询sql文：
        print("222222222222222222222222Query SQL: ", queryset_data.query)  

        self.logger.debug(f'data:{queryset_data}')
        return queryset_data





SELECT "ab0270"."output_text", "ab0270"."url_kbn" FROM "ab0270" 
WHERE ("ab0270"."end_date" >= 2023-11-01 00:00:00 
AND "ab0270"."hoken_kind" = 7 
AND "ab0270"."start_date" <= 2023-11-01 00:00:00 
AND "ab0270"."url_kbn" IN (1, 2, 3, 4, 5)) 
ORDER BY "ab0270"."url_kbn"





{
"referer":"https://referer.ex.com/",
"drt_seq":"",
"drt_rnbn":"00000",
"user_kbn":"0",
"random_key":"randomKey",
"free4":""
}



C:\develop\atd-cycle\atd-cycle-api-test\db2.sqlite3





{
"referer":"https://referer.ex.com/",
"drt_seq":"",
"drt_rnbn":"00000",
"user_kbn":"0",
"random_key":"randomKey",
"free4":""
}







## 启动项目：

(.env) C:\develop\atd-cycle\atd-customer-app>python manage.py runserver 8848

(.env) C:\develop\atd-cycle\atd-cycle-api>python manage.py runserver

C:\develop\atd-cycle\atd-cycle-front>npm run dev


## 取消git追踪：
git rm -rf --cached .

如果您想要让 .gitignore 文件中定义的忽略规则生效，确保之前已经被 Git 跟踪的文件或目录不再被跟踪和提交到仓库中，您可以按照以下步骤操作：

在 .gitignore 文件中添加要忽略的文件或目录的规则。

使用 git rm -rf --cached . 命令，清除当前目录下已经被 Git 跟踪的文件或目录的缓存，使之前的跟踪记录失效。

执行 git add . 和 git commit -m "Update .gitignore"，将更新后的 .gitignore 文件提交到仓库中。

