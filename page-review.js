let d=[],o=[],c="https://app.revidflow.com";var s;let n=(s=document.querySelector("html[data-wf-site]"))==null?void 0:s.getAttribute("data-wf-site");async function f(){await fetch(`${c}/api/page_review?wf_id=${n}&products=${d.join(",")}`,{headers:{Accept:"application/json","Content-Type":"application/json"},cache:"default"}).then(a=>a.json()).then(a=>{a.success&&(o=a.reviews,o.forEach(t=>{$(`[revidflow-product='${t.slug}']`).find('[revidflow="star"]').text(t!=null&&t.reviews_avg_star?Math.round(t==null?void 0:t.reviews_avg_star):0),$(`[revidflow-product='${t.slug}']`).find('[revidflow="star-count"]').text(t!=null&&t.reviews_count?t==null?void 0:t.reviews_count:0)}))})}$(document).ready(function(){$("[revidflow='item']").each((a,t)=>{d.push($(t).find("a").attr("href").split("/")[2]),$(t).attr("revidflow-product",$(t).find("a").attr("href").split("/")[2])}),f()});
