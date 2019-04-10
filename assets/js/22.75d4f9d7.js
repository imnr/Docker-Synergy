(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{143:function(e,t,r){"use strict";r.r(t);var s=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"monitoring-kubernetes-with-prometheus-and-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-kubernetes-with-prometheus-and-grafana","aria-hidden":"true"}},[e._v("#")]),e._v(" Monitoring Kubernetes with Prometheus and Grafana")]),s("p",[e._v("Monitoring a Kubernetes cluster with Prometheus is a natural choice as Kubernetes components themselves are instrumented with Prometheus metrics, therefore those components simply have to be discovered by Prometheus and most of the cluster is monitored.")]),s("p",[e._v("The solution uses the Prometheus Operator to deploy Prometheus and Grafana. The playbooks install "),s("code",[e._v("kube-state-metrics")]),e._v(" and "),s("code",[e._v("node-exporter")]),e._v(" components, as well as supporting "),s("code",[e._v("kubelet")]),e._v(" and "),s("code",[e._v("apiserver")]),e._v(" metrics. Sample dashboards for Grafana are installed to help you monitor your Kubernetes infrastructure.")]),s("p",[e._v("The Prometheus Operator makes running Prometheus on top of Kubernetes as easy as possible, while preserving Kubernetes-native configuration options. It introduces additional resources in Kubernetes to declare the desired state and configuration of Prometheus. The "),s("code",[e._v("Prometheus")]),e._v(" resource declaratively describes the desired state of a Prometheus deployment, while a "),s("code",[e._v("ServiceMonitor")]),e._v(" describes the set of targets to be monitored by Prometheus.")]),s("p",[s("img",{attrs:{src:r(59),alt:'"Prometheus Operator"'}})]),s("p",[s("strong",[e._v("Figure:")]),e._v(" Prometheus Operator")])])}],o=r(0),n=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);t.default=n.exports},59:function(e,t,r){e.exports=r.p+"assets/img/prometheus-operator.be8f41f5.jpg"}}]);