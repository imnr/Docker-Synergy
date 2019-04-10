(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{145:function(e,t,a){"use strict";a.r(t);var i=a(0),s=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"enable-vsphere-high-availability-ha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-vsphere-high-availability-ha","aria-hidden":"true"}},[this._v("#")]),this._v(" Enable vSphere High Availability (HA)")]),t("p",[this._v("You must enable vSphere High Availability (HA) to support virtual machine failover during a HA event such as a host failure. Sufficient CPU and memory resources must be reserved across the cluster so that all VMs on the affected host(s) can fail over to remaining available hosts in the cluster. You configure an Admission Control Policy (ACP) to specify the percentage CPU and memory to reserve on all the hosts in the cluster to support HA functionality.")]),t("p",[t("strong",[this._v("Note:")])]),t("p",[this._v("You should not use the default Admission Control Policy. Instead, you should calculate the memory and CPU requirements that are specific to your environment.")])])}],!1,null,null,null);t.default=s.exports}}]);