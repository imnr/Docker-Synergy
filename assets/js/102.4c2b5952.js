(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{254:function(e,o,n){"use strict";n.r(o);var t=n(0),a=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"solution-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#solution-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Solution configuration")]),e._v(" "),n("h2",{attrs:{id:"linux-only-vm-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-only-vm-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Linux-only VM configuration")]),e._v(" "),n("ul",[n("li",[e._v("3 Docker Universal Control Plane (UCP) VM nodes for HA and cluster management")]),e._v(" "),n("li",[e._v("3 Docker Trusted Registry (DTR) VM nodes for HA of the container registry")])]),e._v(" "),n("p",[e._v("The Docker UCP and DTR nodes are spread across 3 physical nodes, with one on each physical node. An odd number of manager nodes is recommended to avoid split-brain issues. It is possible to restrict the deployment to 1 UCP and 1 DTR, or to expand to more than 3, but the recommended minimum for an enterprise production deployment is 3 UCPs and 3 DTRs.")]),e._v(" "),n("ul",[n("li",[e._v("3 Docker Linux worker VM nodes for container workloads - Kubernetes or Docker swarm or a mix")])]),e._v(" "),n("p",[e._v("The Docker worker nodes will be co-located with the UCP and DTR nodes in a 3 physical node deployment. Where more than 3 physical nodes are available, the worker nodes will typically be separated onto the extra nodes. It is possible to specify that more than one worker node is deployed per physical node but this decision will depend on the requirements of your applications.")]),e._v(" "),n("ul",[n("li",[e._v("1 Docker UCP load balancer VM to ensure access to UCP in the event of a node failure")]),e._v(" "),n("li",[e._v("1 Docker DTR load balancer VM to ensure access to DTR in the event of a node failure")])]),e._v(" "),n("p",[e._v("By default, two load balancer VMs are deployed to increase availability of UCP and DTR and these are placed on separate physical nodes. Load balancing for applications running on worker nodes can achieved by using the playbooks to deploy additional load balancers, or by manually configuring the existing two to support your applications in addition to supporting UCP and DTR.")]),e._v(" "),n("ul",[n("li",[e._v("1 Logging server VM for central logging")]),e._v(" "),n("li",[e._v("1 NFS server VM for storage of Docker DTR images")])]),e._v(" "),n("p",[e._v("With the addition of the NFS and logging VMs, a total of 13 VMs are created for the default Linux-only deployment. In addition to these VMs, the playbooks also set up the Docker persistent storage plug-in from VMware. The vSphere Docker volume plug-in facilitates the storage of data in a shared datastore that can be accessed from any machine in the cluster.")]),e._v(" "),n("h2",{attrs:{id:"hybrid-vm-configuration-windows-and-linux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hybrid-vm-configuration-windows-and-linux","aria-hidden":"true"}},[e._v("#")]),e._v(" Hybrid VM configuration (Windows and Linux)")]),e._v(" "),n("ul",[n("li",[e._v("3 Docker swarm Windows worker VM nodes for container workloads (optional). Kubernetes is not yet supported for Windows workers.")])]),e._v(" "),n("p",[e._v("The hybrid deployment will typically add 3 Windows worker nodes to the above configuration, co-located with the Linux workers.")]),e._v(" "),n("h2",{attrs:{id:"bare-metal-bm-configuration-windows-and-linux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bare-metal-bm-configuration-windows-and-linux","aria-hidden":"true"}},[e._v("#")]),e._v(" Bare metal (BM) configuration (Windows and Linux)")]),e._v(" "),n("p",[e._v("This solution leverages HPE Synergy OneView 4.10 and HPE Image Streamer 4.10 to provision bare metal servers with an operating system so they can be added to a Docker/Kubernetes cluster as worker nodes. The bare metal worker nodes can be used in conjuction with VM worker nodes or on their own with a virtualized control plane.")]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" Some of the application software supported by this configuration does not currently run on Windows, for example, the Sysdig Software Agent (see the section "),n("code",[e._v("Monitoring with Sysdig")]),e._v(").")])])}],!1,null,null,null);o.default=a.exports}}]);