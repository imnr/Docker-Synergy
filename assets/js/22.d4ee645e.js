(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{138:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"monitoring-with-prometheus-and-grafana-on-docker-swarm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-with-prometheus-and-grafana-on-docker-swarm","aria-hidden":"true"}},[e._v("#")]),e._v(" Monitoring with Prometheus and Grafana on Docker swarm")]),n("p",[e._v("The solution can be configured to enable the use of Prometheus and Grafana for monitoring. In this setup, there is no need for native installs and all the required monitoring software runs in containers, deployed as either services or stacks. The load among the three hosts will be shared as per the following diagram.")]),n("p",[n("img",{attrs:{src:r(63),alt:' "Solution architecture: Linux workers with Prometheus and Grafana"',title:"Figure 18. Solution architecture: Linux workers with Prometheus and Grafana"}})]),n("p",[n("strong",[e._v("Figure 18.")]),e._v(" Solution architecture: Linux workers with Prometheus and Grafana")]),n("p",[e._v("The Prometheus and Grafana services are declared in a Docker stack as replicated services with one replica each, so if they fail, Docker EE will ensure that they are restarted on one of the UCP VMs. cAdvisor and node-exporter are declared in the same stack as global services, so Docker EE will ensure that there is always one copy of each running on every machine in the cluster.")]),n("p",[n("strong",[e._v("Note:")]),e._v(" Prometheus and Grafana functionality is not turned on by default in this solution - see the section on Configuration for more information on how to enable these tools. Additionally, this functionality will not work for the Windows worker nodes in your environment at present.")])])}],a=r(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);t.default=o.exports},63:function(e,t,r){e.exports=r.p+"assets/img/simplivity-ops-architecture-promgraf.ed56aa51.png"}}]);