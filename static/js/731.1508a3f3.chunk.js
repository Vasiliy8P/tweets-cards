"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[731],{845:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var r=t(433),f=t(439),a=t(791),c=t(689),s=t(87),o=t(984),i=t(861),l=t(757),u=t.n(l),P=t(243);P.Z.defaults.baseURL="https://640d0e31b07afc3b0da6e662.mockapi.io";var w=function(){var e=(0,i.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.Z.get("/tweets?page=".concat(n,"&limit=3"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,i.Z)(u().mark((function e(n,t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.Z.put("/tweets/".concat(n),{followers:t+1});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)(u().mark((function e(n,t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.Z.put("/tweets/".concat(n),{followers:t-1});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),A=t.p+"static/media/picture.6c52ceea786ad6626067.png",v=t.p+"static/media/ellipse.37cba8cb5464b5b7f587.png",b=t(184),d=function(e){var n=e.tweet,t=n.tweets,r=n.followers,f=n.id,a=n.avatar,c=e.followingTweetsId,s=e.onClickFollowing;return(0,b.jsxs)("div",{className:"TweetCard",children:[(0,b.jsx)("img",{className:"TweetCard__picture",src:A,alt:"background-img"}),(0,b.jsx)("img",{className:"TweetCard__logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAsCAYAAACZmXFCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR1SURBVHgB7Zw/TxtBEMXHUSiIFCNBJCigAAkihQIKipAiRep85jSRAkVSUJjCSKbABRQu7Eh24UhkHp6LDnt3b+9mFyMyP2llOO+N9m6f5t7+Obfu7++/klHQabVa16SA7+c2fxyT8cArMsocskA2yEiGCWyRIxbZGzKSYAJbBOI6YZG9JkONCcxNm8t7MtSYwPzschbbJUOFCSyMmX4lJrBqzPQrMIFVY6ZfgQksDjP9DTGBxWOmvwEmsHqY6a9JLl8x5XLHZSh/T7isclnhssZlnWbepmnsEZdb+bsAsd9xeauIHQNM/zmvWY7p6enQ7NrL4LpPIuvWBdbgkBSkFtiAS5dv/qCqomSCAy6xGQFiwkL0NcefeupcS+wd/tinPEIrTP8PbscfelpG8/c2MMIdxfRDCI5NWlIKrNZOBLn4M76IPZoJLdSWGy6XAWHNx0b9G459ILFTU5j+DhlBUnmwi6bbXPi8HoU7ChnxIlZcc7G7OJ/yYKY/ghQC60rGaISk+H3P130RSWMyi8xMfwXaR+QoJAARDww9jOhE6o9L3+P4R3J7JdQLxca5bYk9DfkNtFGEkEMMyzT9IXY84u/Ne0e5l65srPawWoE5H23SYOzq3HR81y2JEnV8F9H3dRrH2OKPI5qJqzg2pnDGw/FTSs8yTX+Ibc/xPpf5duI+5vCqKoGNA1nDKS7hQLYV3wXqgL7roIjLNSx/I7HJJTK0VUSYY2Rppt+DRmC3roMyRVAWDjp14qiKTikLdK3UnmHgkfOBwkBkA4/4IepcxnxXBFx7MPKS0Qhs4jm+Nff/VcwggDsHj6/CM/z21EHsmAwEkbsENqS8YFKyT8Y/NKNIn8BWSY8ve7UpjnXP8afwSJbBSmgy2AqlpSxYX7tiO2+qPL8p8H7PbTS5VDQZzCcC7foX8C5/UBw5s6uPnnbO7iWiEZivs+b91irmY0ol5jHnnK8S4x6TIe48x9coDxhRX5KxgEZgO66DIoLyshHmV05LZY+qWQnMkF9QmF5gUBGaFmkKBH9OhhONwLwi4A7GfJDLj8ADxa7whwT83RO768skMn2SYw7s1zOcxX82aGfykZ3OXF8Ua4AlEWIEN66xaL3N5yIbjRyxMd3wjb/HIw+P6oc9YhWx9yk9XWmL4UG72L0hW2K8IONIGTbYEXEcetlCYt5KfG9saWPq7GWmPoIUuykOtNtWJMu5/BEGBJ80b/Rk2hNmpj6SVPvBsG3lsK4QsCiO82hm/n3zahDZ57rvJpZiJxcXmamPJuWOVmSxTe7UK/4chIyvZCws+2DRO2bCFuL6wudhGaZbEbvYerJL6SeDwTJNfduxjbnu3B5irCpjRNPK+AN0GO0VL2gAiASChri0HT8qxR9LPMRvU549XwWV28LtB+gek/Nt5aKjtyg9bYpfl0xFr6X89cP/EXsvMo6RmfpmmMCqwSP4JxmNMIFVYzP1CkxgYTo2U6/DBObHTH0CTGBuzNQnwgS2iJn6hJjAFjFTnxAT2GPM1CfmL+yVuehCxcKmAAAAAElFTkSuQmCC",alt:"logo"}),(0,b.jsx)("img",{className:"TweetCard__rectangle",src:"data:image/png;base64,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",alt:"rectangle"}),(0,b.jsx)("img",{className:"TweetCard__user-photo",src:a,alt:"user"}),(0,b.jsx)("img",{className:"TweetCard__ellipse",src:v,alt:"ellipse"}),(0,b.jsxs)("p",{className:"TweetCard__tweets-counter",children:[" ",t," tweets"]}),(0,b.jsxs)("p",{className:"TweetCard__followers-counter",children:[" ",r," followers"]}),(0,b.jsx)("button",{className:c.includes(f)?"TweetCard__btn-following":"TweetCard__btn-follow",type:"button",onClick:function(){return s(f,r)},children:c.includes(f)?"following":"Follow"})]})},j=t(643),p=function(){return(0,b.jsx)(j.g4,{height:"80",width:"80",radius:"9",color:"#4B2A99",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},visible:!0})},H=function(){var e,n,t=(0,a.useState)([]),i=(0,f.Z)(t,2),l=i[0],u=i[1],P=(0,a.useState)(1),A=(0,f.Z)(P,2),v=A[0],j=A[1],H=(0,a.useState)(function(){var e=localStorage.getItem("followingTweets");return null!==e?JSON.parse(e):[]}()),O=(0,f.Z)(H,2),T=O[0],h=O[1],y=(0,a.useState)(null),N=(0,f.Z)(y,2),k=N[0],X=N[1],g=null!==(e=null===(n=(0,c.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";(0,a.useEffect)((function(){X(!0),w(v).then((function(e){u((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(e))})),X(!1)})).catch((function(e){return console.log(e.message)}))}),[v]),(0,a.useEffect)((function(){localStorage.setItem("followingTweets",JSON.stringify(T))}),[T]);var C=function(e,n){if(!T.includes(e))return h((function(n){return[].concat((0,r.Z)(n),[e])})),void function(e,n){x(e,n).then((function(e){u((function(n){return n.map((function(n){return n.id===e.id&&(n.followers=e.followers),n}))}))})).catch((function(e){return console.log(e.message)}))}(e,n);h((function(n){return(0,r.Z)(n.filter((function(n){return n!==e})))})),function(e,n){m(e,n).then((function(e){u((function(n){return n.map((function(n){return n.id===e.id&&(n.followers=e.followers),n}))}))})).catch((function(e){return console.log(e.message)}))}(e,n)};return(0,b.jsxs)(b.Fragment,{children:["  ",(0,b.jsx)(s.rU,{to:g,className:"Tweets-list__btn-back-link",children:(0,b.jsx)("button",{className:"Tweets-list__btn-back",type:"button",children:"Back"})}),(0,b.jsx)("ul",{className:"Tweets-list",children:l.map((function(e){return(0,b.jsx)("li",{className:"Tweets-list__item",children:(0,b.jsx)(d,{tweet:e,onClickFollowing:C,followingTweetsId:T})},(0,o.x0)())}))}),k&&(0,b.jsx)(p,{}),l.length>0&&!k&&(0,b.jsx)("button",{className:"Tweets-list__btn-LoadMore",type:"button",onClick:function(){j((function(e){return e+1}))},children:"Load more"})]})}}}]);
//# sourceMappingURL=731.1508a3f3.chunk.js.map