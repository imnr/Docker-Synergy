(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{201:function(e,o,t){"use strict";t.r(o);var r=t(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"orchestrator-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#orchestrator-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Orchestrator configuration")]),t("p",[e._v("The variable "),t("code",[e._v("orchestrator")]),e._v(" in the "),t("code",[e._v("[vm_wrk_lnx]")]),e._v(" group and the "),t("code",[e._v("[bm_wrk_lnx]")]),e._v(" is used to specify if a worker node should be assigned to the Kubernetes orchestrator ("),t("code",[e._v("orchestrator: 'kubernetes'")]),e._v(") or to the Swarm orchestrator ("),t("code",[e._v("orchestrator: 'swarm'")]),e._v("). In general, you should only change the orchestrator for worker nodes.")]),t("p",[t("strong",[e._v("Note:")]),e._v(" Docker supports a third type, "),t("code",[e._v("mixed")]),e._v(", that enables workloads to be scheduled by both Kubernetes and Swarm on the same node. Mixing orchestrator types on the same node is not recommended for production deployments because of the likelihood of resource contention and so, these playbooks do not support the "),t("code",[e._v("mixed")]),e._v(" type.")]),t("p",[e._v("The following example shows how to set Kubernetes as the default orchestrator for Linux VM worker nodes, and how to over-ride the default to use Swarm on one specific node instead.")]),t("p",[e._v("In the "),t("code",[e._v("vm_wrk_lnx.yml")]),e._v(" file:")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cpus: '4'\nram: '65536'\ndisk2_size: '500'\ndisk2: '/dev/sdb'\ndisk2_part: '/dev/sdb1'\norchestrator: kubernetes\n")])]),t("p",[e._v("In the "),t("code",[e._v("hosts")]),e._v(" file:")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[vm_wrk_lnx]\nhpe-worker01 ip_addr='10.10.174.122/22' esxi_host='esx04.cloudra.local' \nhpe-worker02 ip_addr='10.10.174.123/22' esxi_host='esx05.cloudra.local' \nhpe-worker03 ip_addr='10.10.174.124/22' esxi_host='esx06.cloudra.local' orchestrator=swarm\n")])]),t("p",[t("strong",[e._v("Note:")]),e._v(" The playbooks do not change Docker's default orchestrator type which is "),t("code",[e._v("swarm")]),e._v(". Instead, the inventory is used to configure worker nodes for Kubernetes workloads or swarm workloads as explained above. If you want to change the default orchestrator type, use the method explained in the Docker documentation at "),t("a",{attrs:{href:"https://docs.docker.com/ee/ucp/admin/configure/set-orchestrator-type/#set-the-default-orchestrator-type-for-new-nodes",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/ee/ucp/admin/configure/set-orchestrator-type/#set-the-default-orchestrator-type-for-new-nodes")]),e._v(". It is possible to manually change the orchestrator type for a node. When you do this, existing workloads are evicted and they are not migrated automatically to the new orchestrator. If you want the workloads to be scheduled by the new orchestrator, you must migrate them manually. More information is available in the Docker documentation at "),t("a",{attrs:{href:"https://docs.docker.com/ee/ucp/admin/configure/set-orchestrator-type/#what-happens-when-you-change-a-nodes-orchestrator",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/ee/ucp/admin/configure/set-orchestrator-type/#what-happens-when-you-change-a-nodes-orchestrator")]),e._v(".")])])}],!1,null,null,null);o.default=a.exports}}]);