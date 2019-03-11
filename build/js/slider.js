"use strict";(()=>{document.querySelector(".slider"),document.querySelector(".slider__scene");const e=document.getElementById("timeline");!function(i){i.forEach(i=>{const t=function(e){const i=document.createElement("div"),t=document.createElement("div"),n=document.createElement("p"),o=document.createElement("div"),a=document.createElement("p"),s=document.createElement("ul"),l=document.createElement("div"),d=document.createElement("div");return i.classList.add("timeline__content"),d.classList.add("timeline__person-block"),t.classList.add("timeline__header"),n.classList.add("title","title--h4","title--line"),o.classList.add("timeline__person-content"),l.classList.add("timeline__initials"),s.classList.add("list","list--vertical","timeline__list"),l.innerText=e.name.split(" ").map(e=>e[0]).join(""),l.style.backgroundColor=e.favouriteColor,n.innerText=e.name,a.innerText=e.about,e.responsibilities.forEach(e=>{const i=document.createElement("li");i.classList.add("list__item"),i.innerHTML=`<svg class="list__marker" width="15" height="15"><use xlink:href="img/svg/sprite.svg#right-arrow"></use></svg> ${e}`,s.appendChild(i)}),t.appendChild(n),i.appendChild(t),o.appendChild(a),o.appendChild(s),i.appendChild(o),d.appendChild(l),d.appendChild(i),d}(i);e.appendChild(t)})}([{id:1,name:"Andrius Vaitkus",about:"Experimental Physics student, UCL.",favouriteColor:"#B5DB40",responsibilities:["Research of application of origami in Mathematics and Engineering",'Development of the "Angle Trisection" simulation',"Participation in the initial folding tests","Report formatting","Minute taking in most meetings"]},{id:2,name:"Aishvarya Raj",about:"Theoretical Physics Student , UCL.",favouriteColor:"#9B67B2",responsibilities:["Main editor of the report","Research on Architecture and Computer Science","Development of “Doubling the Cube” simulation ","Participation in later folding tests"]},{id:3,name:"Gurprit Kaur",about:"Experimental Physics Student, UCL.",responsibilities:["Research of application of origami in cosmology","Part of research subgroup","Participation in folding tests for light-dependent self-folding","Co-editor of Project Report"]},{id:4,name:"Jennifer Jung",favouriteColor:"#F9C7D2",about:"Experimental Physics Student, UCL.",responsibilities:["Communications Officer","Research on science of folding in Genetics, DNA and Light Dependent Folding","Part of research subgroup","Participation in light dependent folding tests"]},{id:5,name:"Daniel Sanz",about:"Affiliate Physics Student at UCL, from Spain.",favouriteColor:"rgba(207, 0, 15, 1)",responsibilities:["Research on Mathematics","Understanding the Mathematica folding code","Proving the math code formula",'Development of "Folding the Cube" and "Biggest Equilateral Triangle in a Square" simulations',"Participation in folding tests"]},{id:6,name:"Haokai Jin",about:"Experimental Physics Student, UCL.",responsibilities:["Research on Engineering, genetics, DNA and Self Folding Cube","Part of research subgroup","Participation in Heat self folding cube and light dependent folding test"]},{id:7,name:"Qingyue Hu",about:"Experimental Physics Student, UCL.",favouriteColor:"#ffffff",responsibilities:["Part of research subgroup","Research on Biological and Medical Science applications of origami","Participation in heat dependent self-folding","Understanding equations of self-folding"]},{id:8,name:"Kourosh Khodabakhsh",about:"Experimental Physics Student, UCL.",responsibilities:["Research into applications of origami in Cosmology, Engineering, Genetics and Self Folding Cube","Participation in self folding test","Material gathering for self folding tests and organising lab space","Chairman (for the most part)","Dealing with Andrius"]}]);const i=document.querySelectorAll(".timeline__person-block");i.forEach(e=>{const i=window.pageYOffset+e.getBoundingClientRect().top,t=(window.pageXOffset,e.getBoundingClientRect().left,window.pageXOffset,e.getBoundingClientRect().right,window.pageYOffset+e.getBoundingClientRect().bottom),n=window.pageYOffset,o=(window.pageXOffset,window.pageXOffset,document.documentElement.clientWidth,window.pageYOffset+document.documentElement.clientHeight);t>n&&i+e.clientHeight>o&&e.classList.add("is-hidden")}),window.addEventListener("scroll",()=>{i.forEach(e=>{!function(e){const i={top:window.pageYOffset+e.getBoundingClientRect().top,left:window.pageXOffset+e.getBoundingClientRect().left,right:window.pageXOffset+e.getBoundingClientRect().right,bottom:window.pageYOffset+e.getBoundingClientRect().bottom},t={top:window.pageYOffset,left:window.pageXOffset,right:window.pageXOffset+document.documentElement.clientWidth,bottom:window.pageYOffset+document.documentElement.clientHeight};i.bottom>t.top&&i.top+.5*e.clientHeight<t.bottom&&e.classList.contains("is-hidden")&&(e.classList.remove("is-hidden"),e.querySelector(".timeline__content").classList.remove("is-hidden"),e.querySelector(".timeline__initials").classList.remove("is-hidden"),e.querySelector(".timeline__content").classList.add("bounce-in"),e.querySelector(".timeline__initials").classList.add("bounce-in"))}(e)})})})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lbGluZUNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiY29sbGVjdGlvbiIsImZvckVhY2giLCJpdGVtIiwicGVyc29uQmxvY2siLCJwZXJzb24iLCJibG9jayIsImNyZWF0ZUVsZW1lbnQiLCJibG9ja0hlYWRlciIsImJsb2NrVGl0bGUiLCJibG9ja0NvbnRlbnQiLCJwZXJzb25BYm91dCIsInJlc3BvbnNpYmlsaXRpZXNMaXN0IiwicGVyc29uSW5pdGlhbHMiLCJjb250ZW50V3JhcHBlciIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsIm5hbWUiLCJzcGxpdCIsIm1hcCIsIm4iLCJqb2luIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYXZvdXJpdGVDb2xvciIsImFib3V0IiwicmVzcG9uc2liaWxpdGllcyIsInJlc3BvbnNpYmlsaXR5IiwibGlzdEl0ZW0iLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVBlcnNvbkJsb2NrIiwicmVuZGVyUGVyc29ucyIsImlkIiwidGltZWxpbmVCbG9ja3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFyZ2V0UG9zaXRpb24iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VYT2Zmc2V0IiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwid2luZG93UG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjb250YWlucyIsInJlbW92ZSIsInNob3dQZXJzb25CbG9jayJdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQSxNQUNpQkEsU0FBU0MsY0FBYyxXQUNsQkQsU0FBU0MsY0FBYyxrQkFEM0MsTUEyR01DLEVBQW9CRixTQUFTRyxlQUFlLGFBcURsRCxT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LENBQWdCaEQsUUFwTXRCIiwiZmlsZSI6InNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKCgpID0+IHtcbiAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcicpO1xuICBjb25zdCBzbGlkZXJTY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3NjZW5lJyk7XG4gIGNvbnN0IHNsaWRlckRhdGEgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnQW5kcml1cyBWYWl0a3VzJyxcbiAgICAgIGFib3V0OiAnRXhwZXJpbWVudGFsIFBoeXNpY3Mgc3R1ZGVudCwgVUNMLicsXG4gICAgICBmYXZvdXJpdGVDb2xvcjogJyNCNURCNDAnLFxuICAgICAgcmVzcG9uc2liaWxpdGllczogW1xuICAgICAgICAnUmVzZWFyY2ggb2YgYXBwbGljYXRpb24gb2Ygb3JpZ2FtaSBpbiBNYXRoZW1hdGljcyBhbmQgRW5naW5lZXJpbmcnLFxuICAgICAgICAnRGV2ZWxvcG1lbnQgb2YgdGhlIFwiQW5nbGUgVHJpc2VjdGlvblwiIHNpbXVsYXRpb24nLFxuICAgICAgICAnUGFydGljaXBhdGlvbiBpbiB0aGUgaW5pdGlhbCBmb2xkaW5nIHRlc3RzJyxcbiAgICAgICAgJ1JlcG9ydCBmb3JtYXR0aW5nJyxcbiAgICAgICAgJ01pbnV0ZSB0YWtpbmcgaW4gbW9zdCBtZWV0aW5ncydcbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiAnQWlzaHZhcnlhIFJhaicsXG4gICAgICBhYm91dDogJ1RoZW9yZXRpY2FsIFBoeXNpY3MgU3R1ZGVudCAsIFVDTC4nLFxuICAgICAgZmF2b3VyaXRlQ29sb3I6ICcjOUI2N0IyJyxcbiAgICAgIHJlc3BvbnNpYmlsaXRpZXM6IFtcbiAgICAgICAgJ01haW4gZWRpdG9yIG9mIHRoZSByZXBvcnQnLFxuICAgICAgICAnUmVzZWFyY2ggb24gQXJjaGl0ZWN0dXJlIGFuZCBDb21wdXRlciBTY2llbmNlJyxcbiAgICAgICAgJ0RldmVsb3BtZW50IG9mIOKAnERvdWJsaW5nIHRoZSBDdWJl4oCdIHNpbXVsYXRpb24gJyxcbiAgICAgICAgJ1BhcnRpY2lwYXRpb24gaW4gbGF0ZXIgZm9sZGluZyB0ZXN0cycsXG4gICAgICBdXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgbmFtZTogJ0d1cnByaXQgS2F1cicsXG4gICAgICBhYm91dDogJ0V4cGVyaW1lbnRhbCBQaHlzaWNzIFN0dWRlbnQsIFVDTC4nLFxuICAgICAgcmVzcG9uc2liaWxpdGllczogW1xuICAgICAgICAnUmVzZWFyY2ggb2YgYXBwbGljYXRpb24gb2Ygb3JpZ2FtaSBpbiBjb3Ntb2xvZ3knLFxuICAgICAgICAnUGFydCBvZiByZXNlYXJjaCBzdWJncm91cCcsXG4gICAgICAgICdQYXJ0aWNpcGF0aW9uIGluIGZvbGRpbmcgdGVzdHMgZm9yIGxpZ2h0LWRlcGVuZGVudCBzZWxmLWZvbGRpbmcnLFxuICAgICAgICAnQ28tZWRpdG9yIG9mIFByb2plY3QgUmVwb3J0JyxcbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBuYW1lOiAnSmVubmlmZXIgSnVuZycsXG4gICAgICBmYXZvdXJpdGVDb2xvcjogJyNGOUM3RDInLFxuICAgICAgYWJvdXQ6ICdFeHBlcmltZW50YWwgUGh5c2ljcyBTdHVkZW50LCBVQ0wuJyxcbiAgICAgIHJlc3BvbnNpYmlsaXRpZXM6IFtcbiAgICAgICAgJ0NvbW11bmljYXRpb25zIE9mZmljZXInLFxuICAgICAgICAnUmVzZWFyY2ggb24gc2NpZW5jZSBvZiBmb2xkaW5nIGluIEdlbmV0aWNzLCBETkEgYW5kIExpZ2h0IERlcGVuZGVudCBGb2xkaW5nJyxcbiAgICAgICAgJ1BhcnQgb2YgcmVzZWFyY2ggc3ViZ3JvdXAnLFxuICAgICAgICAnUGFydGljaXBhdGlvbiBpbiBsaWdodCBkZXBlbmRlbnQgZm9sZGluZyB0ZXN0cycsXG4gICAgICBdXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgbmFtZTogJ0RhbmllbCBTYW56JyxcbiAgICAgIGFib3V0OiAnQWZmaWxpYXRlIFBoeXNpY3MgU3R1ZGVudCBhdCBVQ0wsIGZyb20gU3BhaW4uJyxcbiAgICAgIGZhdm91cml0ZUNvbG9yOiAncmdiYSgyMDcsIDAsIDE1LCAxKScsXG4gICAgICByZXNwb25zaWJpbGl0aWVzOiBbXG4gICAgICAgICdSZXNlYXJjaCBvbiBNYXRoZW1hdGljcycsXG4gICAgICAgICdVbmRlcnN0YW5kaW5nIHRoZSBNYXRoZW1hdGljYSBmb2xkaW5nIGNvZGUnLFxuICAgICAgICAnUHJvdmluZyB0aGUgbWF0aCBjb2RlIGZvcm11bGEnLFxuICAgICAgICAnRGV2ZWxvcG1lbnQgb2YgXCJGb2xkaW5nIHRoZSBDdWJlXCIgYW5kIFwiQmlnZ2VzdCBFcXVpbGF0ZXJhbCBUcmlhbmdsZSBpbiBhIFNxdWFyZVwiIHNpbXVsYXRpb25zJyxcbiAgICAgICAgJ1BhcnRpY2lwYXRpb24gaW4gZm9sZGluZyB0ZXN0cydcbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDYsXG4gICAgICBuYW1lOiAnSGFva2FpIEppbicsXG4gICAgICBhYm91dDogJ0V4cGVyaW1lbnRhbCBQaHlzaWNzIFN0dWRlbnQsIFVDTC4nLFxuICAgICAgcmVzcG9uc2liaWxpdGllczogW1xuICAgICAgICAnUmVzZWFyY2ggb24gRW5naW5lZXJpbmcsIGdlbmV0aWNzLCBETkEgYW5kIFNlbGYgRm9sZGluZyBDdWJlJyxcbiAgICAgICAgJ1BhcnQgb2YgcmVzZWFyY2ggc3ViZ3JvdXAnLFxuICAgICAgICAnUGFydGljaXBhdGlvbiBpbiBIZWF0IHNlbGYgZm9sZGluZyBjdWJlIGFuZCBsaWdodCBkZXBlbmRlbnQgZm9sZGluZyB0ZXN0JyxcbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBuYW1lOiAnUWluZ3l1ZSBIdScsXG4gICAgICBhYm91dDogJ0V4cGVyaW1lbnRhbCBQaHlzaWNzIFN0dWRlbnQsIFVDTC4nLFxuICAgICAgZmF2b3VyaXRlQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIHJlc3BvbnNpYmlsaXRpZXM6IFtcbiAgICAgICAgJ1BhcnQgb2YgcmVzZWFyY2ggc3ViZ3JvdXAnLFxuICAgICAgICAnUmVzZWFyY2ggb24gQmlvbG9naWNhbCBhbmQgTWVkaWNhbCBTY2llbmNlIGFwcGxpY2F0aW9ucyBvZiBvcmlnYW1pJyxcbiAgICAgICAgJ1BhcnRpY2lwYXRpb24gaW4gaGVhdCBkZXBlbmRlbnQgc2VsZi1mb2xkaW5nJyxcbiAgICAgICAgJ1VuZGVyc3RhbmRpbmcgZXF1YXRpb25zIG9mIHNlbGYtZm9sZGluZydcbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDgsXG4gICAgICBuYW1lOiAnS291cm9zaCBLaG9kYWJha2hzaCcsXG4gICAgICBhYm91dDogJ0V4cGVyaW1lbnRhbCBQaHlzaWNzIFN0dWRlbnQsIFVDTC4nLFxuICAgICAgcmVzcG9uc2liaWxpdGllczogW1xuICAgICAgICAnUmVzZWFyY2ggaW50byBhcHBsaWNhdGlvbnMgb2Ygb3JpZ2FtaSBpbiBDb3Ntb2xvZ3ksIEVuZ2luZWVyaW5nLCBHZW5ldGljcyBhbmQgU2VsZiBGb2xkaW5nIEN1YmUnLFxuICAgICAgICAnUGFydGljaXBhdGlvbiBpbiBzZWxmIGZvbGRpbmcgdGVzdCcsXG4gICAgICAgICdNYXRlcmlhbCBnYXRoZXJpbmcgZm9yIHNlbGYgZm9sZGluZyB0ZXN0cyBhbmQgb3JnYW5pc2luZyBsYWIgc3BhY2UnLFxuICAgICAgICAnQ2hhaXJtYW4gKGZvciB0aGUgbW9zdCBwYXJ0KScsXG4gICAgICAgICdEZWFsaW5nIHdpdGggQW5kcml1cydcbiAgICAgIF1cbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHRpbWVsaW5lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJyk7XG5cbiAgZnVuY3Rpb24gZ2V0SW5pdGlhbHMoZnVsbE5hbWUpIHtcbiAgICByZXR1cm4gZnVsbE5hbWUuc3BsaXQoJyAnKS5tYXAoKG4pID0+IG5bMF0pLmpvaW4oJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGVyc29uQmxvY2socGVyc29uKSB7XG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBibG9ja0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJsb2NrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYmxvY2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGVyc29uQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcmVzcG9uc2liaWxpdGllc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHBlcnNvbkluaXRpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaXN0UG9pbnRJY29uID0gYDxzdmcgY2xhc3M9XCJsaXN0X19tYXJrZXJcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTVcIj48dXNlIHhsaW5rOmhyZWY9XCJpbWcvc3ZnL3Nwcml0ZS5zdmcjcmlnaHQtYXJyb3dcIj48L3VzZT48L3N2Zz5gO1xuXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZCgndGltZWxpbmVfX2NvbnRlbnQnKTtcbiAgICBjb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0aW1lbGluZV9fcGVyc29uLWJsb2NrJyk7XG4gICAgYmxvY2tIZWFkZXIuY2xhc3NMaXN0LmFkZCgndGltZWxpbmVfX2hlYWRlcicpO1xuICAgIGJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnLCAndGl0bGUtLWg0JywgJ3RpdGxlLS1saW5lJyk7XG4gICAgYmxvY2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RpbWVsaW5lX19wZXJzb24tY29udGVudCcpO1xuICAgIHBlcnNvbkluaXRpYWxzLmNsYXNzTGlzdC5hZGQoJ3RpbWVsaW5lX19pbml0aWFscycpO1xuICAgIHJlc3BvbnNpYmlsaXRpZXNMaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnLCAnbGlzdC0tdmVydGljYWwnLCAndGltZWxpbmVfX2xpc3QnKTtcblxuXG4gICAgcGVyc29uSW5pdGlhbHMuaW5uZXJUZXh0ID0gZ2V0SW5pdGlhbHMocGVyc29uLm5hbWUpO1xuICAgIHBlcnNvbkluaXRpYWxzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBlcnNvbi5mYXZvdXJpdGVDb2xvcjtcblxuICAgIGJsb2NrVGl0bGUuaW5uZXJUZXh0ID0gcGVyc29uLm5hbWU7XG4gICAgcGVyc29uQWJvdXQuaW5uZXJUZXh0ID0gcGVyc29uLmFib3V0O1xuXG4gICAgcGVyc29uLnJlc3BvbnNpYmlsaXRpZXMuZm9yRWFjaChyZXNwb25zaWJpbGl0eSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpc3RfX2l0ZW0nKTtcbiAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGAke2xpc3RQb2ludEljb259ICR7cmVzcG9uc2liaWxpdHl9YDtcblxuICAgICAgcmVzcG9uc2liaWxpdGllc0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgYmxvY2tIZWFkZXIuYXBwZW5kQ2hpbGQoYmxvY2tUaXRsZSk7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoYmxvY2tIZWFkZXIpO1xuICAgIGJsb2NrQ29udGVudC5hcHBlbmRDaGlsZChwZXJzb25BYm91dCk7XG4gICAgYmxvY2tDb250ZW50LmFwcGVuZENoaWxkKHJlc3BvbnNpYmlsaXRpZXNMaXN0KTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChibG9ja0NvbnRlbnQpO1xuXG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQocGVyc29uSW5pdGlhbHMpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGJsb2NrKTtcblxuICAgIHJldHVybiBjb250ZW50V3JhcHBlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBlcnNvbnMoY29sbGVjdGlvbikge1xuICAgIGNvbGxlY3Rpb24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHBlcnNvbkJsb2NrID0gY3JlYXRlUGVyc29uQmxvY2soaXRlbSk7XG5cbiAgICAgIHRpbWVsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBlcnNvbkJsb2NrKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclBlcnNvbnMoc2xpZGVyRGF0YSk7XG5cbiAgY29uc3QgdGltZWxpbmVCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGltZWxpbmVfX3BlcnNvbi1ibG9jaycpO1xuXG4gIHRpbWVsaW5lQmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0ge1xuICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQgKyBibG9jay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgKyBibG9jay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgcmlnaHQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIGJsb2NrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0LFxuICAgICAgYm90dG9tOiB3aW5kb3cucGFnZVlPZmZzZXQgKyBibG9jay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b21cbiAgICB9O1xuXG4gICAgY29uc3Qgd2luZG93UG9zaXRpb24gPSB7XG4gICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgIHJpZ2h0OiB3aW5kb3cucGFnZVhPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICBib3R0b206IHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB9O1xuXG4gICAgaWYgKHRhcmdldFBvc2l0aW9uLmJvdHRvbSA+IHdpbmRvd1Bvc2l0aW9uLnRvcCAmJlxuICAgICAgICB0YXJnZXRQb3NpdGlvbi50b3AgKyBibG9jay5jbGllbnRIZWlnaHQgPiB3aW5kb3dQb3NpdGlvbi5ib3R0b20pIHtcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICB0aW1lbGluZUJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgIHNob3dQZXJzb25CbG9jayhibG9jayk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNob3dQZXJzb25CbG9jayh0YXJnZXQpIHtcbiAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHtcbiAgICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0ICsgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgcmlnaHQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCxcbiAgICAgIGJvdHRvbTogd2luZG93LnBhZ2VZT2Zmc2V0ICsgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbVxuICAgIH07XG5cbiAgICBjb25zdCB3aW5kb3dQb3NpdGlvbiA9IHtcbiAgICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgcmlnaHQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgIGJvdHRvbTogd2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIH07XG5cbiAgICBpZiAodGFyZ2V0UG9zaXRpb24uYm90dG9tID4gd2luZG93UG9zaXRpb24udG9wICYmXG4gICAgICAodGFyZ2V0UG9zaXRpb24udG9wICsgdGFyZ2V0LmNsaWVudEhlaWdodCAqIDAuNSkgPCB3aW5kb3dQb3NpdGlvbi5ib3R0b20gJiZcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWhpZGRlbicpKSB7XG5cbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcblxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZV9fY29udGVudCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZV9faW5pdGlhbHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcblxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZV9fY29udGVudCcpLmNsYXNzTGlzdC5hZGQoJ2JvdW5jZS1pbicpO1xuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZV9faW5pdGlhbHMnKS5jbGFzc0xpc3QuYWRkKCdib3VuY2UtaW4nKTtcbiAgICB9XG4gIH1cblxufSkoKTsiXX0=
