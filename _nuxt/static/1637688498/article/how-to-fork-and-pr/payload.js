__NUXT_JSONP__("/article/how-to-fork-and-pr", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N){return {data:[{article:{slug:"how-to-fork-and-pr",description:"프로필, 아티클 작성 등 블로그 관련 작업을 어떻게 오리지널 레포지토리에 적용시키는지에 대해 안내 드립니다.",title:"[공지] 포크부터 풀리퀘까지",img:"git.png",category:"General",author:o,featured:"Featured",toc:[{id:p,depth:q,text:r},{id:s,depth:l,text:t},{id:u,depth:l,text:v},{id:w,depth:l,text:x},{id:y,depth:l,text:z},{id:A,depth:l,text:B},{id:C,depth:q,text:D},{id:E,depth:l,text:F},{id:G,depth:l,text:H}],body:{type:"root",children:[{type:a,tag:"blockquote",props:{},children:[{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"블로그 관련 작업을 어떻게 오리지널 레포지토리에 적용시키는지에 대해 안내 드립니다."}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Pull Request를 날리는 것이 익숙하지 않으신 분들을 위해, 아래 Fork부터 Pull Request를 날리는 과정까지를 짚어드리겠습니다. 본 과정이 익숙하신 분들은 바로 5번 유의사항만 봐주시면 됩니다."}]},{type:b,value:c},{type:a,tag:I,props:{id:p},children:[{type:a,tag:f,props:{href:"#%ED%8F%AC%ED%81%AC%EB%B6%80%ED%84%B0-%ED%92%80%EB%A6%AC%ED%80%98%EA%B9%8C%EC%A7%80%EC%9D%98-%EA%B3%BC%EC%A0%95",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:r}]},{type:b,value:c},{type:a,tag:m,props:{id:s},children:[{type:a,tag:f,props:{href:"#1-%EB%A0%88%ED%8F%AC%EC%A7%80%ED%86%A0%EB%A6%AC%EB%A5%BC-%ED%8F%AC%ED%81%AC%ED%95%A9%EB%8B%88%EB%8B%A4",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:t}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"오리지널 레포지토리 사진",src:"\u002Fhow-to-fork-and-pr\u002F01.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"우측 상단에 있는 fork 버튼을 눌러, 자신의 깃헙 계정으로 GDSC-CAU.github.io 레포지토리를 포크해주세요."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"포크된 레포지토리 사진",src:"\u002Fhow-to-fork-and-pr\u002F01-1.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"포크가 완료되면 위와 같이 자신의 계정명 \u002F 레포지토리명이 보이며, 그 바로 아래에 어디서 포크되었는지의 정보가 뜹니다."}]},{type:b,value:c},{type:a,tag:m,props:{id:u},children:[{type:a,tag:f,props:{href:"#2-%ED%8F%AC%ED%81%AC%ED%95%9C-%EB%A0%88%ED%8F%AC%EC%A7%80%ED%86%A0%EB%A6%AC%EB%A5%BC-%EB%A1%9C%EC%BB%AC%EC%97%90-%ED%81%B4%EB%A1%A0%ED%95%A9%EB%8B%88%EB%8B%A4",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:v}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"URL 복사하기",src:"\u002Fhow-to-fork-and-pr\u002F02.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"자신의 계정 내에 포크된 레포지토리가 생성되었다면, 해당 레포지토리를 로컬에 클론해주어야 해요. 우측 상단의 code를 눌러 레포지토리의 HTTPS URL을 복사해주세요."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"로컬에 클론해오기",src:"\u002Fhow-to-fork-and-pr\u002F03.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"터미널(GUI 사용하셔도 무방합니다)을 통해 클론할 위치로 이동해주세요. 원하는 장소에 클론 명령어를 통해 포크된 레포지토리를 클론해줍시다. 저는 폴더를 만들고 클론하는 걸 선호해서, 미리 폴더 생성 후 clone 명령어 뒤 점을 찍어 최상위 폴더를 제외한 파일들만 클론해왔어요."}]},{type:b,value:c},{type:a,tag:m,props:{id:w},children:[{type:a,tag:f,props:{href:"#3-%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-%EC%9E%91%EC%97%85-%ED%9B%84-%ED%8F%AC%ED%81%AC%EB%90%9C-%EB%A0%88%ED%8F%AC%EC%A7%80%ED%86%A0%EB%A6%AC%EC%97%90-%EC%BB%A4%EB%B0%8B%EC%9D%84-%EB%82%A0%EB%A6%BD%EB%8B%88%EB%8B%A4",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:x}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"클론을 마쳤다면, 열심히 작업을 해줍시다. 작업에 관련된 내용은 "},{type:a,tag:f,props:{href:"https:\u002F\u002Fgdsc-cau.github.io\u002Fhow-to-write-article",rel:[J,K,L],target:M},children:[{type:b,value:"아티클 작성 방법"}]},{type:b,value:"과 "},{type:a,tag:f,props:{href:"https:\u002F\u002Fgdsc-cau.github.io\u002Fhow-to-set-up-my-profile",rel:[J,K,L],target:M},children:[{type:b,value:"프로필 작성 방법"}]},{type:b,value:" 두 아티클에서 확인 가능합니다."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"add, commit, push",src:"\u002Fhow-to-fork-and-pr\u002F04.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"작업이 완료됐다면 커밋을 날려줍시다."}]},{type:b,value:c},{type:a,tag:m,props:{id:y},children:[{type:a,tag:f,props:{href:"#4-%ED%8F%AC%ED%81%AC%EB%90%9C-%EB%A0%88%ED%8F%AC%EC%A7%80%ED%86%A0%EB%A6%AC%EC%97%90%EC%84%9C-%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90-%EB%A0%88%ED%8F%AC%EC%A7%80%ED%86%A0%EB%A6%AC%EB%A1%9C-%ED%92%80%EB%A6%AC%ED%80%98%EB%A5%BC-%EB%82%A0%EB%A6%BD%EB%8B%88%EB%8B%A4",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:z}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:N,src:"\u002Fhow-to-fork-and-pr\u002F05.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"푸시까지 완료되었다면 깃헙의 포크된 레포지토리로 돌아와주세요. 오리지널 레포지토리의 main 브랜치보다 1 commit ahead한 상태라고 나와있네요. 포크된 레포에 저희가 방금 커밋을 적용했으니까요. 오리지널 레포에도 커밋을 적용시켜주기 위해 Pull Request를 날려줍시다. 우측 상단의 contribute 버튼을 눌러주신 후, open pull request를 눌러주세요."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:N,src:"\u002Fhow-to-fork-and-pr\u002F06.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"커밋 내용 확인해주시고, create pull request 눌러주세요."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"리뷰어 지정",src:"\u002Fhow-to-fork-and-pr\u002F07.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"커밋 관련 코멘트를 남기고 싶다면 적어주시고, 리뷰어를 지정해주셔야 합니다. 우측에 보면 reviewers란이 있는데, 톱니바퀴를 눌러 reviewer 지정이 가능합니다. 여기서 thepenielcho와 heeming 두 사람을 지정해주세요. 까먹으시면 안됩니다!"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"create pull request 누르기",src:"\u002Fhow-to-fork-and-pr\u002F08.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"자, 두 사람을 누르면 위와 같이 reviewers에 해당 코어멤버들이 지정되었다고 표시될 거에요. 저(thepenielcho)는 제 계정으로 작업 중이라 본인을 reviewer로 지정할 수 없는 상태입니다ㅠ 때문에 사진엔 희민님(Heeming)만 뜨지만, 실제로 여러분이 풀리퀘를 날려주실 땐 저도 같이 적어주셔야 합니다! Reviewers 지정까지 마치셨다면, create pull request를 눌러주시면 돼요."}]},{type:b,value:c},{type:a,tag:m,props:{id:A},children:[{type:a,tag:f,props:{href:"#5-%EC%A0%88%EB%8C%80-%EC%A7%81%EC%A0%91-merge%ED%95%98%EC%A7%80-%EB%A7%90%EC%95%84%EC%A3%BC%EC%84%B8%EC%9A%94",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:B}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"다만 주의하셔야 할 게, Merge를 누르시면 안 된다는 거에요."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"머지 안하기",src:"\u002Fhow-to-fork-and-pr\u002F09.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Create pull request를 누르시면 위와 같은 check가 돌아가며 Merge 버튼이 뜰텐데, 그냥 두시고 나와주시면 됩니다. 여러분이 하실 일은 여기서 끝! 나머지는 Reviewers로 지정된 저와 희민님이 conflict요소나 버그 유무를 확인하고 머지 혹은 코멘트하여 풀리퀘를 클로즈할 예정입니다."}]},{type:b,value:c},{type:a,tag:I,props:{id:C},children:[{type:a,tag:f,props:{href:"#%EC%B6%94%EA%B0%80-%EB%8B%B9%EB%B6%80-%EC%82%AC%ED%95%AD",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:D}]},{type:b,value:c},{type:a,tag:m,props:{id:E},children:[{type:a,tag:f,props:{href:"#%EC%9E%91%EC%97%85-%EB%B0%8F-pr-%EC%A0%84%EC%97%90-fetch-and-merge-pull-%EA%BC%AD-%ED%99%95%EC%9D%B8%ED%95%A9%EC%8B%9C%EB%8B%A4",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:F}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"다른 사람들과의 작업이 겹쳐서 Conflict가 발생하는 걸 막기 위해, 작업 및 PR 전 오리지널 레포의 커밋들을 받아오는 게 좋습니다."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"fetch and merge",src:"\u002Fhow-to-fork-and-pr\u002F10.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"포크된 레포와 오리지널 레포가 동일한 상태가 아닐 경우, 뒤쳐진 커밋들을 Fetch and Merge를 통해 모두 받아와주세요."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"업데이트 확인",src:"\u002Fhow-to-fork-and-pr\u002F11.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Fetch and Merge가 완료된 경우 포크된 레포 상태가 최신으로 업데이트 되었다고 나타납니다."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"pull로 받아오기",src:"\u002Fhow-to-fork-and-pr\u002F12.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"커밋을 받아온 건 온라인이니, 로컬로도 커밋들을 받아와야겠죠? 터미널에서 pull 명령어를 통해 해당 변화들을 받아와주세요. 이렇게 레포 상태를 맞춘 후 작업 및 PR을 진행하시면 보다 쾌적하게 작업하실 수 있습니다."}]},{type:b,value:c},{type:a,tag:m,props:{id:G},children:[{type:a,tag:f,props:{href:"#checks-failed%EB%8A%94-%EC%A0%95%EC%83%81%EC%A0%81%EC%9D%B4%EB%8B%88-%EC%8B%A0%EA%B2%BD%EC%93%B0%EC%A7%80-%EC%95%8A%EC%9C%BC%EC%85%94%EB%8F%84-%EB%90%A9%EB%8B%88%EB%8B%A4",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:H}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"checks failed",src:"\u002Fhow-to-fork-and-pr\u002F13.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Create Pull Request를 했는데 Checks Failed가 떠서 당황스러우실 수 있어요. 그런데 이는 로컬이 아닌 온라인에서 build 및 deploy시 필요한 토큰이 Organization 레포지토리에서만 발급이 되어서 그래요."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"yml 파일",src:"\u002Fhow-to-fork-and-pr\u002F14.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"즉 여러분의 PR Check는 여러분의 레포 브랜치에서 돌아가는데 해당 레포에서는 토큰이 발급되지 않기 때문에 Deploy Permission 버그가 발생하는 거죠."}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{alt:"actions 실행 로그",src:"\u002Fhow-to-fork-and-pr\u002F15.png"},children:[]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"실제로 Check Fail 유무와 상관없이 Merge 후엔 정상적으로 Build & Deploy되니 걱정마세요!"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fhow-to-fork-and-pr",extension:".md",createdAt:n,updatedAt:n},prev:{slug:"github-ipynb-loading",title:"깃헙에서 ipynb 파일 로딩이 안돼요."},next:{slug:"how-to-set-up-my-profile",title:"[공지] 프로필 작성 방법"},member:[{slug:"penielcho",name:o,description:"현업과 가까운 Developer Relations Expert로 성장하기를 희망합니다. DS, ML, DL 관련 공부를 했으며 현재는 프론트를 배워가는 중입니다.",role:"Core Member",img:"peniel.jpg",dir:"\u002Fmembers",path:"\u002Fmembers\u002Fpenielcho",extension:".yaml",createdAt:n,updatedAt:n}],authorName:o}],fetch:{},mutations:void 0}}("element","text","\n","p","img","a","true",-1,"span","icon","icon-link",3,"h3","2021-11-23T17:26:33.000Z","Peniel Cho","포크부터-풀리퀘까지의-과정",2,"포크부터 풀리퀘까지의 과정","1-레포지토리를-포크합니다","1. 레포지토리를 포크합니다.","2-포크한-레포지토리를-로컬에-클론합니다","2. 포크한 레포지토리를 로컬에 클론합니다.","3-로컬에서-작업-후-포크된-레포지토리에-커밋을-날립니다","3. 로컬에서 작업 후 포크된 레포지토리에 커밋을 날립니다.","4-포크된-레포지토리에서-오리지널-레포지토리로-풀리퀘를-날립니다","4. 포크된 레포지토리에서 오리지널 레포지토리로 풀리퀘를 날립니다.","5-절대-직접-merge하지-말아주세요","5. 절대! 직접 Merge하지 말아주세요.","추가-당부-사항","추가 당부 사항","작업-및-pr-전에-fetch-and-merge-pull-꼭-확인합시다","작업 및 PR 전에 Fetch and Merge, Pull 꼭 확인합시다!","checks-failed는-정상적이니-신경쓰지-않으셔도-됩니다","Checks Failed는 정상적이니 신경쓰지 않으셔도 됩니다!","h2","nofollow","noopener","noreferrer","_blank","풀리퀘 열기")));