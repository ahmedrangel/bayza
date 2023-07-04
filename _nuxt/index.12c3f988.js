import{_ as p}from"./nuxt-link.880e3553.js";import{t as _,r as g,d as u}from"./helpers.6e40be27.js";import{S as o}from"./site-info.82411438.js";import{c as r,a as t,F as h,r as y,u as f,o as l,b as w,w as $,t as i,f as m}from"./entry.d16a8d42.js";const v={id:"releases",class:"bg-darkest"},b={class:"container text-secondary text-center py-5"},T=t("h3",{class:"mt-5 text-uppercase text-white"},"All Releases",-1),x={class:"row my-4 text-start"},F={class:"item"},D={class:"cover"},R={class:"overflow-hidden"},k=["src","alt"],B={class:"mb-0",style:{"font-size":"1.25rem"}},E={class:"mb-0 mt-2"},N={class:"mb-0"},S={class:"mb-4"},j={name:"AllTracksPage",computed:{allTracks(){return _.sort((a,s)=>new Date(s.date)-new Date(a.date))}},created(){const a=`${o.url}/releases`,s=`${o.url}/${o.cover}`,c=`${o.url}/${o.logo}`,n=`${o.name} Releases`,e="Releases";f({title:`Releases | ${o.name}`,meta:[{name:"keywords",content:"releases, singles, stream, music, dance, EDM"},{name:"description",content:e},{property:"og:url",content:a},{property:"og:type",content:"website"},{property:"og:title",content:n},{property:"og:site_name",content:o.name},{property:"og:image",content:s},{property:"og:image:width",content:"300"},{property:"og:image:height",content:"300"},{property:"og:image:alt",content:n},{property:"og:description",content:e},{name:"twitter:card",content:"summary"},{name:"twitter:image",content:c},{name:"twitter:title",content:n},{name:"twitter:description",content:e},{name:"twitter:site",content:`@${o.twitter}`}],link:[{rel:"canonical",href:a}]})}},C=Object.assign(j,{setup(a){return(s,c)=>{const n=p;return l(),r("section",v,[t("div",b,[T,t("div",x,[(l(!0),r(h,null,y(s.allTracks,(e,d)=>(l(),r("div",{key:d,class:"col-6 col-lg-3","data-aos":"fade-in","data-aos-duration":"500","data-aos-easing":"ease-in-sine"},[t("div",F,[t("div",D,[w(n,{to:`/releases/${e.year}${("releaseType"in s?s.releaseType:m(g))(e.link)}/${e.release}`},{default:$(()=>[t("div",R,[t("img",{id:"covers",class:"img-fx img-fluid release-color-covers scale-on-hover",src:`/images/releases/${e.year}/${e.cover}.jpg`,alt:`${e.artists} - ${e.title}`},null,8,k)]),t("h5",B,[t("small",null,[t("p",E,i(e.title),1)])])]),_:2},1032,["to"]),t("small",null,[t("p",N,i(e.artists),1)]),t("small",null,[t("p",S,i(("dateFormat"in s?s.dateFormat:m(u))(e.date)),1)])])])]))),128))])])])}}});export{C as default};
