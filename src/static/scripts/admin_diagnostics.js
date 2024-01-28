"use strict";var dnsCheck=!1,timeCheck=!1,ntpTimeCheck=!1,domainCheck=!1,httpsCheck=!1;const d=new Date,year=d.getUTCFullYear(),month=String(d.getUTCMonth()+1).padStart(2,"0"),day=String(d.getUTCDate()).padStart(2,"0"),hour=String(d.getUTCHours()).padStart(2,"0"),minute=String(d.getUTCMinutes()).padStart(2,"0"),seconds=String(d.getUTCSeconds()).padStart(2,"0"),browserUTC=`${year}-${month}-${day} ${hour}:${minute}:${seconds} UTC`,isValidIp=e=>!!/^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/.test(e);function checkVersions(e,t,n,s=null){if("-"!==t&&"-"!==n)if(null===s||-1===t.indexOf("-"))t!==n?document.getElementById(`${e}-warning`).classList.remove("d-none"):document.getElementById(`${e}-success`).classList.remove("d-none");else{const o=/(?:\s)\((.*?)\)/;null!==t.match(o)&&document.getElementById(`${e}-branch`).classList.remove("d-none");const r=/(\d+\.\d+\.\d+)-(\w+)/,i=t.match(r);if(null!==i&&i[2]===s)return void document.getElementById(`${e}-success`).classList.remove("d-none");t===n?document.getElementById(`${e}-success`).classList.remove("d-none"):document.getElementById(`${e}-warning`).classList.remove("d-none")}else document.getElementById(`${e}-failed`).classList.remove("d-none")}async function generateSupportString(e,t){e.preventDefault(),e.stopPropagation();let n="### Your environment (Generated via diagnostics page)\n";n+=`* Vaultwarden version: v${t.current_release}\n`,n+=`* Web-vault version: v${t.web_vault_version}\n`,n+=`* OS/Arch: ${t.host_os}/${t.host_arch}\n`,n+=`* Running within Docker: ${t.running_within_docker} (Base: ${t.docker_base_image})\n`,n+="* Environment settings overridden: ",""!=t.overrides?n+="true\n":n+="false\n",n+=`* Uses a reverse proxy: ${t.ip_header_exists}\n`,t.ip_header_exists&&(n+=`* IP Header check: ${t.ip_header_match} (${t.ip_header_name})\n`),n+=`* Internet access: ${t.has_http_access}\n`,n+=`* Internet access via a proxy: ${t.uses_proxy}\n`,n+=`* DNS Check: ${dnsCheck}\n`,n+=`* Browser/Server Time Check: ${timeCheck}\n`,n+=`* Server/NTP Time Check: ${ntpTimeCheck}\n`,n+=`* Domain Configuration Check: ${domainCheck}\n`,n+=`* HTTPS Check: ${httpsCheck}\n`,n+=`* Database type: ${t.db_type}\n`,n+=`* Database version: ${t.db_version}\n`,n+="* Clients used: \n",n+="* Reverse proxy and version: \n",n+="* Other relevant information: \n";const s=await fetch(`${BASE_URL}/admin/diagnostics/config`,{headers:{Accept:"application/json"}});if(!s.ok)throw alert("Generation failed: "+s.statusText),new Error(s);const o=await s.json();n+="\n### Config (Generated via diagnostics page)\n<details><summary>Show Running Config</summary>\n",n+=`\n**Environment settings which are overridden:** ${t.overrides}\n`,n+="\n\n```json\n"+JSON.stringify(o,void 0,2)+"\n```\n</details>\n",document.getElementById("support-string").innerText=n,document.getElementById("support-string").classList.remove("d-none"),document.getElementById("copy-support").classList.remove("d-none")}function copyToClipboard(e){e.preventDefault(),e.stopPropagation();const t=document.getElementById("support-string").innerText,n=document.createElement("textarea");n.setAttribute("id","copy-support-string"),n.setAttribute("readonly",""),n.value=t,n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove(),new bootstrap.Toast("#toastClipboardCopy").show()}function checkTimeDrift(e,t,n){const s=(Date.parse(e.replace(" ","T").replace(" UTC",""))-Date.parse(t.replace(" ","T").replace(" UTC","")))/1e3;return s>15||s<-15?(document.getElementById(`${n}-warning`).classList.remove("d-none"),!1):(document.getElementById(`${n}-success`).classList.remove("d-none"),!0)}function checkDomain(e,t){t==e?(document.getElementById("domain-success").classList.remove("d-none"),domainCheck=!0):document.getElementById("domain-warning").classList.remove("d-none"),t.startsWith("https://")?(document.getElementById("https-success").classList.remove("d-none"),httpsCheck=!0):document.getElementById("https-warning").classList.remove("d-none")}function initVersionCheck(e){const t=e.current_release,n=e.latest_release,s=e.latest_commit;if(-1!==t.indexOf("-")&&"-"!==n&&"-"!==s&&document.getElementById("server-latest-commit").classList.remove("d-none"),checkVersions("server",t,n,s),!e.running_within_docker){checkVersions("web",e.web_vault_version,e.latest_web_build)}}function checkDns(e){isValidIp(e)?(document.getElementById("dns-success").classList.remove("d-none"),dnsCheck=!0):document.getElementById("dns-warning").classList.remove("d-none")}function init(e){document.getElementById("time-browser-string").innerText=browserUTC,-1!==e.ntp_time.indexOf("UTC")?(timeCheck=checkTimeDrift(e.server_time,browserUTC,"time"),checkTimeDrift(e.ntp_time,browserUTC,"ntp-browser"),ntpTimeCheck=checkTimeDrift(e.ntp_time,e.server_time,"ntp-server")):(timeCheck=checkTimeDrift(e.server_time,browserUTC,"time"),ntpTimeCheck="n/a");const t=location.href.toLowerCase();document.getElementById("domain-browser-string").innerText=t,checkDomain(t,e.admin_url.toLowerCase()),initVersionCheck(e),checkDns(e.dns_resolved)}document.addEventListener("DOMContentLoaded",(e=>{const t=JSON.parse(document.getElementById("diagnostics_json").innerText);init(t);const n=document.getElementById("gen-support");n&&n.addEventListener("click",(()=>{generateSupportString(e,t)}));const s=document.getElementById("copy-support");s&&s.addEventListener("click",copyToClipboard)}));