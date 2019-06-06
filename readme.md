# GGPPMS
狗狗掌的工程流程管理系统-前台

傻吊前台

sbws

### Buglist

* 点编辑pick完成之后再编辑 projectid就会变成0

* 新功能要求：查询一个成果物下全部review的状态（state）是否都为4,在editresult的417行。

* 新功能要求：查询一个review下全部pick的状态（status）是否都为4

* ~~http://www.polarbear.pub:8080/GGPPMS/api/pick/loadByResult/ 接口返回id错误~~

* ~~addproject.html 没有传进来优先级/预计工数~~

* ~~pick.html的http://www.polarbear.pub:8080/GGPPMS/api/pick/load/接口，没有返回指摘内容和指摘描述~~

* ~~pick数据库表有问题，last-update-by应该是上次修改人，传过去的字段名应该叫updateman，字段pickcontent（数据库中叫pick_content）和pickintro（数据库中叫pick_introduction）没有传进去~~

* ~~editpick.html提交报500~~

* ~~没返回是因为数据库没有 http://www.polarbear.pub:8080/GGPPMS/api/result/load/ 在editresult.html中，json没有返回endtime~~
 
* ~~添加成果物之后跳转的界面不对~~

* ~~项目下全部成果物不显示中文名~~

* ~~点进成果物没有添加的各种信息/显示不正常（link不正常）~~

* ~~成果物指派给应该显示人名~~

* ~~editresult 447行之后有问题，没有返回数据~~

* ~~成果物优先级没有传入数据库~~

* ~~登录时返回用户权限~~

* ~~main1返回全部review的部分没有返回reviewid，返回的是resultid~~

* ~~addreview没有返回worker~~

* ~~review表需要全部填写~~

* ~~编辑成果物无法提交~~

* ~~工作台界面无返回响应~~

* ~~用户管理页面应可以缺省~~

* ~~已关注的活动应该显示为取消关注~~

* ~~搜索直达~~

* ~~controlmember没响应~~

* ~~修改成果物之后pid没有传进去~~

* ~~controlmember指派为组长时，应该把usertype也改动，删除也是。指派为组长usertype变成2，删除之后变成3~~

* ~~pick无法insert~~

* ~~assign在main1，review和pick页面要显示人名，但是返回的json里还是要返回assign_to这段！！！！！！！！！！！！！！！！！！重要！！！！！！！！！！！！！！！！！~~

* ~~edituser没有修改组别成功（usertype和usergropupid）/*PL可以指定usergroupid为0*/~~

* ~~指派给的人除包括本项目GL和开发以外，应包括PL（创建者）~~

* ~~review指派给的人应该显示nickname（指的是review.html显示的指派给的人）~~

* ~~addreview的reviewee没添加进去~~

* ~~关闭项目没有考虑项目下全部成果物，应该是全部成果物都已经关闭的前提下，才可以关闭项目~~

* ~~pick.html指派给的人要显示nickname~~

* ~~mymessgae.html中的http://www.polarbear.pub:8080/GGPPMS/api/user/get接口404~~

* ~~main1指派给的人显示nickname~~

* ~~addgroup.html的搜索请求404，http://www.polarbear.pub:8080/GGPPMS/api/user/get~~

