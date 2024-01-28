"use strict";function deleteOrganization(e){e.preventDefault(),e.stopPropagation();const t=e.target.dataset.vwOrgUuid,n=e.target.dataset.vwOrgName,a=e.target.dataset.vwBillingEmail;if(!t)return alert("Required parameters not found!"),!1;if(1==confirm(`WARNING: All data of this organization (${n}) will be lost!\nMake sure you have a backup, this cannot be undone!`)){const e=prompt(`To delete the organization "${n} (${a})", please type the organization uuid below.`);null!=e&&(e==t?_post(`${BASE_URL}/admin/organizations/${t}/delete`,"Organization deleted correctly","Error deleting organization"):alert("Wrong organization uuid, please try again"))}}function initActions(){document.querySelectorAll("button[vw-delete-organization]").forEach((e=>{e.addEventListener("click",deleteOrganization)})),jdenticon&&jdenticon()}document.addEventListener("DOMContentLoaded",(()=>{jQuery("#orgs-table").DataTable({drawCallback:function(){initActions()},stateSave:!0,responsive:!0,lengthMenu:[[-1,5,10,25,50],["All",5,10,25,50]],pageLength:-1,columnDefs:[{targets:[4,5],searchable:!1,orderable:!1}]}),initActions();const e=document.getElementById("reload");e&&e.addEventListener("click",reload)}));